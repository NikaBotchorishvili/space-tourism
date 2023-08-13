"use client";
import Image from "next/image";
import { useState } from "react";
import Navigation from "./components/Navigation";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/material";

function Header() {
	const [toggled, setToggled] = useState(false);
	const desktopScreenSize = useMediaQuery("(min-width:1024px)");


	return (
		<header className="fixed top-10 sm:top-0 z-50 flex items-center justify-between w-full md:top-10 ">
			
			<motion.div
				className="relative"
				initial={{ left: -200 }}
				animate={{ left: 0 }}
			>
				<Image
					className="ml-8 md:ml-12"
					height={20}
					width={40}
					src="/shared/logo.svg"
					alt="logo"
				/>

			</motion.div>
			<Image
				src="shared/icon-hamburger.svg"
				alt="close"
				width={20}
				height={20}
				className={`mr-8 sm:hidden block ${
					toggled ? "hidden" : "block"
				}`}
				onClick={() => setToggled(true)}
			/>
			<Navigation toggled={toggled} setToggled={setToggled} />
		</header>
	);
}

export default Header;
