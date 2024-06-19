'use client';
import { blog, getRandomColorClass } from "@/constant"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react";

export const NewsSidebar = ({ item }: { item: blog }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <div className="w-full h-[120px] rounded-md overflow-hidden shadow-md  flex gap-2 ">
        <div className="w-[150px] h-full relative ">
          <Image fill className="object-cover" src={item.img[0]} alt="image" />
        </div>

        <div className="flex flex-1 flex-col py-2 pr-2  bg-white">
            <Link href={`news/${item.id}`}>
          <div className="flex">
            {
              item.categories.map((cat, i) => (
                <button key={i} className={`btn  ${getRandomColorClass()} !px-2  !text-sm mr-2 border-lg`}>{cat}</button>
              ))
            }
          </div>
          <h2 className="text-title font-semibold !text-[1rem]">{item.title}</h2>
          <p className="h-[25px]  overflow-clip">{item.desc}</p>
          <span className="text-slate-600">6 hour ago</span>
      </Link>
        </div>
    </div>

  )
}