import Image from "next/image";
import { CARD_INFO_SECTION } from "@/services/data";
import BGImage from "@/public/images/common/bg-hero4.png";
import Button from "../button";

function CardInfo() {
  return (
    <div className="w-full bg-primary-hard center-all flex-col py-24">
      <div className="container grid grid-cols-1 lg:grid-cols-2 items-center gap-8">
        <div className="space-y-8 text-center lg:text-left order-2 lg:order-1">
          <h1 className="text-5xl lg:text-6xl text-white font-bold">
            {CARD_INFO_SECTION.title}
          </h1>
          <p className="text-lg lg:text-xl text-white font-sans">
            {CARD_INFO_SECTION.description}
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-2 text-primary-hard">Step 1</h2>
              <p className="text-lg text-gray-700">Book online</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-2 text-primary-hard">Step 2</h2>
              <p className="text-lg text-gray-700">Get consulted</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg text-center hover:bg-gray-100 transition-all duration-300">
              <h2 className="text-2xl font-bold mb-2 text-primary-hard">Step 3</h2>
              <p className="text-lg text-gray-700">Get home clean</p>
            </div>
          </div>
          <Button title="Get a quote" 
           classsName="py-3 mt-6" />
        </div>
        <div className="order-1 lg:order-2 my-6 lg:my-0">
          <Image src={BGImage} width={824} height={549} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CardInfo;
