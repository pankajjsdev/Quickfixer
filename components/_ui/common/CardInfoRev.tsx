import Image from "next/image"

import { CARD_INFO_SECTION2 } from "@/services/data"
import BGimageCatroon from "@/public/images/common/cartoon-bg.png"
import Button from "../button"


function CardInfoRev() {
  return (
   <div className="w-full bg-primary-hard text-white center-all flex-col my-[6rem] ">
        <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-3">
            <div className="my-6 lg:my-0">
                <Image
                 src={BGimageCatroon}
                 width={824}
                 height={549}
                 alt=""
                />
            </div>

            <div className="space-y-8 text-center lg:text-left py-3">
                <h1 className="text-5xl lg:text-6xl font-bold">{CARD_INFO_SECTION2.title}</h1>
                <p className="text-lg lg:text-sm  font-sans">{CARD_INFO_SECTION2.description}</p>
                <Button
                    title="Let’s Go"
                    classsName=" py-3"
                />
            </div>

        </div>

   </div>
  )
}

export default CardInfoRev