import Image from "next/image"

function BlogSection() {
    return (
        <section className="my-[6rem]">
            <div>

                <div className="my-3">
                    <h1 className="text-center text-6xl font-semibold">Our recent works</h1>
                    <p className="text-center text-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante neque, semper non commodo eget, tincidunt et odio. Donec lectus odio, rhoncus a velit eu, dapibus mollis
                    </p>
                </div>


                <div className="grid grid-cols-4 gap-3">
                    {
                        [1, 2, 3, 4]?.map((blog, index) => {
                            return (
                                <div className="shadow p-8" key={index}>
                                    <div className="overflow-hidden">
                                        <Image
                                            src={"/images/services/service3.jpg"}
                                            width={300}
                                            height={300}
                                            alt=""
                                            className="hover:scale-110 transition-all ease-in-out duration-500  cursor-pointer"
                                        />
                                    </div>
                                    <h1>bhdjsfb fdshj fjds fd</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In rerum asperiores veniam voluptatibus quae eligendi enim temporibus ab, sequi totam fugiat ipsum eos odit facere esse. Est amet cumque eius?</p>

                                </div>
                            )
                        })
                    }
                </div>
            </div>

        </section>
    )
}

export default BlogSection