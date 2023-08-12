type Props = {
	name: string;
	description: string;
};

function TechnologyInformation({ name, description }: Props) {
	return (
		<article className="flex flex-col gap-y-1">
			<h4 className="font-barlow text-xl text-secondary mt-10 md:mt-0">
				THE TERMINOLOGY
			</h4>
			<h1 className="text-5xl font-barlow tracking-wider">{name}</h1>
			<p className="text-secondary  max-w-sm text-md">{description}</p>
		</article>
	);
}

export default TechnologyInformation;
