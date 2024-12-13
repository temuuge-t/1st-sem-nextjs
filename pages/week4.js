import { useRouter } from "next/router";
import { useState } from "react"

export default function Week4() {
    const data = [
        {
            id: 1,
            title: "Subject 1",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            color: "red"
        },
        {
            id: 2,
            title: "Subject 2",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            color: "blue"
        },
        {
            id: 3,
            title: "Subject 3",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            color: "green"
        },
        {
            id: 4,
            title: "Subject 4",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            color: "red"
        },
        {
            id: 5,
            title: "Subject 5",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            color: "purple"
        },
        {
            id: 6,
            title: "Subject 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
            color: "yellow"
        }
    ];

    const [grid, setGrid] = useState(false);
    const [backgroundColor, setBackgroundColor] = useState("");
    const router = useRouter();

    return (
        <div className="w-full bg-white flex justify-center font-main">
            <div className="h-full w-3/5">
                <div className="w-full h-24 flex justify-between items-center">
                    <button onClick={() => router.back()} className="h-12 border-2 bg-blue-500 hover:border-gray-200 p-2 rounded-xl flex items-center justify-center hover:text-black hover:bg-white transition ease-in-out">← Go back</button>
                    <p className="text-black font-bold text-3xl">Нийтлэлүүд</p>
                    <button onClick={() => setGrid(!grid)} className="bg-blue-500 h-10 px-2 rounded-lg">{grid == false ? "Grid хэлбэрээр харах" : "List хэлбэрээр харах"}</button>
                </div>
                <div className={(grid == false ? `w-full text-black` : `w-full text-black grid grid-cols-2 gap-x-8`)}>
                    {data.map((data, index) => (
                        <div key={index}>
                            <div className={`border border-black rounded-lg p-4 mt-4 mb-4 bg-${backgroundColor}-800`}>
                                <p className="text-xl font">{data.title}</p>
                                <p className="mt-4">{data.description}</p>
                                <button onClick={() => setBackgroundColor(data.color)} className="bg-blue-500 p-2 text-white rounded-lg mt-4">Background-ыг {data.color} өнгөтэй болгох</button>
                                {console.log("Current select color -->", backgroundColor)}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}