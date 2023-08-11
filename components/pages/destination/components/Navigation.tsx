import Link from "next/link";

type Props = {
	name: string;
}

function Navigation({ name }: Props) {
	return (
		<nav>
			<ul className="flex gap-x-10">
				<li className={`pb-2 ${name == "Moon"? "border-b-2 border-b-white": "border-none"}`}>
					<Link href="destination?name=Moon">Moon</Link>
				</li>
				<li className={`pb-2 ${name == "Mars"? "border-b-2 border-b-white": "border-none"}`}>
					<Link href="destination?name=Mars">Mars</Link>
				</li>
				<li className={`pb-2 ${name == "Europa"? "border-b-2 border-b-white": "border-none"}`}>
					<Link href="destination?name=Europa">Europa</Link>
				</li>
				<li className={`pb-2 ${name == "Titan"? "border-b-2 border-b-white": "border-none"}`}>
					<Link href="destination?name=Titan">Titan</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navigation;
