import React from 'react';
import PageLayout from "@/components/PageLayout";
import AboutSection from "@/components/AboutSection";
import {AiOutlineArrowDown} from "react-icons/ai";
import NextLink from "next/link";
import Link from "next/link";



const Home: React.FC = () => {
    return(
        <>
            <PageLayout>
                    <div className={'h-screen w-full z-50 flex justify-center items-center'}>
                        <div className={'space-y-6 px-4'}>
                            <h1
                                className="font-extrabold text-transparent lg:text-8xl md:text-6xl text-[40px] bg-clip-text bg-gradient-to-r from-[#835FDC] to-[#CC4FAD] text-center"
                            >
                                Turing <br/> Artificial Intelligence <br/> Student Committee
                            </h1>

                            <p className="lg:text-2xl md:text-lg text-smA font-semibold text-center">
                                Department of Artificial Intelligence and Machine Learning
                            </p>
                        </div>
                        <div className={'absolute mt-[45rem]'}>
                            <Link href={'/#about'}>
                                <div className={'animate-bounce'}>
                                    <AiOutlineArrowDown size={40}/>
                                </div>
                            </Link>
                        </div>
                    </div>

                    <div id='about' className={'py-8'}>
                        <AboutSection />
                    </div>
            </PageLayout>
        </>
    );
}

export default Home;