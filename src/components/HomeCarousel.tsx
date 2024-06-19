'use client';
import React from 'react'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Slide } from '@/constant';
import Image from 'next/image';




interface SliderProps {
    data: Slide[]
}


const HomeCarousel: React.FC<SliderProps> = ({ data = [] }) => {
    return (
        <div className='my-10'>
            <Swiper 
                slidesPerView={6}
                pagination={{ type: "bullets", clickable: true }}
                autoplay={true}
                loop={true}
                modules={[Autoplay, Navigation]}
            >
                {
                    data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='w-[200px] h-[200px] bg-red-400 rounded-md overflow-hidden relative'>

                                <div className='w-[200px] h-[200px] relative '>
                                    <Image fill  src={item.img} className="object-cover" alt='image'/>
                                </div>

                                <div className='absolute bottom-2 left-0 text-gray-100 w-full  '>
                                    <h2 className='text-title text-center'>{item.title}</h2>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>

        </div>
    )
}

export default HomeCarousel
