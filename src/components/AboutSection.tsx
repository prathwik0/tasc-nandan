import React from 'react';

const AboutSection = () => {
    return(
        <>
            <div  className={'mx-16 px-8 py-6 space-y-6 bg-[#ECDBFF] rounded-xl dark:bg-[#000015]'}>
                <h1 className={'text-5xl font-extrabold text-center'}>About Us</h1>
                <h3 className={'text-3xl font-bold'}>Mission</h3>
                <p className={'text-2xl max-w-4xl'}>Our mission is to educate and engage members about the latest developments and applications of artificial intelligence, and to foster collaboration and discussion within the AI community.</p>
            </div>
        </>
    )
}

export default AboutSection;