"use client";
import Image from "next/image";
import { useState } from "react";
import Navigation from "./components/Navigation";

function Header() {
	const [toggled, setToggled] = useState(false);

	return (
		<header className="fixed top-10 sm:top-0 flex items-center justify-between w-full md:top-10 ">
			<Image
				className="ml-8 md:ml-12"
				height={20}
				width={40}
				src="/shared/logo.svg"
				alt="logo"
			/>
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
