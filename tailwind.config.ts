import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		colors: {
			main: "#0B0D17",
			secondary: "#D0D6F9",
			transSecondary: "hsla(64%,77%,90%,0.9)",
			addonSecondary: "#979797",
			white: "#FFFFFF",
		},
		fontFamily: {
			barlow: "var(--barlow)",
			bellefair: "var(--bellefair)",
		},
		extend: {
			backgroundImage: {
                
			},
		},
	},
	plugins: [],
};
export default config;
