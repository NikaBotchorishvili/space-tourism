type Props = {
	children: React.ReactNode;
	bgClasses: string;
	responsiveClasses?: string;
};

function MainOverlay({ children, bgClasses, responsiveClasses }: Props) {
	return (
		<main
			className={`${bgClasses} ${
				responsiveClasses && responsiveClasses
			}  bg-cover bg-center  w-screen min-h-screen  flex  overflow-x-hidden`}
		>
			{children}
		</main>
	);
}

export default MainOverlay;
