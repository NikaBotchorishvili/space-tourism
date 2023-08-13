type Props = {
	name: string;
	role: string;
	bio: string;
};

function CrewMemberInformation({ name, role, bio }: Props) {
	return (
		<div className="order-2 flex flex-col gap-y-4">
			<h2 className="font-light font-bellefair text-addonSecondary text-5xl mt-12 md:mt-0">
				{role}
			</h2>
			<h1 className="md:text-7xl text-5xl font-bellefair font-light tracking-wide  ">
				{name}
			</h1>
			<p className="text-secondary md:text-sm md:max-w-sm text-xl">
				{bio}
			</p>
		</div>
	);
}

export default CrewMemberInformation;
