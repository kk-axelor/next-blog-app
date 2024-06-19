'use client';
import { blog } from "@/constant"
import Image from "next/image"
import Link from "next/link"

export const BannerCard=({item}:{item:blog})=>{
    return(
      <div className="h-full w-[330px] shadow-md rounded-md overflow-hidden">
        <div className="w-full h-[200px] relative">
          <Image  fill src={item.img[0]} className="object-cover" alt="img"  />
        </div>
        <Link  href={`news/${item.id}`}>
        <div className="text-black p-2 bg-white">
          <h1 className="text-title">{item.title}</h1>
        <p className="text-para">{item.desc}</p>
        <span className="card-time text-slate-700">6 hour ago</span>
        </div>
        </Link>
  
      </div>
    )
  }
  