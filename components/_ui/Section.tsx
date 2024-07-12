import React from "react"
import {AnimatePresence, motion } from "framer-motion"

function Section({ children, direction = "left" }: { children: React.ReactNode, direction: string }) {

    const variants = {
        hidden: {
            x: direction === 'left' ? '-100%' : '100%',
            opacity: 0
        },
        visible: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: {
            x: direction === 'left' ? '100%' : '-100%',
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
            // whileInView={variants}
           transition={{
            delay:2,
            ease:"easeInOut",
            duration:3
           }}
        >
            {children}

        </motion.div>
        </AnimatePresence>
    )
}

export default Section