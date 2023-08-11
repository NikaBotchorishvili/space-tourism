"use client";

import MainOverlay from "@/components/common/MainOverlay";
import { motion } from "framer-motion";
import Image from "next/image";

function Technology() {
	return (
		<MainOverlay bgClasses="md:desktop-crew-bg sm:tablet-crew-bg mobile-crew-bg">
			<section className="flex flex-row mb-[15px] mt-[100px]  items-center justify-center md:text-left text-center  gap-y-4 md:gap-y-16 w-10/12 mx-auto">
				<div>
					<div className="max-w-[400px] flex flex-col md:mb-20 pt-90">
						<h1 className="flex text-2xl sm:gap-x-2 gap-x-6">
							<span className="text-addonSecondary">02</span>
							<span className="font-barlow">MEET YOUR CREW</span>
						</h1>
					</div>
					<div className="flex flex-col gap-y-6">
						<h2 className="font-light font-bellefair text-addonSecondary text-5xl">
							COMMANDER
						</h2>
						<h1 className="text-7xl font-bellefair font-light tracking-wide">
							DOUGLAS HURLEY
						</h1>
						<p className="text-secondary md:text-sm md:max-w-xs text-xl">
							Douglas Gerald Hurley is an American engineer,
							former Marine Corps pilot and former NASA astronaut.
							He launched into space for the third time as
							commander of Crew Dragon Demo-2.
						</p>

						<div className="flex gap-x-5 mt-16">
							<div className="w-[10px] md:w-[15px] aspect-square rounded-full bg-white"></div>
							<div className="w-[10px] md:w-[15px] aspect-square rounded-full bg-addonSecondary"></div>
							<div className="w-[10px] md:w-[15px] aspect-square rounded-full bg-addonSecondary"></div>
							<div className="w-[10px] md:w-[15px] aspect-square rounded-full bg-addonSecondary"></div>
						</div>
					</div>
				</div>

				<div className="w-[400px] relative">
					<motion.div
						className="flex overflow-x-hidden  "
						initial={{ right: 0 }}
						animate={{ right: 400 }}
					>
						<Image
							src="/crew/image-douglas-hurley.png"
							width={400}
							height={20}
							alt=""
						/>
						<Image
							src="/crew/image-mark-shuttleworth.png"
							width={400}
							height={20}
							alt=""
						/>
						<Image
							src="/crew/image-victor-glover.png"
							width={400}
							height={20}
							alt=""
						/>
						<Image
							src="/crew/image-anousheh ansari.png"
							width={400}
							height={20}
							alt=""
						/>
					</motion.div>
				</div>
			</section>
		</MainOverlay>
	);
}

export default Technology;
