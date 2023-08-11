"use client";
import Image from "next/image";
import MainOverlay from "@/components/common/MainOverlay";
import DestinationInformation from "@/components/pages/destination/components/DestinationInformation";
import Navigation from "@/components/pages/destination/components/Navigation";

function Destination() {
	return (
		<MainOverlay bgClasses="md:desktop-destination-bg sm:tablet-destination-bg mobile-destination-bg">
			<section className="flex flex-col  h-[90vh] items-start justify-center md:text-left text-center gap-y-4 md:gap-y-16 w-10/12 mx-auto">
				<div className="max-w-[400px] flex flex-col md:gap-y-0 gap-y-4">
					<h1 className="flex text-2xl gap-x-2">
						<span className="text-addonSecondary">01</span>
						<span>Pick Your Destination</span>
					</h1>
				</div>
				<Image
					src="/destination/image-moon.png"
					className="md:hidden md:mx-0 mx-auto block w-[150px] "
					width={300}
					height={300}
					alt="planet"
				/>
				<div className="flex flex-col items-center justify-between w-full md:flex-row">
					<Image
						src="/destination/image-moon.png"
						className="md:block hidden md:w-[300px] w-[150px] "
						width={300}
						height={300}
						alt="planet"
					/>

					<div className="flex flex-col items-center md:items-start gap-y-10">
						<Navigation />
						<DestinationInformation/>
					</div>
				</div>
			</section>
		</MainOverlay>
	);
}

export default Destination;
