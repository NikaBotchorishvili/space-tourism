import Image from "next/image";

function CrewMemberImage({ src, name }: { src: string; name: string }) {
	return <Image src={src} width={400} height={400} alt={name || "member"} />;
}

export default CrewMemberImage;
