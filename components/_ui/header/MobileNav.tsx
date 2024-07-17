'use client'
import Image from "next/image"
import Link from "next/link"
import Button from "../button"

import { usePathname } from "next/navigation"

import React, { useState } from 'react';
import { motion } from 'framer-motion';

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
        title: 'Contact',
        path: '/contact'
    }
]

function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => setIsOpen(!isOpen);
    const pathname = usePathname()

    return (
        <div>
            <button onClick={toggleDrawer} >
                <Image
                    src={"/images/common/hum-menu.svg"}
                    width={40}
                    height={24}
                    alt=""
                />
            </button>

            <div className="">
                <motion.div
                    className={`z-50 flex flex-col items-center justify-between fixed top-0 left-0 h-full bg-primary-hard text-white w-80 p-4 transform transition-all ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'
                        }`}
                    initial={{ x: '-100%' }}
                    animate={{ x: isOpen ? 0 : '-100%' }}
                    transition={{ ease: 'easeIn' }}
                    exit={{ x: '-100%' }}
                >

                    <div className="my-2 space-y-3 w-full">
                        <Image
                            src={"/images/logo/logo.svg"}
                            width={124}
                            height={40}
                            alt=""
                            className="w-60 h-12 mb-6"
                        />
                        <nav className="space-y-3 ">
                            {
                                headerLinks?.map((link, index) => {
                                    return (
                                        <Link key={index} href={link.path} className={`flex flex-col p-3 rounded border text-xl font-semibold  hover:bg-primary-soft ${pathname == link.path ? 'bg-primary-soft' : ''}`} >
                                            {
                                                link.title
                                            }
                                        </Link>
                                    )
                                })
                            }
                        </nav>
                    </div>

                    {/* <div className="" > */}
                    <Button
                        title="Book Schedule"
                    />
                    {/* </div> */}
                </motion.div>

                {isOpen && (
                    <div
                        className="fixed inset-0 bg-black opacity-30 z-10"
                        onClick={toggleDrawer}
                    >
                    </div>
                )}


            </div>
        </div>
    )
}

export default MobileNav