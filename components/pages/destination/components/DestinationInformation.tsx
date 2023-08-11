"use client"

type Props = {
	nameParam: string
}

function DestinationInformation({nameParam}: Props) {
	console.log(nameParam)
	return (
		<>
			<div className="flex flex-col pb-10 border-b border-b-white md:w-fit w-[70vw] items-center ">
				<h1 className="tracking-wider text-8xl font-bellefair">MOON</h1>
				<p className="text-lg md:text-sm md:max-w-xs text-secondary font-barlow md:text-md">
					See our planet as you've never seen it before. A perfect
					relaxing trip away to help regain perspective and come back
					refreshed. While you're there, take in some history by
					visiting the Luna 2 and Apollo 11 landing sites.
				</p>
			</div>

			<div className="flex flex-col mb-[50px] gap-y-10 sm:flex-row justify-center gap-x-16">
				<h3 className="flex flex-col gap-y-3">
					<span className="text-xl text-secondary font-barlow">
						AVG. DISTANCE
					</span>
					<span className="text-2xl font-bellefair">384,400 KM</span>
				</h3>
				<h3 className="flex flex-col gap-y-3">
					<span className="text-xl text-secondary font-barlow">
						EST. TRAVEL TIME
					</span>
					<span className="text-2xl font-bellefair">3 DAYS</span>
				</h3>
			</div>
		</>
	);
}

export default DestinationInformation;
