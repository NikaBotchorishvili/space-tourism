"use client";
import MainOverlay from "@/components/common/MainOverlay";
import { motion } from "framer-motion";

const delayMultiplier = 0.2;

export default function Home() {
	const textAnimationVariant = {
		initial: { left: -300, opacity: 0 },
		animate: (custom: number) => ({
			opacity: 1,
			left: 0,
			transition: {
				delay: delayMultiplier * custom,
				ease: "easeInOut"
			},
		}),
	};


	return (
		<MainOverlay
			bgClasses="md:desktop-home-bg sm:tablet-home-bg mobile-home-bg"
			responsiveClasses="items-end"
		>
			<section className="flex  md:items-end pb-10 md:text-left text-center  md:justify-between w-10/12 mx-auto md:flex-row flex-col justify-end items-center md:gap-y-0 gap-y-16 py-48">
				<div className="max-w-[400px] flex flex-col gap-y-8">
					<motion.h2
						variants={textAnimationVariant}
						custom={0}
						initial="initial"
						animate="animate"
						className="text-3xl font-normal font-barlow text-secondary relative"
					>
						SO, YOU WANT TO TRAVEL TO
					</motion.h2>
					<motion.h1
						variants={textAnimationVariant}
						custom={2}
						initial="initial"
						animate="animate"
						className="text-9xl relative"
					>
						SPACE
					</motion.h1>

					<motion.p
						variants={textAnimationVariant}
						custom={4}
						initial="initial"
						animate="animate"
						className="text-secondary relative"
					>
						Let&apos;s face it; if you want to go to space, you
						might as well genuinely go to outer space and not hover
						kind of on the edge of it. Well sit back, and relax
						because we&apos;ll give you a truly out of this world
						experience!
					</motion.p>
				</div>
				<div>
					<motion.button
						variants={textAnimationVariant}
						custom={4}
						initial={{ opacity: 0 }}
						animate={{ opacity: 1, transition: {
							delay: delayMultiplier * 6,
							
						} }}
						className="relative z-10 bg-white text-2xl font-bellefair p-16 flex items-center justify-center w-[200px] h-[200px] text-main rounded-full"
					>
						EXPLORE
					</motion.button>
				</div>
			</section>
		</MainOverlay>
	);
}
