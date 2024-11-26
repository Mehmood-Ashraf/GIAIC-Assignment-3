import React from "react"
import Image from "next/image"
import Logo from "../Assets/Logo.png"



export default function Navbar(){
    return(
        <div className="w-[1920px] max-xl:w-full h-[92px] bg-[#043873] py-4 px-[220px] flex justify-between items-center">
            <div className="w-[191px] h-[34px]">
                <Image src={Logo} alt=""></Image>
            </div>
            <div className="w-[737.5px] h-[60px] gap-[60px] flex items-center">
                <div className="w-[549px] h-[23px]">
                    <ul className="flex gap-8 text-lg leading-[23px] font-medium text-white cursor-pointer">
                        <li>Products</li>
                        <li>Solutions</li>
                        <li>Resources</li>
                        <li>Pricing</li>
                    </ul>
                </div>
                <div>
                    <button className="w-[126px] h-[60px] py-4 px-10 bg-[#FFE492] rounded-lg text-lg font-medium leading-[23px] tracking-[-0.36px]">Login</button>
                </div>
            </div>
        </div>
    )
}