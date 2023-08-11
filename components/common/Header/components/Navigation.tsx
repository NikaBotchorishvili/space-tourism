import Image from "next/image";
import NavItem from "./NavItem";
import useWidth from "@/libs/useWidth";
import { motion } from "framer-motion";

type Props = {
	toggled: boolean;
	setToggled: React.Dispatch<React.SetStateAction<boolean>>;
};

function Navigation({ toggled, setToggled }: Props) {
	const width = useWidth();
	const variants = {
		initial: {
			right: -300,
		},
		animate: {
			right: toggled ? 0 : -300,
			transition: {
				duration: 0.3,
				ease: "easeInOut",
			},
		},
	};
    
	return width > 768 ? (
		<nav
			className={`w-[250px] sm:w-fit fixed z-[50] top-0 right-0 h-screen sm:h-fit md:static bg-secondary  box-content bg-opacity-10 backdrop-blur-[10px] py-5 sm:px-5 md:px-20 sm:flex`}
		>
			<Image
				src="shared/icon-close.svg"
				alt="close"
				width={20}
				height={20}
				className="absolute right-8 top-10 sm:hidden block h-[20px]"
				onClick={() => setToggled(false)}
			/>
			<ul className="flex gap-y-10 ml-10 sm:mt-0 mt-20 sm:mt- w-full h-full flex-col sm:flex-row md md:relative gap-x-12 font-barlow">
				<NavItem title="HOME" numeration="00" path="/" />
				<NavItem
					title="DESTINATION"
					numeration="01"
					path="/destination"
				/>
				<NavItem title="CREW" numeration="02" path="/crew" />
				<NavItem
					title="TECHNOLOGY"
					numeration="03"
					path="/technology"
				/>
			</ul>
		</nav>
	) : (
		<motion.nav
			variants={variants}
			animate="animate"
			initial="initial"
			className={`w-[250px] sm:w-fit fixed z-[50] top-0 right-0 h-screen sm:h-fit md:static bg-secondary  box-content bg-opacity-10 backdrop-blur-[10px] py-5 sm:px-5 md:px-20 sm:flex`}
		>
			<Image
				src="shared/icon-close.svg"
				alt="close"
				width={20}
				height={20}
				className="absolute right-8 top-10 sm:hidden block h-[20px]"
				onClick={() => setToggled(false)}
			/>
			<ul className="flex gap-y-10 ml-10 sm:mt-0 mt-20 sm:mt- w-full h-full flex-col sm:flex-row md md:relative gap-x-12 font-barlow">
				<NavItem title="HOME" numeration="00" path="/" />
				<NavItem
					title="DESTINATION"
					numeration="01"
					path="/destination"
				/>
				<NavItem title="CREW" numeration="02" path="/crew" />
				<NavItem
					title="TECHNOLOGY"
					numeration="03"
					path="/technology"
				/>
			</ul>
		</motion.nav>
	);
}

export default Navigation;
