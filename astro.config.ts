import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
	markdown: {
		shikiConfig: {
			theme: "dracula",
			wrap: true,
	},
	},
	site: "https://kylejohnston.xyz/",
  integrations: [tailwind(), image(), sitemap()],
});
