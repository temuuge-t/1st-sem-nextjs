import { useState } from "react"
import Image from "next/image";
import { useRouter } from "next/router";

export default function SearchPage() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    return (
        <div className="w-screen h-screen font-main bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400 flex items-center justify-center">
            <button onClick={() => router.back()} className="absolute top-6 left-4 h-12 text-white border-2 bg-orange-300 border-white p-2 rounded-xl flex items-center justify-center hover:text-black hover:bg-white transition ease-in-out ml-4 mt-4">← Go back</button>
            <div className="w-11/12 h-5/6 bg-white/10 rounded-2xl border-2 border-white/50 pb-32">
                <div className="w-full h-24 bg-white/10 flex px-12 items-center justify-between">
                    <p className="font-semibold text-3xl text-white">Browse through our catalog</p>
                    <input
                        type="search"
                        className="w-60 h-10 bg-white/20 rounded-full border-2 border-white focus:outline-none focus:border-orange-300 focus:placeholder:text-transparent placeholder-white placeholder:font-light text-white pl-4"
                        placeholder="Search here"
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
                <div className="w-full h-full pt-12 px-12">
                    <div className="w-full h-16">
                        <p className="text-white text-2xl font-light">Your results for: <span className="font-medium">{search}</span></p>
                    </div>
                    <div className="w-full h-5/6 grid grid-cols-4 grid-rows-2 gap-4">
                        <div className="border border-white rounded-xl flex justify-center items-center">
                            <Image src="/cocacola-logo.png" width={200} height={200} className={search.toLowerCase().includes("cola") ? `` : `hidden`} />
                        </div>
                        <div className="border border-white rounded-xl"></div>
                        <div className="border border-white rounded-xl"></div>
                        <div className="border border-white rounded-xl"></div>
                        <div className="border border-white rounded-xl"></div>
                        <div className="border border-white rounded-xl"></div>
                        <div className="border border-white rounded-xl"></div>
                        <div className="border border-white rounded-xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}