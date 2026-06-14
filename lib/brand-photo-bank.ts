import { promises as fs } from "node:fs";
import path from "node:path";

import { getPhotoUrl } from "@/lib/brand-photo-url";

export const brandPhotoRoot = path.join(
  process.cwd(),
  "brand-assets",
  "Fotos Programas IA-30D",
);

export type BrandPhoto = {
  group: string;
  relativePath: string;
  filename: string;
};

export const recommendedAboutJaimePhotos: Array<{
  relativePath: string;
  title: string;
  note: string;
  objectPosition?: string;
}> = [
  {
    relativePath: "CENSER - Gen 1/DSC03803.jpg",
    title: "Editorial abierta",
    note: "Buen gesto con la mano, más aire alrededor y muy buena lectura horizontal.",
  },
  {
    relativePath: "CENSER - Gen 1/DSC03808.jpg",
    title: "Equilibrada y clara",
    note: "Se te ve explicando con la compu en mano y funciona bien para un bloque tipo Sobre mi.",
  },
  {
    relativePath: "CENSER - Gen 1/DSC03807.jpg",
    title: "Retrato vertical",
    note: "Más foco en vos. Sirve mejor si quisiéramos un recorte más cerrado y humano.",
    objectPosition: "center 32%",
  },
  {
    relativePath: "CENSER - Gen 1/DSC03810.jpg",
    title: "Conceptual",
    note: "Más dramática y distinta. Menos literal, más imagen de autor.",
  },
];

async function walkPhotos(dir: string, baseDir: string): Promise<BrandPhoto[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const results = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return walkPhotos(fullPath, baseDir);
      }

      if (!/\.(jpe?g|png|webp)$/i.test(entry.name)) {
        return [];
      }

      const relativePath = path.relative(baseDir, fullPath);
      const group = path.dirname(relativePath);

      return [
        {
          group,
          relativePath,
          filename: entry.name,
        },
      ];
    }),
  );

  return results.flat();
}

export async function getBrandPhotos() {
  const photos = await walkPhotos(brandPhotoRoot, brandPhotoRoot);
  return photos.sort((a, b) => a.relativePath.localeCompare(b.relativePath));
}

export { getPhotoUrl };
