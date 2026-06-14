import { promises as fs } from "node:fs";
import path from "node:path";

import { NextResponse } from "next/server";

import { brandPhotoRoot } from "@/lib/brand-photo-bank";

function contentTypeForFile(filePath: string) {
  if (filePath.endsWith(".png")) {
    return "image/png";
  }
  if (filePath.endsWith(".webp")) {
    return "image/webp";
  }
  return "image/jpeg";
}

export async function GET(
  _request: Request,
  context: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await context.params;

  if (!slug?.length) {
    return NextResponse.json({ error: "Missing image path" }, { status: 400 });
  }

  const relativePath = path.join(...slug);
  const absolutePath = path.resolve(brandPhotoRoot, relativePath);

  if (!absolutePath.startsWith(path.resolve(brandPhotoRoot))) {
    return NextResponse.json({ error: "Invalid image path" }, { status: 400 });
  }

  try {
    const buffer = await fs.readFile(absolutePath);

    return new NextResponse(buffer, {
      headers: {
        "Content-Type": contentTypeForFile(absolutePath),
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }
}
