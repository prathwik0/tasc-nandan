import React from 'react';
import PageLayout from "@/components/PageLayout";



const Home: React.FC = () => {
    return(
        <>
            <PageLayout>
                    <div className={'h-screen w-full z-0 flex justify-center items-center'}>
                        <div>
                            <h1
                                className="font-extrabold text-transparent md:text-8xl text-4xl bg-clip-text bg-gradient-to-r from-[#835FDC] to-[#CC4FAD] text-center"
                            >
                                Turing <br/> Artificial Intelligence <br/> Student Committee
                            </h1>

                            <p className="md:text-2xl text-md font-semibold text-center">
                                Department of Artificial Intelligence and Machine Learning
                            </p>
                        </div>
                    </div>
            </PageLayout>
        </>
    );
}

export default Home;