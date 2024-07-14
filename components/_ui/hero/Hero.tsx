import Image from "next/image"
import Button from "../button"
import { HERO_SECTION_CONTEXT } from "@/services/data"
import PlaceholderImage from "@/public/images/common/placeholder.png"
import { FlipWords } from "../flip-words";
const words = ["whitepace","amazing", "thorough", "reliable", "professional"];

function Hero() {
    return (
        <div className="w-full py-36 bg-primary-hard center-all flex-col">
            <div className={`w-full bg-[url('/images/common/hero-bg.svg')] bg-no-repeat lg:bg-contain`} >
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="space-y-8 text-center lg:text-left">
                    <div className="text-6xl mx-auto font-bold text-white">
                    <h1 className="text-5xl lg:text-6xl text-white font-bold">{HERO_SECTION_CONTEXT.title}</h1>
                            <FlipWords words={words} /> <br />
                        </div>
                        <p className="text-lg lg:text-sm text-white font-sans">{HERO_SECTION_CONTEXT.description}</p>
                        <Button
                            title="Get a quote"
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

        </div>
    )
}

export default Hero