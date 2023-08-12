import Link from "next/link";

function Navigation({ name }: { name: string }) {
	return (
		<nav className="flex mx-auto md:mx-0 md:gap-x-0 gap-x-5 md:flex-col md:justify-between">
			<Link
				className={`w-10 h-10 border border-addonSecondary p-6 rounded-full text-center flex items-center justify-center ${
					name == "Launch vehicle"
						? "bg-white text-main"
						: "bg-none text-white"
				}`}
				href="/technology?name=Launch vehicle"
			>
				1
			</Link>
			<Link
				className={`w-10 h-10 border border-addonSecondary p-6 rounded-full text-center flex items-center justify-center ${
					name == "Spaceport"
						? "bg-white text-main"
						: "bg-none text-white"
				}`}
				href="/technology?name=Spaceport"
			>
				2
			</Link>
			<Link
				className={`w-10 h-10 border border-addonSecondary p-6 rounded-full text-center flex items-center justify-center ${
					name == "Space capsule"
						? "bg-white text-main"
						: "bg-none text-white"
				}`}
				href="/technology?name=Space capsule"
			>
				3
			</Link>
		</nav>
	);
}

export default Navigation;
