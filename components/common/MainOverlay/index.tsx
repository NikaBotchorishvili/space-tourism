type Props = {
	children: React.ReactNode;
	bgClasses: string;
};

function MainOverlay({ children, bgClasses }: Props) {
	return (
		<main
			className={`${bgClasses} bg-no-repeat bg-cover bg-center w-screen h-screen items-end flex  overflow-x-hidden`}
		>
			{children}
		</main>
	);
}

export default MainOverlay;
