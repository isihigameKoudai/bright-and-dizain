import type { ImageMetadata } from "astro";

interface PortfolioImage {
  url: ImageMetadata;
  lrg: ImageMetadata;
}

interface Portfolio {
  creative: PortfolioImage[];
  portrait: PortfolioImage[];
  landscape: PortfolioImage[];
}

const all = import.meta.glob<ImageMetadata>("../assets/portfolio/**/*.jpg", {
  eager: true,
  import: "default",
});

function buildCategory(cat: string): PortfolioImage[] {
  const thumbs: Record<number, ImageMetadata> = {};
  const lrgs: Record<number, ImageMetadata> = {};
  const re = new RegExp(`portfolio/${cat}/(?:lrg/)?[a-z](\\d+)\\.jpg$`);
  for (const [path, img] of Object.entries(all)) {
    const m = path.match(re);
    if (!m) continue;
    const n = Number(m[1]);
    if (path.includes("/lrg/")) lrgs[n] = img;
    else thumbs[n] = img;
  }
  return Object.keys(thumbs)
    .map(Number)
    .sort((a, b) => a - b)
    .map((n) => ({ url: thumbs[n], lrg: lrgs[n] }));
}

export const portfolio: Portfolio = {
  creative: buildCategory("creative"),
  portrait: buildCategory("portrait"),
  landscape: buildCategory("landscape"),
};
