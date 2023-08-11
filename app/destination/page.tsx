"use client";
import Image from "next/image";
import MainOverlay from "@/components/common/MainOverlay";
import DestinationInformation from "@/components/pages/destination/components/DestinationInformation";
import Navigation from "@/components/pages/destination/components/Navigation";
import { useSearchParams } from "next/navigation";
import data from "@/libs/data";

function Destination() {
	const searchParams = useSearchParams();
	const nameParam = !searchParams.get("name")
		? "Moon"
		: searchParams.get("name");
	const destinationInfo = data.destinations.find(
		(destination) => destination.name == nameParam
	);

	return (
		<MainOverlay
			bgClasses="md:desktop-destination-bg sm:tablet-destination-bg mobile-destination-bg"
			responsiveClasses="items-end"
		>
			<section className="flex flex-col mb-[15px] mt-[100px]  items-start justify-center md:text-left text-center  gap-y-4 md:gap-y-16 w-10/12 mx-auto">
				<div className="max-w-[400px] flex flex-col  pt-90">
					<h1 className="flex text-2xl sm:gap-x-2 gap-x-6">
						<span className="text-addonSecondary">01</span>
						<span>Pick Your Destination</span>
					</h1>
				</div>
				<Image
					src="/destination/image-moon.png"
					className="md:hidden md:mx-0 mx-auto block sm:w-[250px] w-[170px] "
					width={300}
					height={300}
					alt="planet"
				/>
				<div className="flex flex-col items-center justify-between w-full md:flex-row">
					<Image
						src={destinationInfo!.images.png}
						className="md:block hidden w-[350px]"
						width={300}
						height={300}
						alt="planet"
					/>

					<div className="flex flex-col items-center md:items-start gap-y-10">
						<Navigation name={destinationInfo!.name} />
						<DestinationInformation
							name={destinationInfo!.name}
							travel={destinationInfo!.travel}
							distance={destinationInfo!.distance}
							description={destinationInfo!.description}
						/>
					</div>
				</div>
			</section>
		</MainOverlay>
	);
}

export default Destination;
