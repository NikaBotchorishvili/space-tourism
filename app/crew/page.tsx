"use client";

import MainOverlay from "@/components/common/MainOverlay";
import CrewMemberInformation from "@/components/pages/crew/components/CrewMember";
import CrewMemberImage from "@/components/pages/crew/components/CrewMemberImage";
import Navigation from "@/components/pages/crew/components/Navigation";
import data from "@/libs/data";
import useWidth from "@/libs/useWidth";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

function Crew() {
	const width = useWidth();
	const searchParams = useSearchParams();

	const memberParam = !searchParams.get("member")
		? "Douglas Hurley"
		: searchParams.get("member");
	const memberInfo = data.crew.find((member) => member.name == memberParam);
	if (!memberParam) {
		throw new Error("no name");
	}
	return (
		<MainOverlay bgClasses="md:desktop-crew-bg sm:tablet-crew-bg mobile-crew-bg">
			<section className="flex md:flex-row  flex-col   mb-[50px] mt-[150px]  items-center justify-center md:text-left text-center  gap-y-4 md:gap-y-16 md:justify-between w-10/12 mx-auto ">
				<div>
					<div className="max-w-[400px] flex flex-col md:mb-20 pt-90">
						<h1 className="flex text-2xl sm:gap-x-2 gap-x-6">
							<span className="text-addonSecondary">02</span>
							<span className="font-barlow">MEET YOUR CREW</span>
						</h1>
					</div>

					<div className="flex flex-col items-center md:items-start gap-y-6 mt-16">
						{width < 640 && (
							<div className="w-[350px] ">
								<motion.div
									className="flex overflow-x-hidden relative"
									key={memberInfo!.name}
									variants={{
										initial: {
											opacity: 0,
											right: -400,
										},
										animate: {
											opacity: 1,
											right: 0,
											transition: {
												delay: 0.1,
												ease: "easeInOut",
											},
										},
									}}
									animate="animate"
									initial="initial"
								>
									<CrewMemberImage
										src={memberInfo!.images.png}
										name={memberInfo!.name}
									/>
								</motion.div>
							</div>
						)}
						{width < 640 && <Navigation name={memberInfo!.name} />}

						<CrewMemberInformation
							name={memberInfo!.name}
							bio={memberInfo!.bio}
							role={memberInfo!.role}
						/>
						{width > 640 && <Navigation name={memberInfo!.name} />}
					</div>
				</div>
				{width > 640 && (
					<div className="w-[350px] ">
						<motion.div
							className="flex overflow-x-hidden relative"
							key={memberInfo!.name}
							variants={{
								initial: { opacity: 0, right: -400 },
								animate: {
									opacity: 1,
									right: 0,
									transition: {
										delay: 0.1,
										ease: "easeInOut",
									},
								},
							}}
							animate="animate"
							initial="initial"
						>
							<CrewMemberImage
								src={memberInfo!.images.png}
								name={memberInfo!.name}
							/>
						</motion.div>
					</div>
				)}
			</section>
		</MainOverlay>
	);
}

export default Crew;
