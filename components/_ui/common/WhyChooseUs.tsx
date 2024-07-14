import { WHY_CHOOSE_US_CONTEXT } from "@/services/data";

function WhyChooseUs() {
  return (
    <>
      <h1 className="text-3xl  lg:text-5xl font-semibold text-center text-pretty mb-12 mt-[6rem]">
        Why Choose Us?
      </h1>
      <div className="border h-auto py-6 lg:py-52  bg-[url('/images/common/bg-hero2.webp')] bg-no-repeat bg-center bg-cover">
        <div className="flex flex-col space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 ">
            {WHY_CHOOSE_US_CONTEXT?.map((item, index) => (
              <div
                key={index}
                className="p-6 mx-2 my-1 rounded-lg text-center lg:text-left shadow-lg bg-white bg-opacity-40 hover:bg-opacity-100 transition duration-300"
              >
                <h2 className="text-3xl text-gray-800 font-semibold my-2">
                  {item.title}
                </h2>
                <p className="text-lg text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default WhyChooseUs;