import Link from "next/link";

function Navigation() {
	return (
		<nav>
			<ul className="flex gap-x-10">
				<li className="pb-2 border-b-2 border-b-white">
					<Link href="destination?name=Moon">Moon</Link>
				</li>
				<li>
					<Link href="destination?name=Mars">Mars</Link>
				</li>
				<li>
					<Link href="destination?name=Europa">Europa</Link>
				</li>
				<li>
					<Link href="destination?name=Titan">Titan</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
