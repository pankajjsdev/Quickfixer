import Button from '@/components/_ui/button'
import CardInfo from '@/components/_ui/common/CardInfo'
import CardInfoRev from '@/components/_ui/common/CardInfoRev'
import React from 'react'

export default function page() {
    return (
        <main>
            <section className="bg-gray-100 font-sans leading-normal tracking-normal">

                <div className="container mx-auto my-10 p-5 bg-white ">
                    <h1 className="text-4xl font-bold text-center text-blue-600 mb-6">About Us</h1>
                    <p className="text-center text-gray-700 mb-6">Welcome to SparkleClean, where we believe a clean space is a happy space!</p>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Who We Are</h2>
                        <p className="text-gray-600">At SparkleClean, we are a dedicated team of cleaning professionals committed to providing exceptional cleaning services for your home and business. Founded on the principles of trust, reliability, and excellence, our mission is to make your environment spotless, so you can focus on what truly matters.</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Story</h2>
                        <p className="text-gray-600">SparkleClean was established in [Year] with the vision of transforming the cleaning industry. What began as a small venture has grown into a reputable cleaning service known for its attention to detail and customer satisfaction. Our founder, [Founder`s Name], envisioned a service where clients could experience the joy and peace of a pristine space without the hassle of doing it themselves.</p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Values</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Quality:</strong> We use top-of-the-line cleaning products and advanced techniques to ensure the highest standard of cleanliness.</li>
                            <li><strong>Trust:</strong> Our team is thoroughly vetted and trained to handle all cleaning tasks with the utmost professionalism.</li>
                            <li><strong>Customer Satisfaction:</strong> Your satisfaction is our priority. We tailor our services to meet your specific needs and preferences.</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Our Services</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Residential Cleaning:</strong> From regular housekeeping to deep cleaning, we make your home shine.</li>
                            <li><strong>Commercial Cleaning:</strong> Maintain a professional environment with our office and commercial space cleaning services.</li>
                            <li><strong>Specialty Cleaning:</strong> Move-in/move-out cleaning, post-construction cleaning, and more.</li>
                        </ul>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Why Choose Us?</h2>
                        <ul className="list-disc list-inside text-gray-600">
                            <li><strong>Experienced Team:</strong> Our cleaners are skilled, experienced, and undergo continuous training to stay updated with the latest cleaning methods.</li>
                            <li><strong>Eco-Friendly Products:</strong> We care about your health and the environment. That`s why we use eco-friendly cleaning products that are safe for you, your family, and your pets.</li>
                            <li><strong>Flexible Scheduling:</strong> We offer flexible scheduling options to fit your busy lifestyle. Whether you need a one-time deep clean or regular maintenance, we’ve got you covered.</li>
                            <li><strong>Affordable Pricing:</strong> Quality cleaning services at competitive prices. No hidden fees, just sparkling clean results.</li>
                        </ul>
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-3">Get in Touch</h2>
                        <p className="text-gray-600 mb-6">Ready to experience the SparkleClean difference? Contact us today to schedule your cleaning service or to get a free quote. We look forward to making your space sparkle!</p>
                        <Button
                            title="Get a quote"
                            classsName="py-3"
                        />
                    </div>
                </div>

                <CardInfo />
                <CardInfoRev />

            </section>

        </main>
    )
}
