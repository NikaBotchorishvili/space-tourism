import Link from "next/link";

function Navigation({ name }: { name: string }) {
	return (
		<div className="flex gap-x-5  mx-auto md:mx-0 ">
			<Link
				href="crew?member=Douglas Hurley"
				className={`w-[10px] md:w-[15px] aspect-square rounded-full ${
					name == "Douglas Hurley" ? "bg-white" : "bg-addonSecondary"
				}`}
			></Link>
			<Link
				href="crew?member=Mark Shuttleworth"
				className={`w-[10px] md:w-[15px] aspect-square rounded-full ${
					name == "Mark Shuttleworth" ? "bg-white" : "bg-addonSecondary"
				}`}
			></Link>
			<Link
				href="crew?member=Victor Glover"
				className={`w-[10px] md:w-[15px] aspect-square rounded-full ${
					name == "Victor Glover" ? "bg-white" : "bg-addonSecondary"
				}`}
			></Link>
			<Link
				href="crew?member=Anousheh Ansari"
				className={`w-[10px] md:w-[15px] aspect-square rounded-full ${
					name == "Anousheh Ansari" ? "bg-white" : "bg-addonSecondary"
				}`}
			></Link>
		</div>
	);
}

export default Navigation;
