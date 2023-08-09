"use client";

import "./globals.css";
import type { Metadata } from "next";
import { Bellefair } from "next/font/google";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
const bellefair = Bellefair({ subsets: ["latin"], weight: ["400"] });

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
			<body className={bellefair.className}>
                {loading? (
                    <SplashScreen setLoading={setLoading}/>
                ): (
                    children

                )}
            
            </body>
		</html>
	);
}
