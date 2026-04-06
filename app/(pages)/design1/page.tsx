import React from "react";

const DeisgnPage = () => {
	return (
		<div className="h-screen w-screen flex gap-[5vw] items-center justify-center">
			<div className="p-[1vh] border border-dashed relative bg-neutral-100">
				<div className="p-[1vh] border border-dashed aspect-3/4 w-[39vw] relative bg-white">
					<img
						src="/paper.png"
						className="w-full h-full object-cover absolute top-0 left-0 z-20 opacity-65"
						alt=""
					/>
					<h1 className="font-extrabold oswald text-amber-600/90 uppercase text-[12vh] w-full scale-y-70 text-center tracking-[-3px] top-[8vh] left-1/2 -translate-x-1/2 absolute ">
						Keyboard by
					</h1>
					<h1 className="font-extrabold oswald text-amber-950 uppercase text-[15vh] scale-y-[270%] text-center tracking-[-3px] top-[52vh] left-1/2 -translate-x-1/2 absolute">
						Epomaker
					</h1>
					<img
						src="/keyboard1.png"
						className="z-10 absolute w-[90%] left-1/2 -translate-x-1/2 top-[23vh] rounded-[2vh] z-25 drop-shadow-lg drop-shadow-neutral-900/40"
						alt=""
					/>

					<div className="absolute top-[2vh] right-[2vw]">
						<p className="font-medium exo text-right text-[1.75vh] tracking-[-1px]">
							97-key (ISO-UK: 98 Keys){" "}
						</p>
						<p className="font-medium exo text-right text-[1.75vh] tracking-[-1px]">
							Ergonomic Design
						</p>
						<p className="font-medium exo text-right text-[1.75vh] tracking-[-1px]">
							Wireless & Bluetooth & Type C
						</p>
					</div>
					<div className="absolute top-[2vh] left-[2vw] flex flex-col gap-[0.25vh]">
						<div className="w-[7vw] h-[1vh] bg-amber-400 rounded-[0.25vh]"></div>
						<div className="w-[7vw] h-[1vh] bg-amber-600 rounded-[0.25vh]"></div>
						<div className="w-[7vw] h-[1vh] bg-amber-700 rounded-[0.25vh]"></div>
						<div className="w-[7vw] h-[1vh] bg-amber-900 rounded-[0.25vh]"></div>
					</div>
					<p className="font-medium exo text-left text-[1.75vh] tracking-[-1px] top-[86vh] absolute left-[2vw]">
						features a detachable smart monitor and a knob
						<br />
						that can register keystrokes for multimedia control
					</p>
					<p className="font-extrabold oswalt text-right text-[3.5vh] text-amber-950 scale-y-170 tracking-[-1px] top-[86vh] absolute right-[2vw] z-23">
						RT100
					</p>
					{/* <div className="w-full top-[88vh] absolute left-0 flex gap-[1vw] items-center justify-center">
					<p className="exo font-semibold scale-y-125">Check it out</p>
					<p className="exo font-semibold scale-y-125">Check it out</p>
					<p className="exo font-semibold scale-y-125">Check it out</p>
					<p className="exo font-semibold scale-y-125">Check it out</p>
					<p className="exo font-semibold scale-y-125">Check it out</p>
					<p className="exo font-semibold scale-y-125">Check it out</p>
				</div> */}
				</div>
			</div>
		</div>
	);
};

export default DeisgnPage;
