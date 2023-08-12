import Link from "next/link";

function Navigation() {
	return (
		<nav className="flex mx-auto md:mx-0 md:gap-x-0 gap-x-5 md:flex-col md:justify-between">
			<Link
				className="w-10 h-10  border border-addonSecondary p-6 bg-white text-main rounded-full text-center flex items-center justify-center"
				href="/"
			>
				1
			</Link>
			<Link
				className="w-10 h-10 border border-addonSecondary p-6 rounded-full  flex items-center justify-center"
				href="/"
			>
				2
			</Link>
			<Link
				className="w-10 h-10 border border-addonSecondary p-6 rounded-full  flex items-center justify-center"
				href="/"
			>
				3
			</Link>
		</nav>
	);
}

export default Navigation;
