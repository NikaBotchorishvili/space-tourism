import Link from "next/link";

function Navigation() {
	return (
		<nav>
			<ul className="flex gap-x-10">
				<li className="pb-2 border-b-2 border-b-white">
					<Link href="destination/moon">Moon</Link>
				</li>
				<li>
					<Link href="destination/moon">Mars</Link>
				</li>
				<li>
					<Link href="destination/moon">Europa</Link>
				</li>
				<li>
					<Link href="destination/moon">Titan</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
