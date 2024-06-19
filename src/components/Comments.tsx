import Image from 'next/image'
import React from 'react'

const Comments = () => {

    return (
        <div className='my-5  bg-white rounded-xl p-4 py-10 border shadow'>
            <h1 className='text-title'>Comments</h1>
            <div className='w-full h-[1px] bg-slate-300'></div>
            {/* user desc */}

            <div className='flex gap-2 my-2  py-3 '>
                <div className='w-[50px] h-[50px] relative rounded-full overflow-hidden'>
                    <Image className='object-cover' fill src={'https://img.freepik.com/premium-photo/rear-view-woman-walking-road-park-sunny-day_1048944-28013545.jpg'} alt='auhtor' />
                </div>
                <div className='flex flex-col'>
                    <h2 className='font-semibold'>Name surname</h2>
                    <span>Posted on Date</span>
                </div>
            </div>

            {/* comment box */}

            <div className='flex items-start gap-3'>
                <textarea placeholder='write Your comment...' className='w-4/5  p-3 h-[200px] border  focus:outline-none' />
                <button className='btn text-white bg-green-600 w-[150px] ' >Send</button>
            </div>
        </div>
    )
}

export default Comments
