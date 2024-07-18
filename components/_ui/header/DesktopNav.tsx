'use client'
import Link from "next/link"
import Button from "../button"
import { usePathname } from "next/navigation"

const headerLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About us',
        path: '/about'
    },
    {
        title: 'Service',
        path: '/services'
    },
    {
        title: 'Blog',
        path: '/blog'
    },
    {
        title: 'Gallery',
        path: '/gallery'
    },
    {
        title: 'Contact',
        path: '/contact'
    }
]

function DesktopNav() {
    const pathname = usePathname()
    return (
        <>
            <nav className="space-x-8 mx-8">
                {
                    headerLinks?.map((link, index) => {
                        return (
                            <Link key={index} href={link.path} className={`text-white hover:text-secondary-yellow1  ${pathname == link.path ? 'text-secondary-yellow1' : ''}`} >
                                {
                                    link.title
                                }
                            </Link>
                        )
                    })
                }
            </nav>
            <div className="center-space" >
                <Button
                    title="Book Schedule"
                />
            </div>
        </>
    )
}

export default DesktopNav