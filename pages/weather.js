import Image from "next/image";
import { useRouter } from "next/router";

export default function Weather() {
    const router = useRouter();
    return (
        <div className="w-screen h-screen flex font-main p-6">
            <div className="h-full w-20 bg-sky-950 rounded-2xl">
                <div className="w-20 h-20 flex items-center justify-center">
                    <button onClick={() => router.back()} className="w-16 h-16 border-2 border-gray-500 rounded-xl hover:bg-black transition">← <br /> Go back</button>

                </div>
                <div className="w-20 h-20 flex items-center justify-center">
                    <a className="w-10 h-10 bg-white/30 rounded-xl flex items-center justify-center" href="">
                        <Image src="/wind.png" width={30} height={30} />
                    </a>
                </div>
                <div className="w-20 h-20 flex justify-center items-center">
                    <a href="" className="text-sm flex flex-col items-center font-medium">
                        <Image src="/cloud-sunny.png" width={25} height={25} className="object-contain mb-1" />
                        Weather
                    </a>
                </div>
                <div className="w-20 h-20 flex justify-center items-center">
                    <a href="" className="text-sm flex flex-col items-center text-zinc-400 font-medium">
                        <Image src="/list.webp" width={20} height={20} className="object-contain mb-1 brightness-200" />
                        Weather
                    </a>
                </div>
                <div className="w-20 h-20 flex justify-center items-center">
                    <a href="" className="text-sm flex flex-col items-center text-zinc-400 font-medium">
                        <Image src="/map.png" width={20} height={20} className="object-contain mb-1 brightness-150" />
                        Weather
                    </a>
                </div>
                <div className="w-20 h-20 flex justify-center items-center">
                    <a href="" className="text-sm flex flex-col items-center text-zinc-400 font-medium">
                        <Image src="/tuning.png" width={30} height={30} className="object-contain mb-1 brightness-200" />
                        Weather
                    </a>
                </div>
            </div>
            <div className="h-full w-[62%] px-4">
                <div className="h-12 w-full bg-sky-950 rounded-lg flex items-center pl-3"><p className="text-zinc-300 text-sm">Search for cities</p></div>
                <div className="h-[91%] w-full mt-3 grid grid-rows-3 gap-y-3">
                    <div className="flex justify-between">
                        <div className="h-full w-40 grid grid-rows-3 place-content-end pt-8">
                            <p className="font-semibold text-3xl leading-7">Madrid<br />
                                <span className="font-light text-sm text-zinc-500">Chance of rain: 0%</span>
                            </p>
                            <p></p>
                            <p className="font-semibold text-5xl self-start">31°</p>
                        </div>
                        <div className="h-full w-64 flex items-center justify-center">
                            <Image src="/sun.png" width={170} height={170} />
                        </div>
                    </div>
                    <div className="bg-sky-950 rounded-2xl justify-between">
                        <div className="w-full h-10 pl-8 flex items-end ">
                            <p className="text-sm font-semibold text-zinc-400">TODAY'S FORECAST</p>
                        </div>
                        <div className="w-full h-36 grid grid-cols-6 px-10 py-4 divide-x-[2px] divide-zinc-600/50">
                            <div className="w-full h-full flex flex-col items-center justify-between">
                                <p className="text-sm text-zinc-300 font-bold">6:00 AM</p>
                                <Image src="/cloud.png" width={50} height={50} />
                                <p className="text-xl font-bold">25°</p>
                            </div>
                            <div className="w-full h-full flex flex-col items-center justify-between">
                                <p className="text-sm text-zinc-300 font-bold">9:00 AM</p>
                                <Image src="/cloud-sunny.png" width={50} height={50} />
                                <p className="text-xl font-bold">28°</p>
                            </div>
                            <div className="w-full h-full flex flex-col items-center justify-between">
                                <p className="text-sm text-zinc-300 font-bold">12:00 PM</p>
                                <Image src="/sun.png" width={45} height={45} />
                                <p className="text-xl font-bold">33°</p>
                            </div>
                            <div className="w-full h-full flex flex-col items-center justify-between">
                                <p className="text-sm text-zinc-300 font-bold">3:00 PM</p>
                                <Image src="/sun.png" width={45} height={45} />
                                <p className="text-xl font-bold">34°</p>
                            </div>
                            <div className="w-full h-full flex flex-col items-center justify-between">
                                <p className="text-sm text-zinc-300 font-bold">6:00 PM</p>
                                <Image src="/sun.png" width={45} height={45} />
                                <p className="text-xl font-bold">32°</p>
                            </div>
                            <div className="w-full h-full flex flex-col items-center justify-between">
                                <p className="text-sm text-zinc-300 font-bold">9:00 PM</p>
                                <Image src="/cloud-sunny.png" width={50} height={50} />
                                <p className="text-xl font-bold">30°</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-sky-950 rounded-xl">
                        <div className="w-full h-10 flex items-end justify-between px-8">
                            <p className="text-sm font-semibold text-zinc-400">TODAY'S FORECAST</p>
                            <button className="bg-blue-600 px-3 py-1 rounded-full text-sm">See more</button>
                        </div>
                        <div className="w-full h-36 grid grid-cols-2 grid-rows-2 px-8 py-2">
                            <div className="w-full h-full flex">
                                <div className="h-full w-6 pt-1">
                                    <Image src="/thermometer.png" width={18} height={18} className="m-auto" />
                                </div>
                                <div className="ml-2">
                                    <p className="text-zinc-400">Real Feel</p>
                                    <p className="text-2xl font-bold">30°</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex">
                                <div className="h-full w-6 pt-1">
                                    <Image src="/wind.png" width={18} height={18} className="m-auto brightness-200" />
                                </div>
                                <div className="ml-2">
                                    <p className="text-zinc-400">Wind</p>
                                    <p className="text-2xl font-bold">0.2 km/h</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex">
                                <div className="h-full w-6 pt-1">
                                    <Image src="/rain.png" width={15} height={15} className="m-auto" />
                                </div>
                                <div className="ml-2">
                                    <p className="text-zinc-400">Chance of rain</p>
                                    <p className="text-2xl font-bold">0%</p>
                                </div>
                            </div>
                            <div className="w-full h-full flex">
                                <div className="h-full w-6 pt-1">
                                    <Image src="/uv.png" width={18} height={18} className="m-auto" />
                                </div>
                                <div className="ml-2">
                                    <p className="text-zinc-400">UV Index</p>
                                    <p className="text-2xl font-bold">3</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="h-full w-[35%] rounded-2xl flex items-end">
                <div className="w-full h-[90%] bg-sky-950 rounded-2xl p-8">
                    <p className="text-zinc-400 font-bold">7-DAY FORECAST</p>
                    <div className="w-full h-full grid grid-rows-7">
                        <div className="w-full h-full grid grid-cols-3 border-b-2 border-zinc-400/25">
                            <p className="font-medium text-zinc-400 flex items-center">Today</p>
                            <p className="flex items-center font-semibold">
                                <Image src="/sun.png" width={35} height={35} className="object-contain mr-3" />
                                Sunny
                            </p>
                            <p className="font-semibold flex items-center justify-end">36<span className="text-zinc-400"> /22</span></p>
                        </div>
                        <div className="w-full h-full grid grid-cols-3 border-b-2 border-zinc-400/25">
                            <p className="font-medium text-zinc-400 flex items-center">Tue</p>
                            <p className="flex items-center font-semibold">
                                <Image src="/sun.png" width={35} height={35} className="object-contain mr-3" />
                                Sunny
                            </p>
                            <p className="font-semibold flex items-center justify-end">37<span className="text-zinc-400"> /21</span></p>
                        </div>
                        <div className="w-full h-full grid grid-cols-3 border-b-2 border-zinc-400/25">
                            <p className="font-medium text-zinc-400 flex items-center">Wed</p>
                            <p className="flex items-center font-semibold">
                                <Image src="/sun.png" width={35} height={35} className="object-contain mr-3" />
                                Sunny
                            </p>
                            <p className="font-semibold flex items-center justify-end">37<span className="text-zinc-400"> /21</span></p>
                        </div>
                        <div className="w-full h-full grid grid-cols-3 border-b-2 border-zinc-400/25">
                            <p className="font-medium text-zinc-400 flex items-center">Thu</p>
                            <p className="flex items-center font-semibold">
                                <Image src="/cloud.png" width={35} height={35} className="object-contain mr-3" />
                                Sunny
                            </p>
                            <p className="font-semibold flex items-center justify-end">37<span className="text-zinc-400"> /21</span></p>
                        </div>
                        <div className="w-full h-full grid grid-cols-3 border-b-2 border-zinc-400/25">
                            <p className="font-medium text-zinc-400 flex items-center">Fri</p>
                            <p className="flex items-center font-semibold">
                                <Image src="/cloud.png" width={35} height={35} className="object-contain mr-3" />
                                Sunny
                            </p>
                            <p className="font-semibold flex items-center justify-end">37<span className="text-zinc-400"> /21</span></p>
                        </div>
                        <div className="w-full h-full grid grid-cols-3 border-b-2 border-zinc-400/25">
                            <p className="font-medium text-zinc-400 flex items-center">Sat</p>
                            <p className="flex items-center font-semibold">
                                <Image src="/cloud-sunny.png" width={35} height={35} className="object-contain mr-3" />
                                Sunny
                            </p>
                            <p className="font-semibold flex items-center justify-end">37<span className="text-zinc-400"> /21</span></p>
                        </div>
                        <div className="w-full h-full grid grid-cols-3">
                            <p className="font-medium text-zinc-400 flex items-center">Sun</p>
                            <p className="flex items-center font-semibold">
                                <Image src="/cloud-sunny.png" width={35} height={35} className="object-contain mr-3" />
                                Sunny
                            </p>
                            <p className="font-semibold flex items-center justify-end">37<span className="text-zinc-400"> /21</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}