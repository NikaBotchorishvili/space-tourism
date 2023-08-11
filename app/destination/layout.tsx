"use client";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Destination",
	description: "Created By Nika Botchorishvili",
};

export default function destinationLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
        <>
			{ children }
        </>
    );
}
