import Image from "next/image"
import Link from "next/link"
import MobileNav from "./MobileNav"
import DesktopNav from "./DesktopNav"


function index() {
    return (
        <header className="fixed top-0 left-0 right-0 bg-primary-hard">
            <div className="container py-3 center-space">
                <Link href={"/"}>
                    <Image
                        src={"/images/logo/logo.svg"}
                        width={124}
                        height={24}
                        alt=""
                        className="w-48 h-8"
                    />
                </Link>

                {/* Desktop nav start here */}
                <div className="hidden lg:center-space">
                    <DesktopNav />
                </div>
                {/* Desktop nav end here */}

                {/* Mobile nav start here */}
                <div className="lg:hidden">
                    <MobileNav />
                </div>
                {/* Mobile nav end here */}

            </div>
        </header>
    )
}

export default index