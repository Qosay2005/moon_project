import React from 'react'
import Hero_Img from './../assets/hero.png'
import Icon_White from './../assets/Icon_white.svg'
export default function() {
  return (
    <section className="hero w-full  min-h-screen ">
        <img src={Hero_Img} alt="Hero" />
        <div className='flex flex-col items-center justify-center'> 
          <img src={Icon_White} alt="Icon"/>
          <div className='flex flex-col gap-[20px] mt-[40px] items-center justify-center'>
            <p className='text-[#FFFDFB] '>Handcrafted in Viet Nam since 1650</p>
            <h1 className='font-bold text-[#FFFDFB] text-[36px]'>BAT TRANGDINNER SET</h1>
          </div>
          <button className='text-[#826F66] border-2 font-bold mt-2 cursor-pointer  bg-white px-[60px] py-[6px]'>SHOP NOW</button>
        </div>
    </section>
  )
}
