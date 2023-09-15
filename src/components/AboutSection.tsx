import React from 'react';

const AboutSection = () => {
    return(
        <>
            <div  className={'md:mx-16 mx-6 px-6 md:px-14 py-10 space-y-10 bg-[#ECDBFF] rounded-xl dark:bg-[#000015]'}>
                <h1 className={'lg:text-5xl text-4xl font-extrabold text-center'}>About Us</h1>
                <div className={'md:grid md:grid-cols-2 md:gap-x-10 items-center space-y-10'}>
                    <div className={'space-y-4'}>
                        <h3 className={'lg:text-3xl text-2xl font-bold'}>Mission</h3>
                        <p className={'lg:text-xl text-md max-w-4xl pb-6'}>Our mission is to educate and engage members about the latest developments and applications of artificial intelligence, and to foster collaboration and discussion within the AI community.</p>

                        <h3 className={'text-3xl font-bold'}>Vision</h3>
                        <p className={'lg:text-xl text-md max-w-4xl pb-6'}>Our vision is to become a leading hub for AI research and development, and to help drive innovation and progress in the field.</p>

                        <h3 className={'text-3xl font-bold'}>Values</h3>
                        <p className={'lg:text-xl text-md max-w-4xl pb-6'}>Our values include creativity, collaboration, inclusivity, ethics, and excellence in everything we do.</p>

                        <h3 className={'text-3xl font-bold'}>Belief</h3>
                        <p className={'lg:text-xl text-md max-w-4xl pb-6'}>We believe in the potential of AI to improve our world, and we strive to use it responsibly and ethically.</p>
                    </div>
                    <div>
                        <img src="/AboutBanner.jpg" alt="AboutBanner"  className={'rounded-xl'}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AboutSection;