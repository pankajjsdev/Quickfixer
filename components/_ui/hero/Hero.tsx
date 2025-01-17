import Image from "next/image"
import Button from "../button"
import { HERO_SECTION_CONTEXT } from "@/services/data"
import BGHero from "@/public/images/common/main-hero.jpg"
import { FlipWords } from "../flip-words";
const words = ["whitepace", "amazing", "thorough", "reliable", "professional"];

function Hero() {
    return (
        <section className="w-full my-16 lg:py-24 center-all flex-col">
            <div className={`w-full bg-[url('/images/common/hero-bg.svg')] bg-no-repeat lg:bg-contain`} >
                <div className="container grid grid-cols-1 lg:grid-cols-2 gap-3">
                    <div className="space-y-8 text-center lg:text-left">
                        <div className="text-6xl mx-auto font-bold text-primary-hard">
                            <h1 className="text-5xl lg:text-6xl text-primary-hard font-bold">{HERO_SECTION_CONTEXT.title}</h1>
                            <FlipWords words={words} /> <br />
                        </div>
                        <p className="text-lg lg:text-sm text-primary-hard font-sans">{HERO_SECTION_CONTEXT.description}</p>
                        <Button
                            title="Get a quote"
                            classsName=" py-3"
                        />
                    </div>
                    <div className="my-6 lg:my-0">
                        <Image
                            src={BGHero}
                            width={824}
                            height={549}
                            alt=""
                            className="rounded z-50  lg:scale-110"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero