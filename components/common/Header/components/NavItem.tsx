import Link from "next/link";
import { usePathname } from "next/navigation";

type Props = {
    title: string;
    numeration: string,
	path: string;
};

function NavItem({path, title, numeration}: Props) {
	const pathname = usePathname();
	return (
		<li>
			<Link
				className="relative flex flex-col items-center font-medium text-lg w-fit"
				href={path}
				prefetch={true}
				
			>
				<div className="flex text-xl sm:text-md gap-x-5 sm:gap-x-2 w-full peer">
					<small>{numeration}</small>
					<h2>{title}</h2>
				</div>
				<div
					className={`absolute -bottom-5 w-full h-[1px] opacity-0 bg-white peer-hover:opacity-100 ${
						pathname == path ? "sm:opacity-100" : ""
					}`}
				></div>
			</Link>
		</li>
	);
}

export default NavItem;
