import { useState } from "react"
import Image from "next/image";
import { useRouter } from "next/router";

const data = [
  {
    id: 1,
    name: "Spongebob",
    email: "spongebob@krustykrab.com"
  },
  {
    id: 2,
    name: "Mr. Krabs",
    email: "mrkrabs@krustykrab.com"
  },
  {
    id: 3,
    name: "Squidward",
    email: "squidward@krustykrab.com"
  },
  {
    id: 4,
    name: "Patrick star",
    email: "patrick@email.com"
  },
  {
    id: 5,
    name: "Plankton",
    email: "plankton@chumbucket@email.com"
  }
]

export default function Week5() {

  const [search, setSearch] = useState("");

  const searchFilter = (array) => {
    return array.filter(
      (e) => e.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
  }

  const filteredData = searchFilter(data);
  const router = useRouter();

  return (
    <div>
      <header className="w-full h-20 flex items-center justify-between px-20">
        <button onClick={() => router.back()} className="h-12 border-2 bg-black border-gray-600 p-2 rounded-xl flex items-center justify-center hover:text-black hover:bg-white transition ease-in-out">← Go back</button>
        <p className="font-bold text-3xl">Хэрэглэгчийн жагсаалт</p>
      </header>
      <div className="w-full px-20">
        <input
          type="search"
          className="w-full h-8 rounded-lg border border-slate-300 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 px-4"
          placeholder="Хэрэглэгчийн нэрийг оруулна уу"
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredData.length == 0 ? (
          <p className="mt-8 text-zinc-600">No results for: {search}</p>
        )
          :
          (filteredData.map((data) => (
            <div className="w-full border p-6 mt-8 rounded-xl border border-zinc-400">
              <p className="font-semibold text-2xl mb-4">{data.name}</p>
              <p>{data.email}</p>
            </div>
          )))
        }
      </div>
    </div>
  );
}
