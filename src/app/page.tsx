'use client';
import { BannerCard } from "@/components/BannerCard";
import { NewsSidebar } from "@/components/NewSidebar";
import { blogItems, carouselData, colorClasses } from "@/constant";
import Image from "next/image";
import HomeCarousel from "@/components/HomeCarousel";
import Link from "next/link";
import { FeatureNews } from "@/components/FeatureNews";

export default function Home() {

  return (
    <main className="p-3  mb-10">

      {/* banner */}
      <div className="flex    h-[380px]  justify-between gap-4">
        {/* banner-img  */}
        <div className="banner-img flex justify-between flex-col flex-1 border-y-2 rounded-lg  text-white p-4">
          <div className="flex gap-3">
            <button className="btn bg-purple-300 text-purple-500">category</button>
            <button className="btn  bg-red-200 text-orange-400">category</button>
          </div>
          <div>
            <h1 className="text-title mb-2">News title</h1>
            <p className="text-para">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rem consectetur omnis velit vitae veritatis architecto dolor molestiae ea praesentium necessitatibus?</p>
            <span className="font-semibold text-lg my-2">6 hour ago</span>
          </div>
        </div>
        {/* banner-card */}
        <div className="flex-1  flex  justify-between">
          <BannerCard item={blogItems[0]} />
          <BannerCard item={blogItems[0]} />
        </div>
      </div>
      {/* carousel */}
      <HomeCarousel data={carouselData} />


      {/* favorite news */}
      <div className="flex w-full my-4 gap-5">
        {/* feature new */}
        <div className="w-[40%]">
          <FeatureNews FeaturNewsTitle="Feature News" items={blogItems} />
        </div>

        <div className="my-3 w-full flex flex-col gap-3">
          {
            blogItems.map((item) => (
              <NewsSidebar key={item.id} item={item} />
            ))
          }
        </div>
      </div>

      <div className="flex h-[280px] gap-2 overflow-clip ">
        {
          blogItems.map((item) => (
            <div key={item.id} className="h-full w-[300px] shadow-md rounded-md overflow-hidden  border">
              <div className="w-full h-[150px] relative">
                <Image fill src={item.img[0]} className="object-cover" alt="img" />
              </div>
              <div className="text-black p-2 bg-white">
                <Link href={`news/${item.id}`}>
                  <div className="flex my-2 ">
                    {
                      item.categories.map((cat, i) => (
                        <button key={i} className={`btn !px-2 ${colorClasses[i % 3]} bg-green-200 text-green-500 !text-sm mr-2 border-lg`}>{cat}</button>
                      ))
                    }
                  </div>
                  <h1 className="text-title">{item.title}</h1>
                  <span className="card-time text-slate-700">6 hour ago</span>
                </Link>
              </div>
            </div>
          ))
        }
      </div>
    </main >
  );
}



