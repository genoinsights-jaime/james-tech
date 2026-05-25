import { NextResponse, type NextRequest } from "next/server";
import { Resend } from "resend";

import { ia30dLeadSchema } from "@/lib/ia30d-lead-schema";

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function field(label: string, value?: string) {
  if (!value) return "";

  return `
    <tr>
      <td style="padding:10px 0;color:#6b7280;font-size:13px;">${label}</td>
      <td style="padding:10px 0;color:#030712;font-size:15px;font-weight:600;">${escapeHtml(value)}</td>
    </tr>
  `;
}

export async function POST(request: NextRequest) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "No se pudo leer el formulario." }, { status: 400 });
  }

  const parsed = ia30dLeadSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json(
      {
        message: "Revisá los campos marcados.",
        errors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  const data = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.LEAD_TO_EMAIL;

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { message: "El envío de emails todavía no está configurado." },
      { status: 503 },
    );
  }

  const recipients = to
    .split(",")
    .map((email) => email.trim())
    .filter(Boolean);
  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to: recipients,
      replyTo: data.email,
      subject: `Nuevo lead IA-30D: ${data.name} · ${data.company}`,
      text: [
        "Nuevo contacto desde IA-30D",
        "",
        `Nombre: ${data.name}`,
        `Email: ${data.email}`,
        `WhatsApp: ${data.whatsapp || "-"}`,
        `Empresa: ${data.company}`,
        `Rol: ${data.role || "-"}`,
        `Tamaño del equipo: ${data.teamSize || "-"}`,
        `Nivel de IA: ${data.aiLevel || "-"}`,
        `Objetivo: ${data.primaryGoal || "-"}`,
        `Mensaje: ${data.message || "-"}`,
        `Fuente: ${data.source || "-"}`,
      ].join("\n"),
      html: `
        <div style="margin:0;background:#f5f7fb;padding:32px;font-family:Arial,sans-serif;">
          <table style="width:100%;max-width:680px;margin:0 auto;border-collapse:collapse;background:#ffffff;border-radius:20px;overflow:hidden;">
            <tr>
              <td style="padding:28px 30px;background:#030712;color:#ffffff;">
                <p style="margin:0 0 10px;color:#056cf2;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">IA-30D · Nuevo contacto</p>
                <h1 style="margin:0;font-size:28px;line-height:1.05;">${escapeHtml(data.name)} quiere hablar sobre IA-30D.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 30px;">
                <table style="width:100%;border-collapse:collapse;">
                  ${field("Nombre", data.name)}
                  ${field("Email", data.email)}
                  ${field("WhatsApp", data.whatsapp)}
                  ${field("Empresa", data.company)}
                  ${field("Rol", data.role)}
                  ${field("Tamaño del equipo", data.teamSize)}
                  ${field("Nivel actual de IA", data.aiLevel)}
                  ${field("Objetivo principal", data.primaryGoal)}
                  ${field("Mensaje", data.message)}
                  ${field("Fuente", data.source)}
                </table>
              </td>
            </tr>
          </table>
        </div>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("IA-30D lead email error", error);
    return NextResponse.json(
      { message: "No se pudo enviar el formulario. Probá de nuevo en unos minutos." },
      { status: 500 },
    );
  }
}
