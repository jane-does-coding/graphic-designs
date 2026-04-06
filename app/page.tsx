import Image from "next/image";

export default function Home() {
	return (
		<div className="flex gap-[3vw] h-screen w-screen items-center justify-center">
			<a href="/design1">
				<img src="/design1.png" className="w-[25vw]" alt="" />
			</a>
			<a href="/design2">
				<img src="/design2.png" className="w-[25vw]" alt="" />
			</a>
			<a href="/design4">
				<img src="/design3.png" className="w-[25vw]" alt="" />
			</a>
		</div>
	);
}
