import React from "react"
import Image from "next/image"
import Logo from "../Assets/Logo.png"


export default function Footer(){
    return(
        <div className="footer w-[1920px] h-[461px] bg-[#043873] px-[220px] pt-[140px] pb-8 text-[#F7F7EE]">
        <div className="content w-[1480px] h-[289px] flex flex-col gap-[100px]">
          <div className="info flex gap-[100px] w-[1480px] h-[169px]">
            <div className="logoDescription flex flex-col gap-[15px] w-[295px] h-[169px]">
              <div className="logo w-[191px] h-[34px]">
              <Image src={Logo} alt=""></Image>
              </div>
              <p className="text-lg font-normal leading-[30px] tracking-[-0.36px] w-[240px] h-[120px]">
              whitepace was created for the new ways we live and work. We make a better workspace around the world
              </p>
            </div>
            <div className="info1 w-[295px] h-[127px] flex flex-col gap-[15px]">
              <p className="text-lg font-bold leading-[21.78px] tracking-[-0.36px] text-[#ffffff]">Product</p>
              <p className="text-[#FFE492] text-base font-normal leading-5 tracking-[-0.32px]">Overview</p>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">Pricing</p>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">Customer stories</p>
            </div>
            <div className="info2 w-[295px] h-[130px] flex flex-col gap-4">
            <p className="text-lg font-bold leading-[21.78px] tracking-[-0.36px] text-[#ffffff]">Resources</p>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">Blog</p>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">Guides & tutorials</p>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">Help center</p>
            </div>
            <div className="info3 w-[295px] h-[130px] flex flex-col gap-4">
            <p className="text-lg font-bold leading-[21.78px] tracking-[-0.36px] text-[#ffffff]">Company</p>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">About us</p>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">Careers</p>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">Media kit</p>
            </div>
          </div>
          <div className="bottom w-[1480px] h-[20px] flex justify-center flex-col gap-[19.93px] items-center">
            <div className="line w-[1480px] border border-[#2E4E73] "></div>
              <p className="text-[#ffffff] text-base font-normal leading-5 tracking-[-0.32px]">©2021 Whitepace LLC.</p>
          </div>
        </div>
      </div>

    )
}