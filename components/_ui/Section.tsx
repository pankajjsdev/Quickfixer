'use client'
import React from "react"
import { AnimatePresence, motion } from "framer-motion"

function Section({ children, direction = "left" }: { children: React.ReactNode, direction: string }) {

    const variants = {
        hidden: {
            x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : '0%',
            y: direction === 'top' ? '-100%' : direction === 'bottom' ? '100%' : '0%',
            opacity: 0
        },
        visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            x: direction === 'left' ? '100%' : direction === 'right' ? '-100%' : '0%',
            y: direction === 'top' ? '100%' : direction === 'bottom' ? '-100%' : '0%',
            opacity: 0,
            transition: { duration: 0.5 }
        },
    };

    return (
        <AnimatePresence>
            <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                variants={variants}
                transition={{
                    delay: 2,
                    ease: "easeInOut",
                    duration: 3
                }}
                className="overflow-hidden"
            >
                {children}
            </motion.div>
        </AnimatePresence>
    )
}

export default Section
