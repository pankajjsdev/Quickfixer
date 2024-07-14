import Hero from "@/components/_ui/hero/Hero"
import WhyChooseUs from "@/components/common/WhyChooseUs"
import CardInfo from "@/components/common/CardInfo"
import CardInfoRev from "@/components/common/CardInfoRev"
import ChoosePlan from "@/components/common/ChoosePlan"

function page() {
    return (
        <main>
            <Hero />
            <WhyChooseUs/>
            <CardInfo/>
            <CardInfoRev/>
            <ChoosePlan/>
        </main>
    )
}

export default page