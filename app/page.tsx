import MainOverlay from "@/components/common/MainOverlay";

export default function Home() {
	return (
		<MainOverlay bgClasses="md:desktop-home-bg sm:tablet-home-bg mobile-home-bg" responsiveClasses="items-end">
			<section className="flex  md:items-end pb-10 md:text-left text-center  md:justify-between w-10/12 mx-auto md:flex-row flex-col justify-end items-center md:gap-y-0 gap-y-16 py-48">
				<div className="max-w-[400px] flex flex-col gap-y-8">
					<h2 className="text-3xl font-normal font-barlow text-secondary">
						SO, YOU WANT TO TRAVEL TO
					</h2>
					<h1 className="text-9xl ">SPACE</h1>

					<p className="text-secondary">
						Let&apos;s face it; if you want to go to space, you might as
						well genuinely go to outer space and not hover kind of
						on the edge of it. Well sit back, and relax because
						we&apos;ll give you a truly out of this world experience!
					</p>
				</div>
				<div>
					<button className="relative z-10 bg-white text-2xl font-bellefair p-16 flex items-center justify-center w-[200px] h-[200px] text-main rounded-full">
						EXPLORE
					</button>
				</div>
			</section>
		</MainOverlay>
	);
}
