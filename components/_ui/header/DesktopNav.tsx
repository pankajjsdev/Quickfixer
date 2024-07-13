import Link from "next/link"
import Button from "../button"

const headerLinks = [
    {
        title: 'Home',
        path: '/'
    },
    {
        title: 'About us',
        path: 'aboutus'
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
        title: 'Contact',
        path: '/contact'
    }
]

function DesktopNav() {
  return (
    <>
                    <nav className="space-x-8 mx-8">
                        {
                            headerLinks?.map((link, index) => {
                                return (
                                    <Link key={index} href={link.path} className="text-white" >
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
                            title="Login"
                                classsName="bg-secondary-yellow1 text-primary-hard"
                        
                        />

                        <Button
                            title="Try Whitepace free"
                        />
                    </div>
                </>
  )
}

export default DesktopNav