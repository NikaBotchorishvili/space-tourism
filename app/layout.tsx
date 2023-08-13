"use client";

import SplashScreen from "@/components/SplashScreen";
import "./globals.css";
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

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	// Switch this back to true
	const [loading, setLoading] = useState(true);
	return (
		<html lang="en">
			<head>
				<title>Space Tourism</title>
				<meta name="description" content="Created by nika botchorishvili" />
			</head>
			<body
				className={`${barlowCondensed.variable} + ${bellefair.variable} text-white overflow-x-hidden`}
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
