import Image from "next/image";

export default function Home() {
	return (
		<div className="flex gap-[3vw] h-screen w-screen items-center justify-center">
			<h1 className="text-[5vh] scale-y-120 absolute top-[6vh] left-[3vw] exo uppercase tracking-[-2px] font-extrabold">
				The Designs
			</h1>
			<a href="/design1">
				<img src="/design1.png" className="w-[30vw]" alt="" />
			</a>
			<a href="/design2">
				<img src="/design2.png" className="w-[30vw]" alt="" />
			</a>
			<a href="/design4">
				<img src="/design3.png" className="w-[30vw]" alt="" />
			</a>
		</div>
	);
}
