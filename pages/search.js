import { useRouter } from "next/router";
import { useState } from "react";

export default function Search() {
    const [search, setSearch] = useState("");
    const router = useRouter();

    console.log("search value --->", search);

    return (
        <div className="flex h-screen text-black flex-col">
            <nav className="w-full sticky top-0 flex items-center mb-20">
                <button onClick={() => router.back()} className="h-12 text-white border-2 bg-black border-gray-600 p-2 rounded-xl flex items-center justify-center hover:text-black hover:bg-white transition ease-in-out ml-4 mt-4">← Go back</button>
            </nav>
            <div className="flex flex-col items-center justify-center">
                <p className="text-white mb-4">search: {search}</p>
                <input type="search" onChange={(e) => setSearch(e.target.value)} />
            </div>

        </div>
    )
}