// @ts-check
import { defineConfig } from "astro/config"
import tailwind from "@astrojs/tailwind"
import db from "@astrojs/db"

// https://astro.build/config
export default defineConfig({
	output: "server",
	experimental: {
		serverIslands: true,
	},
	integrations: [tailwind(), db()],
})