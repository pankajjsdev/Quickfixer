import Hero from "@/components/_ui/hero/Hero"
import WhyChooseUs from "@/components/_ui/common/WhyChooseUs"
import CardInfo from "@/components/_ui/common/CardInfo"
import CardInfoRev from "@/components/_ui/common/CardInfoRev"
import ChoosePlan from "@/components/_ui/common/ChoosePlan"
import BoxBackground from "@/components/_ui/common/BoxBackground"
import Testimonial from "@/components/_ui/common/Testimonial"
import OurWork from "@/components/_ui/common/OurWork"

function page() {
    return (
        <main>
            <Hero />
            <WhyChooseUs/>
            <CardInfo/>
            <OurWork/>
            <CardInfoRev/>
            <ChoosePlan/>
            <BoxBackground/>
            <Testimonial/>
         
        </main>
    )
}

export default page