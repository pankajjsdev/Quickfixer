import Image from "next/image"

import { CARD_INFO_SECTION } from "@/services/data"
import PlaceholderImage from "@/public/images/common/placeholder.png"
import Button from "../button"


function CardInfo() {
  return (
   <div className="w-full py-12 bg-primary-hard center-all flex-col my-[6rem]">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-3">
            <div className="space-y-8 text-center lg:text-left">
                <h1 className="text-5xl lgtext-6xl text-white font-bold">{CARD_INFO_SECTION.title}</h1>
                <p className="text-lg lg:text-sm text-white font-sans">{CARD_INFO_SECTION.description}</p>
                <Button
                    title="Let’s Go"
                    classsName="w-1/2 py-3"
                />
            </div>
            <div className="my-6 lg:my-0">
                <Image
                 src={PlaceholderImage}
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