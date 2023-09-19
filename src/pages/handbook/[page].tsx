import React from 'react';
import {usePathname} from "next/navigation";
import PageLayout from "@/components/PageLayout";
import Image from 'next/image';
import {useRouter} from "next/router";



const Handbook = () => {
    const path = usePathname();
    const splitPath = path?.split('/') || [];
    const pathPage = parseInt(splitPath[2]);
    let leftPage = 0;
    let rightPage = 0;
    const router = useRouter();
    if(pathPage%2 == 1){
        leftPage = pathPage;
        rightPage = pathPage+1;
    }
    else{
        leftPage = pathPage-1;
        rightPage = pathPage;
    }

    function goToPage(nextPage:number) {
        router.push(`/handbook/${nextPage}`);
    }


    return(
        <>
            <PageLayout>
                <>
                    <div className={'hidden md:flex items-center h-screen justify-center space-x-10'}>
                        <Image src={`/Images/Handbook/${leftPage}.jpg`} alt={`${leftPage}`} height={700} width={500}/>
                        {pathPage === 1 ? null : (<Image src={`/Images/Handbook/${rightPage}.jpg`} alt={`${rightPage+1}`} height={700} width={500}/>)}
                    </div>
                    <div className={'flex md:hidden items-center h-screen justify-center py-32'}>
                        <div className={'flex space-x-5'}>
                            <Image src={`/Images/Handbook/${leftPage}.jpg`} alt={`${leftPage}`} height={400} width={200}/>
                            {pathPage === 1 ? null : (<Image src={`/Images/Handbook/${rightPage}.jpg`} alt={`${rightPage+1}`} height={400} width={200}/>)}
                        </div>
                    </div>
                    <div className={'flex space-x-6 absolute md:-translate-y-[6rem] -translate-y-[14rem] justify-center w-full'}>
                        {
                            pathPage === 1 ? null : (
                                <button onClick={() => goToPage( leftPage -2)} className={'dark:bg-[#ECDBFF] bg-[#000015] text-white dark:text-black px-4 py-2 rounded-xl'}>
                                    Previous Page
                                </button>
                            )
                        }
                        {
                            pathPage === 47 ? null : (
                                <button onClick={() => goToPage(rightPage +1)} className={'dark:bg-[#ECDBFF] bg-[#000015] text-white dark:text-black px-6 py-2 rounded-xl'}>
                                    Next Page
                                </button>
                            )
                        }
                    </div>
                </>
            </PageLayout>
        </>
    );
};

export default Handbook;