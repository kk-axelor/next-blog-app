import Link from 'next/link'
import React from 'react'


type navlinkType = {
  id: number,
  title: string,
  link: string
}


const navlink: navlinkType[] = [{
  id: 1,
  title: "Home",
  link: '/'
}]
const Navbar = () => {
  return (
    <div className='h-[60px] flex justify-center shadow-md'>
      {/* logo */}
      <div className='container h-full flex items-center justify-between px-2'>
        <span className='text-2xl ' >Logo</span>

        {/* navitem */}
        <div className='px-2 min-w-[40%]'>
          {
            navlink.map((item: navlinkType) => (
              <Link  key={item.id} href={item.link}>{item.title}</Link>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
