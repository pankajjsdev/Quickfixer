import Image from "next/image"
import { CARD_INFO_SECTION } from "@/services/data"
import BGImage from "@/public/images/common/bg-hero4.png"
import Button from "../button"

function CardInfo() {
  return (
    <div className="w-full bg-primary-hard center-all flex-col my-[6rem]">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-3">
        <div className="space-y-8 text-center lg:text-left order-2">
          <h1 className="text-5xl lg:text-6xl text-white font-bold">{CARD_INFO_SECTION.title}</h1>
          <p className="text-lg lg:text-sm text-white font-sans">{CARD_INFO_SECTION.description}</p>
          <div className="container grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h2 className="text-2xl font-bold mb-4">Book online</h2>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Get consulted</h2>
        
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-2xl font-bold mb-4">Get home clean</h2>
       
        </div>
      </div>
          
          <Button
            title="Get a quote"
            classsName="py-3"
          />
        </div>
        <div className="my-6 lg:my-0">
          <Image
            src={BGImage}
            width={824}
            height={549}
            alt=""
          />
        </div>
      </div>
      
    </div>
  )
}

export default CardInfo
