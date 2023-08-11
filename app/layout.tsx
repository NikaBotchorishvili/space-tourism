"use client";

import SplashScreen from "@/components/SplashScreen";
import "./globals.css";
import type { Metadata } from "next";
import { Bellefair, Barlow_Condensed } from "next/font/google";
import { useState } from "react";
import Header from "@/components/common/Header";

const bellefair = Bellefair({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--bellefair",
});
const barlowCondensed = Barlow_Condensed({
	subsets: ["latin"],
	weight: ["400"],
	variable: "--barlow",
});
export const metadata: Metadata = {
	title: "Space Tourism",
	description: "Created By Nika Botchorishvili",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Switch this back to true
	const [loading, setLoading] = useState(false);
	return (
		<html lang="en">
			<body
				className={`${barlowCondensed.variable} + ${bellefair.variable} text-white`}
			>
				{loading ? (
					<SplashScreen setLoading={setLoading} />
				) : (
					<>
						<Header />
						{children}
					</>
				)}
			</body>
		</html>
	);
}
