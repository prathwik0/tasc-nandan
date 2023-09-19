// import React from 'react';
// import {usePathname} from "next/navigation";
// import PageLayout from "@/components/PageLayout";
// import Image from 'next/image';
// import {useRouter} from "next/router";
// import {motion} from "framer-motion";
//
//
// const Handbook = () => {
//     const path = usePathname();
//     const splitPath = path?.split('/') || [];
//     const pathPage = parseInt(splitPath[2]);
//     let leftPage = 0;
//     let rightPage = 0;
//     const router = useRouter();
//     if(pathPage === 1 ){
//         leftPage = 1;
//         rightPage = 2;
//     }
//     else{
//         if(pathPage%2 == 1){
//             leftPage = pathPage -1;
//             rightPage = pathPage;
//         }
//         else{
//             leftPage = pathPage;
//             rightPage = pathPage + 1;
//         }
//     }
//
//     function goToPage(nextPage:number) {
//         router.push(`/handbook/${nextPage}`);
//     }
//
//
//     return(
//         <>
//             <PageLayout>
//                 <>
//                     <motion.div
//                         className={'hidden md:flex items-center h-screen justify-center space-x-10'}
//                         initial={{ opacity: 0, x: -100 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -100 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <Image src={`/Images/Handbook/${leftPage}.jpg`} alt={`${leftPage}`} height={700} width={500} />
//                         {pathPage === 1 ? null : (
//                             <Image src={`/Images/Handbook/${rightPage}.jpg`} alt={`${rightPage + 1}`} height={700} width={500} />
//                         )}
//                     </motion.div>
//                     <motion.div
//                         className={'flex md:hidden items-center h-screen justify-center py-32'}
//                         initial={{ opacity: 0, x: -100 }}
//                         animate={{ opacity: 1, x: 0 }}
//                         exit={{ opacity: 0, x: -100 }}
//                         transition={{ duration: 0.5 }}
//                     >
//                         <div className={'flex space-x-5'}>
//                             <Image src={`/Images/Handbook/${leftPage}.jpg`} alt={`${leftPage}`} height={400} width={200} />
//                             {pathPage === 1 ? null : (
//                                 <Image src={`/Images/Handbook/${rightPage}.jpg`} alt={`${rightPage + 1}`} height={400} width={200} />
//                             )}
//                         </div>
//                     </motion.div>
//                     <div className={'flex space-x-6 absolute md:-translate-y-[6rem] -translate-y-[14rem] justify-center w-full'}>
//                         {pathPage === 1 ? null : (
//                             <button
//                                 onClick={() => goToPage(pathPage === 2 ? 1 : leftPage - 2)}
//                                 className={'dark:bg-[#ECDBFF] bg-[#000015] text-white dark:text-black px-4 py-2 rounded-xl'}
//                             >
//                                 Previous Page
//                             </button>
//                         )}
//                         {pathPage === 47 ? null : (
//                             <button
//                                 onClick={() => goToPage(rightPage + 1)}
//                                 className={'dark:bg-[#ECDBFF] bg-[#000015] text-white dark:text-black px-6 py-2 rounded-xl'}
//                             >
//                                 Next Page
//                             </button>
//                         )}
//                     </div>
//                 </>
//             </PageLayout>
//         </>
//     );
// };
//
// export default Handbook;


import React, {useState} from 'react';
import {usePathname} from "next/navigation";
import PageLayout from "@/components/PageLayout";
import Image from 'next/image';
import {useRouter} from "next/router";
import {motion} from "framer-motion";


const Handbook = () => {
    const path = usePathname();
    const splitPath = path?.split('/') || [];
    const pathPage = parseInt(splitPath[2]);
    let leftPage = 0;
    let rightPage = 0;
    const router = useRouter();
    if(pathPage === 1 ){
        leftPage = 1;
        rightPage = 2;
    }
    else{
        if(pathPage%2 == 1){
            leftPage = pathPage -1;
            rightPage = pathPage;
        }
        else{
            leftPage = pathPage;
            rightPage = pathPage + 1;
        }
    }

    function goToPage(nextPage:number) {
        router.push(`/handbook/${nextPage}`);
    }

    const pages:number[] = [];
    for(let i=1;i<=47;i++){
        pages.push(i);
    }

    const [selectedNumber, setSelectedNumber] = useState('');
    const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedNumber(selectedValue);
        router.push(`/handbook/${selectedValue}`);
    };

    return(
        <>
            <PageLayout>
                <>
                    <motion.div
                        className={'hidden md:flex items-center h-screen justify-center space-x-10 overflow-x-hidden'}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <Image src={`/Images/Handbook/${leftPage}.jpg`} alt={`${leftPage}`} height={700} width={500} />
                        {pathPage === 1 ? null : (
                            <Image src={`/Images/Handbook/${rightPage}.jpg`} alt={`${rightPage + 1}`} height={700} width={500} />
                        )}
                    </motion.div>
                    <motion.div
                        className={'flex  md:hidden items-center h-screen justify-center py-32 overflow-x-hidden'}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.5 }}
                    >
                        <div className={'flex space-x-5'}>
                            <Image src={`/Images/Handbook/${leftPage}.jpg`} alt={`${leftPage}`} height={250} width={180} />
                            {pathPage === 1 ? null : (
                                <Image src={`/Images/Handbook/${rightPage}.jpg`} alt={`${rightPage + 1}`} height={250} width={180} />
                            )}
                        </div>
                    </motion.div>
                    <div className={'flex space-x-6 absolute md:-translate-y-[6rem] -translate-y-[14rem] justify-center w-full'}>
                        {pathPage === 1 ? null : (
                            <button
                                onClick={() => goToPage(pathPage === 2 ? 1 : leftPage - 2)}
                                className={'dark:bg-[#ECDBFF] bg-[#000015] text-white dark:text-black px-4 py-2 rounded-xl'}
                            >
                                Previous Page
                            </button>
                        )}

                        <select className={'rounded-xl px-6 py-2 dark:bg-[#ECDBFF] bg-[#000015] text-white dark:text-black'} onChange={handleChange} value={selectedNumber}>
                            {
                                pages.map(page => (
                                    <option key={page} value={page}>
                                        {page <=9 ? `0${page}` : page}
                                    </option>
                                ))
                            }
                        </select>

                        {pathPage === 47 ? null : (
                            <button
                                onClick={() => goToPage(rightPage + 1)}
                                className={'dark:bg-[#ECDBFF] bg-[#000015] text-white dark:text-black px-6 py-2 rounded-xl'}
                            >
                                Next Page
                            </button>
                        )}
                    </div>
                </>
            </PageLayout>
        </>
    );
};

export default Handbook;

