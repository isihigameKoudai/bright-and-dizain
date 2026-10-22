// @ts-check
import { defineConfig, sharpImageService } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: "https://www.brightanddizain.com/",
  output: "static",
  compressHTML: true,
  image: {
    service: sharpImageService(),
  },
});
