import Image from "next/image";
import apple from "../Assets/Apple.png"
import google from "../Assets/Google.png"
import microsoft from "../Assets/Microsoft.png"
import slack from "../Assets/Slack_Technologies_Logo 1.png"

export default function Sponsors(){
    return(
        <div className="sponsors w-[1921px] h-[538px] px-[220px] py-[140px] flex gap-[100px] flex-col">
        <div className="heading text-center">
        <h1 className="text-7xl font-bold leading-[87.14px] text-[#212529] tracking-[-1.44px]">
                Our sponsors
              </h1>
        </div>

        <div className="logos flex justify-between">
          <div className="apple w-[55.47px] h-[68px]">
            <Image src={apple} alt=""></Image>
          </div>
          <div className="micrisoft w-[287px] h-[62px]">
            <Image src={microsoft} alt=""></Image>
          </div>
          <div className="slack w-[280px] h-[71px]">
          <Image src={slack} alt=""></Image>
          </div>
          <div className="google w-[211px] h-[69.81px]">
          <Image src={google} alt=""></Image>
          </div>
        </div>
      </div>
    )
}