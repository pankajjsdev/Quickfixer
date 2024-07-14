import Hero from "@/components/_ui/hero/Hero"
import WhyChooseUs from "@/components/_ui/common/WhyChooseUs"
import CardInfo from "@/components/_ui/common/CardInfo"
import CardInfoRev from "@/components/_ui/common/CardInfoRev"
import ChoosePlan from "@/components/_ui/common/ChoosePlan"
import ServiceForm from "@/components/_ui/common/BookForm"

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