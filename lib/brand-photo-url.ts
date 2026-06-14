import path from "node:path";

export function getPhotoUrl(relativePath: string) {
  return `/api/brand-photo/${relativePath
    .split(path.sep)
    .map((segment) => encodeURIComponent(segment))
    .join("/")}`;
}
