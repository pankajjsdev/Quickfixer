import Image from "next/image"
import Link from "next/link"

function index() {
  return (
    <footer className="bg-gray-800 text-white py-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <Link href={"/"}>
                    <Image
                        src={"/images/logo/logo.svg"}
                        width={124}
                        height={24}
                        alt=""
                        className="w-48 h-8"
                    />
                </Link>
            <p className="mt-2 text-sm">Your company description goes here.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h4 className="text-xl font-semibold mb-2">Quick Links</h4>
            <ul>
              <li className="mb-1"><a href="#" className="hover:underline">Home</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">About Us</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Services</a></li>
              <li className="mb-1"><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h4 className="text-xl font-semibold mb-2">Contact Us</h4>
            <ul>
              <li className="mb-1">1234 Street Name, City, State, 12345</li>
              <li className="mb-1">Phone: (123) 456-7890</li>
              <li className="mb-1">Email: info@yourcompany.com</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm">&copy; 2024 YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
    
  )
}

export default index