"use client";

import { AnimatePresence, motion } from "framer-motion";

type Props = {
	name: string;
	description: string;
	distance: string;
	travel: string;
};
function DestinationInformation({
	name,
	description,
	distance,
	travel,
}: Props) {
	return (
		<AnimatePresence>
			<motion.div
				className="relative"
				key={name}
				initial={{ right: -300, opacity: 0 }}
				animate={{
					right: 0,
					opacity: 1,
					transition: {
						type: "spring",
					},
				}}
			>
				<div className="flex flex-col pb-10 border-b border-b-white md:w-fit w-[70vw] items-center ">
					<h1 className="tracking-wider text-8xl font-bellefair">
						{name.toUpperCase()}
					</h1>
					<p className="text-lg md:text-sm md:max-w-xs text-secondary font-barlow md:text-md">
						{description}
					</p>
				</div>

				<div className="flex flex-col mb-[50px] gap-y-10 sm:flex-row justify-center gap-x-16">
					<h3 className="flex flex-col gap-y-3">
						<span className="text-xl text-secondary font-barlow">
							AVG. DISTANCE
						</span>
						<span className="text-2xl font-bellefair">
							{distance}
						</span>
					</h3>
					<h3 className="flex flex-col gap-y-3">
						<span className="text-xl text-secondary font-barlow">
							EST. TRAVEL TIME
						</span>
						<span className="text-2xl font-bellefair">
							{travel}
						</span>
					</h3>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default DestinationInformation;
