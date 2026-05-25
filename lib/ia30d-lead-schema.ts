import { z } from "zod";

export const ia30dLeadSchema = z.object({
  name: z.string().trim().min(2, "Decime tu nombre completo."),
  email: z.string().trim().email("Usá un email válido."),
  whatsapp: z.string().trim().optional(),
  company: z.string().trim().min(2, "Decime el nombre de tu empresa."),
  role: z.string().trim().optional(),
  teamSize: z.string().trim().optional(),
  aiLevel: z.string().trim().optional(),
  primaryGoal: z.string().trim().optional(),
  message: z.string().trim().max(1200, "Mantengamos el mensaje por debajo de 1200 caracteres.").optional(),
  source: z.string().trim().optional(),
  website: z.string().max(0, "No se pudo enviar el formulario.").optional(),
  privacy: z.boolean().refine((value) => value, {
    message: "Necesito tu autorización para contactarte.",
  }),
});

export type Ia30dLeadInput = z.infer<typeof ia30dLeadSchema>;
