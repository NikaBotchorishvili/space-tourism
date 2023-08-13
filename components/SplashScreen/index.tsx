"use client";
type Props = {
	setLoading: React.Dispatch<React.SetStateAction<boolean>>;
};
import { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";
const delayMultiplier = 0.4;
function SplashScreen({ setLoading }: Props) {
	const [scope, animate] = useAnimate();
	const slideAndFadeAnimationVariant = {
		initial: {
			opacity: 0,
			y: 30,
		},
		animate: (custom: number) => ({
			opacity: 1,
			y: 0,
			transition: {
				delay: delayMultiplier * custom,
			},
		}),
	};
	const rocketAnimationVariant = {
		initial: {
			bottom: -100,
		},
		animate: {
			top: -100,
		},
	};

	useEffect(() => {
		const animation = async () => {
			return await animate(
				scope.current,
				rocketAnimationVariant.animate,
				{
					duration: 1.5,
					delay: delayMultiplier * 5,
				}
			);
		};
		animation().then(() => setLoading(false));
	}, []);
	return (
		<main className="bg-main w-screen h-screen flex items-center justify-center overflow-auto">
			<section className=" text-white  text-center flex flex-col gap-y-10">
				<motion.h1
					variants={slideAndFadeAnimationVariant}
					initial="initial"
					animate="animate"
					className="text-6xl font-bold animate-"
				>
					Space Tourism
				</motion.h1>

				<div className="flex flex-col gap-y-2">
					<motion.p
						variants={{
							initial: {
								opacity: 0,
								y: 30,
							},
							animate: {
								opacity: 1,
								y: 0,
								transition: {
									delay: delayMultiplier * 3,
								},
							},
						}}
						custom={3}
						initial="initial"
						animate="animate"
						className="text-2xl"
					>
						Explore the abyss.
					</motion.p>
					<motion.p
						variants={slideAndFadeAnimationVariant}
						custom={4}
						initial="initial"
						animate="animate"
						className="text-2xl"
					>
						May the stars guide you.
					</motion.p>
				</div>
				<motion.div
					className="absolute overflow-hidden bottom-[100px] left-[50%] -translate-x-1/2"
					ref={scope}
				>
					<Image src="/rocket.gif" width={100} height={50} alt="" />
				</motion.div>
			</section>
		</main>
	);
}

export default SplashScreen;
