"use client";

import CardInfoRev from "@/components/_ui/common/CardInfoRev";
import { ParallaxScroll } from "@/components/_ui/common/parallax-scroll";


export default function Page() {
    return <main>
        <section className="container mt-20">
            <h1 className="line-clamp-1 font-bold my-4 text-6xl text-zinc-700">Gallery</h1>
            <p className="font-normal my-4 text-sm text-zinc-500 line-clamp-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro quidem illum dolorum nam et recusandae sequi neque exercitationem! Perferendis labore quia totam veniam asperiores. Delectus ex rem iure quod quos.</p>
          


          


        </section>
        <ParallaxScroll images={images} />
        <CardInfoRev/>
    </main>
}

const images = [
    "/images/services/service4.jpg",
   "/images/services/service4.jpg",
     "/images/services/service5.jpg",
     "/images/services/service8.jpg",
   "/images/services/service4.jpg",
     "/images/services/service6.jpg",
     "/images/services/service4.jpg",
     "/images/services/service1.jpg",
     "/images/services/service5.jpg",
    "/images/services/service4.jpg",
   "/images/services/service6.jpg",
     "/images/services/service4.jpg",
    "/images/services/service7.jpg",
   "/images/services/service4.jpg",
    "/images/services/service6.jpg",
   "/images/services/service5.jpg",
     "/images/services/service4.jpg",
    "/images/services/service4.jpg",
   "/images/services/service3.jpg",
    "/images/services/service4.jpg",
   "/images/services/service4.jpg",
     "/images/services/service4.jpg",
    "/images/services/service4.jpg",
   "/images/services/service6.jpg",
];
