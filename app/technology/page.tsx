"use client";

import MainOverlay from "@/components/common/MainOverlay";
import Navigation from "@/components/pages/technology/components/Navigation";
import TechnologyInformation from "@/components/pages/technology/components/TechnologyInformation";
import data from "@/libs/data";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

function Technology() {
	const searchParams = useSearchParams();

	const technologyName = !searchParams.get("name")
		? "Launch vehicle"
		: searchParams.get("name");
	const technologyInfo = data.technology.find(
		(technology) => technology.name == technologyName
	);
	if (!technologyName) {
		throw new Error("no name");
	}
	return (
		<MainOverlay bgClasses="md:desktop-technology-bg mobile-technology-bg">
			<section className="flex flex-col mb-[15px] mt-[100px] items-start justify-center md:text-left text-center  gap-y-4 md:gap-y-16 w-10/12 mx-auto md:ml-auto">
				<div className="max-w-[400px] flex flex-col  pt-90">
					<h1 className="flex text-2xl sm:gap-x-2 gap-x-6">
						<span className="text-addonSecondary">03</span>
						<span>SPACE LAUNCH 101</span>
					</h1>
				</div>
				<div className="flex gap-y-10 md:gap-y-0  items-center flex-col-reverse sm:justify-center  md:flex-row md:justify-between w-full">
					<div className="flex flex-col  md:flex-row gap-x-10">
						<Navigation name={technologyInfo!.name} />
						<TechnologyInformation
							name={technologyInfo!.name}
							description={technologyInfo!.description}
						/>
					</div>
					<div className="w-screen md:w-fit bg-main">
						<motion.picture
							key={technologyInfo?.name}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							<source
								media="(min-width: 768px)"
								srcSet={technologyInfo?.images.portrait}
							/>
							<img
								className="w-screen md:w-[400px]"
								src={technologyInfo?.images.landscape}
								alt={technologyInfo?.name}
							/>
						</motion.picture>
					</div>
				</div>
			</section>
		</MainOverlay>
	);
}

export default Technology;
