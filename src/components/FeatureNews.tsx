'use client';
import { blog, colorClasses } from "@/constant"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

 export const FeatureNews = ({ FeaturNewsTitle, items }:
    {
      FeaturNewsTitle: string,
      items: blog[]
    }) => {
    return (
      <div className="bg-white shadow-lg w-full rounded-md ">
        <h1 className="text-[30px] px-2 my-3 font-semibold">{FeaturNewsTitle}</h1>
  
        {
          items.map((item) => (
            <div key={item.id} className="flex m-4 pt-3 pb-2  border-b-2 border-slate-200 gap-4">
              <div className="w-[80px] selection:  h-[80px] relative rounded-md overflow-hidden">
                <Image fill src={item.img[0]} alt="Feature img" />
              </div>
  
              <div className="flex flex-1 flex-col ">
                <div className="flex ">
                  {
                    item.categories.map((cat, i) => (
                      <button key={i} className={`btn !px-2 ${colorClasses[i]} !text-sm mr-2 border-lg`}>{cat}</button>
                    ))
                  }
                </div>
                <h2 className="text-title font-semibold !text-[1rem]">{item.title}</h2>
                <span className="text-slate-600">6 hour ago</span>
  
              </div>
  
              <div className="w-[50px] flex items-center justify-center ">
                <Link href={`/news/${item.id}`}>
                  <IoIosArrowForward className="bg-green-100 w-[35px] h-[35px] p-1 cursor-pointer text-green-300 rounded-lg" />
                </Link>
              </div>
            </div>
  
          ))
        }
      </div>
    )
  }