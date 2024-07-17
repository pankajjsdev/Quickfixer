import Hero from "@/components/_ui/hero/Hero"
import WhyChooseUs from "@/components/_ui/common/WhyChooseUs"
import CardInfo from "@/components/_ui/common/CardInfo"
import CardInfoRev from "@/components/_ui/common/CardInfoRev"
import ChoosePlan from "@/components/_ui/common/ChoosePlan"
import BoxBackground from "@/components/_ui/common/BoxBackground"
import Testimonial from "@/components/_ui/common/Testimonial"
import OurWork from "@/components/_ui/common/OurWork"
import BlogSection from "@/components/_ui/common/BlogSection"


function page() {
    return (
        <main>
            <Hero />
         
            <CardInfoRev/>
            <WhyChooseUs/>
        
            <OurWork/>

            <CardInfo/>
           
            <ChoosePlan/>
            <BoxBackground/>
            <Testimonial/>
            {/* <BlogSection/> */}
         
        </main>
    )
}

export default page