import React from 'react';
import { motion} from 'framer-motion';
import { usePathname } from 'next/navigation';
import Head from 'next/head';
import '../app/globals.css';
import Navbar from "@/components/Navbar";

const AllLayout = ({ children }: { children: React.ReactNode }) => {
    const router = usePathname();
    return (
        <motion.div
            key={router}
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
                duration: 1,
            }}
            variants={{
                initialState: {
                    opacity: 0,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                },
                animateState: {
                    opacity: 1,
                    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
                },
                exitState: {
                    clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
                },
            }}
            className={'z-0'}
        >
            <Head>
                <title>TASC</title>
            </Head>
            <div className="z-50">
                <Navbar />
            </div>
            <div className={'dark:text-white dark:bg-[#000027] text-black bg-[#ECCBFF]'}>
                {children}
            </div>
        </motion.div>
    );
};

export default AllLayout;
