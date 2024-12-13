import { useRouter } from "next/router";
import React, { useState } from "react";

export default function ColorChanger() {
    const [color, setColor] = useState("");
    const router = useRouter();
    return (
        <div className={`flex flex-col space-x-4 w-full h-screen bg-${color}-800`}>
            <nav className="w-full sticky top-0 flex items-center mb-20">
                <button onClick={() => router.back()} className="h-12 border-2 bg-black border-gray-600 p-2 rounded-xl flex items-center justify-center hover:text-black hover:bg-white transition ease-in-out ml-4 mt-4">← Go back</button>
            </nav>
            <p>Өнгө солих:</p>
            <button
                className="border bg-red-800 py-4 px-6"
                onClick={() => {
                    setColor("red");
                }}
            >
                Улаан
            </button>
            <button
                className="border bg-blue-800 py-4 px-6"
                onClick={() => {
                    setColor("blue");
                }}
            >
                Цэнхэр
            </button>
            <button
                className="border bg-green-800 py-4 px-6"
                onClick={() => {
                    setColor("green");
                }}
            >
                Ногоон
            </button>
        </div>
    );
}
