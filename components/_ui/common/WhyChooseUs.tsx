import { WHY_CHOOSE_US_CONTEXT } from "@/services/data"
import Section from "../Section"
import Image from "next/image"
import PlaceholderImage from "@/public/images/services/service2.webp"

function WhyChooseUs() {
    return (
      <>
      {/* space bar */}
      <div className="w-ful py-6 my-6"></div>

      
           <div>
           <div className="container border p-6">
           <h1 className="text-5xl font-semibold text-center text-pretty mb-3">Why Choose Us?</h1>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-center">
                <Section direction="left">
                       
                        {
                            WHY_CHOOSE_US_CONTEXT?.map((item, index) => {
                                return (

                                    <div key={index} className="p-2 my-1 rounded-lg bg-primary-soft text-center lg:text-left shadow">
                                        <h1 className="text-2xl text-white font-medium my-2">{item.title}</h1>
                                        <p className="text-lg text-white">{item.description}</p>
                                    </div>

                                )
                            })
                        }
                    </Section>
                    <Section direction="right">
                        <Image
                            src={PlaceholderImage}
                            width={824}
                            height={700}
                            alt=""
                            className="w-full h-full"
                        />
                        
                    </Section>
                </div>
            </div>
           </div>
      </>
    )
}

export default WhyChooseUs