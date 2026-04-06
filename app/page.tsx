import Image from "next/image";

export default function Home() {
	return (
		<div className="flex gap-[5vw] h-screen w-screen items-center justify-center">
			<img src="/design1.png" className="w-[30vw]" alt="" />
			<img src="/design2.png" className="w-[30vw]" alt="" />
		</div>
	);
}
