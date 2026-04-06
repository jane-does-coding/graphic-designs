import React from "react";

const DeisgnPage = () => {
	return (
		<div className="h-screen w-screen flex gap-[5vw] items-center justify-center">
			<div className="p-[1vh] border border-dashed relative bg-neutral-100 overflow-hidden">
				<div className="p-[1vh] border border-dashed aspect-3/4 w-[39vw] relative bg-white">
					<img
						src="/paper.png"
						className="w-full h-full object-cover absolute top-0 left-0 z-20 opacity-65"
						alt=""
					/>
					<p className="exo font-extrabold uppercase text-[6vh] absolute z-27 top-[1.25vh] scale-y-140 leading-[6vh] tracking-[-3px] left-[0.75vw] text-white">
						Epomaker
					</p>
					<p className="oswalt font-extrabold uppercase text-[6.75vh] scale-x-280 absolute z-27 top-[60vh] leading-[6vh] tracking-[-2px] right-[1.75vw] text-amber-950 text-center w-[5vw]">
						R
					</p>
					<p className="oswalt font-extrabold uppercase text-[6.75vh] scale-x-280 absolute z-27 top-[66vh] leading-[6vh] tracking-[-2px] right-[1.75vw] text-amber-950 text-center w-[5vw]">
						T
					</p>
					<p className="oswalt font-extrabold uppercase text-[6.75vh] scale-x-280 absolute z-27 top-[73vh] leading-[6vh] tracking-[-2px] right-[1.75vw] text-amber-950 text-center w-[5vw]">
						1
					</p>
					<p className="oswalt font-extrabold uppercase text-[6.75vh] scale-x-280 absolute z-27 top-[79vh] leading-[6vh] tracking-[-2px] right-[1.75vw] text-amber-950 text-center w-[5vw]">
						0
					</p>
					<p className="oswalt font-extrabold uppercase text-[6.75vh] scale-x-280 absolute z-27 top-[85vh] leading-[6vh] tracking-[-2px] right-[1.75vw] text-amber-950 text-center w-[5vw]">
						0
					</p>
					<p className="font-medium exo text-right text-[2.25vh] tracking-[-1px] top-[37.5vh] absolute left-[12vw] w-[11vw] z-25 text-black">
						features a detachable smart monitor and a knob that can register
						keystrokes for multimedia control
					</p>
					<div className="absolute top-[32.5vh] left-[1.5vw] flex flex-col">
						<p className="font-medium exo text-left text-[1.75vh] tracking-[-1px]">
							97-key (ISO-UK: 98 Keys){" "}
						</p>
						<p className="font-medium exo text-left text-[1.75vh] tracking-[-1px]">
							Ergonomic Design
						</p>
						<p className="font-medium exo text-left text-[1.75vh] tracking-[-1px]">
							Wireless
						</p>
						<p className="font-medium exo text-left text-[1.75vh] tracking-[-1px]">
							Bluetooth
						</p>
						<p className="font-medium exo text-left text-[1.75vh] tracking-[-1px]">
							Type C
						</p>
					</div>
					<img
						src="/keyboard4.png"
						className="z-25 top-[2vh] w-[95%] left-1/2 -translate-x-1/2 absolute"
						alt=""
					/>
					<img
						src="/keyboard6.png"
						className="z-25 top-[32vh] w-[35%] right-[1vw] absolute"
						alt=""
					/>
					<img
						src="/keyboard7.png"
						className="z-25 top-[59vh] w-[28vw] left-[1vw] absolute"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};

export default DeisgnPage;
