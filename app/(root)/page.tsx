import Hero from "@/components/_ui/hero/Hero"
import WhyChooseUs from "@/components/common/WhyChooseUs"
import CardInfo from "@/components/common/CardInfo"
import CardInfoRev from "@/components/common/CardInfoRev"
import ChoosePlan from "@/components/common/ChoosePlan"
import ServiceForm from "@/components/common/BookForm"

function page() {
    return (
        <main>
            <Hero />
            <WhyChooseUs/>
            <CardInfo/>
            <CardInfoRev/>
            <ChoosePlan/>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <ServiceForm />
            </div>
        </main>
    )
}

export default page