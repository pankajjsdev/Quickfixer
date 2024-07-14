import Image from "next/image"

import { CARD_INFO_SECTION2 } from "@/services/data"
import PlaceholderImage from "@/public/images/common/placeholder.png"
import Button from "../button"


function CardInfoRev() {
  return (
   <div className="w-full py-12 center-all flex-col">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-3">
            <div className="my-6 lg:my-0">
                <Image
                 src={PlaceholderImage}
                 width={824}
                 height={549}
                 alt=""
                />
            </div>

            <div className="space-y-8 text-center lg:text-left">
                <h1 className="text-5xl lg:text-6xl font-bold">{CARD_INFO_SECTION2.title}</h1>
                <p className="text-lg lg:text-sm  font-sans">{CARD_INFO_SECTION2.description}</p>
                <Button
                    title="Let’s Go"
                    classsName="w-1/2 py-3"
                />
            </div>

        </div>

   </div>
  )
}

export default CardInfoRev