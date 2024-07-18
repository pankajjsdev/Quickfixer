import Image from "next/image"
import Link from "next/link";


const blogData = [
    {
        slug: "amazing-tailwindcss-grid-layouts",
        author: "Manu Arora",
        date: "28th March, 2023",
        title: "Amazing Tailwindcss Grid Layout Examples",
        description:
          "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
        image: "/images/services/service3.jpg",
        authorAvatar: "/images/services/service3.jpg",
      },
      {
        slug: "amazing-tailwindcss-grid-layouts",
        author: "Manu Arora",
        date: "28th March, 2023",
        title: "Amazing Tailwindcss Grid Layout Examples",
        description:
          "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
        image: "/images/services/service7.jpg",
        authorAvatar: "/images/services/service3.jpg",
      },
      {
        slug: "amazing-tailwindcss-grid-layouts",
        author: "Manu Arora",
        date: "28th March, 2023",
        title: "Amazing Tailwindcss Grid Layout Examples",
        description:
          "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
        image: "/images/services/service5.jpg",
        authorAvatar: "/images/services/service3.jpg",
      },
      {
        slug: "amazing-tailwindcss-grid-layouts",
        author: "Manu Arora",
        date: "28th March, 2023",
        title: "Amazing Tailwindcss Grid Layout Examples",
        description:
          "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
        image: "/images/services/service6.jpg",
        authorAvatar: "/images/services/service3.jpg",
      }
]

function BlogSection() {
    return (
        <section className=" my-[6rem]">
            <div className="container">

                <div className="my-3">
                    <h1 className="text-center text-6xl font-semibold">Latest news</h1>
                    <p className="text-center text-sm font-medium">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante neque, semper non commodo eget, tincidunt et odio. Donec lectus odio, rhoncus a velit eu, dapibus mollis
                    </p>
                </div>


                <div className="grid grid-cols-1 lg:grid-cols-4 gap-3">
                    {
                       blogData?.map((blog, index) => {
                            return (
                                <div className="shadow p-4 rounded-lg group" key={index}>
                                    <div className="overflow-hidden flex flex-col items-center">
                                        <Image
                                            src={blog.image}
                                            width={300}
                                            height={300}
                                            alt=""
                                            className="group-hover:scale-110 transition-all ease-in-out duration-500  object-cover  cursor-pointer rounded-lg"
                                        />
                                    </div>
                                    <h1 className="line-clamp-1 font-bold my-4 text-lg text-zinc-700">{blog.title}</h1>
                                    <p className="font-normal my-4 text-sm text-zinc-500 line-clamp-3">{blog.description}</p>
                                    <div className="flex flex-row justify-between items-center mt-6">
              <span className="text-sm text-gray-500">{blog.date}</span>
              <Link href={"/blog"} className="relative z-10 px-6 py-2 bg-black text-white font-bold rounded-xl block text-xs">
                Read More
              </Link>
            </div>
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

  