import Icons from "@/components/Icons";
import { useState } from "react";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
    FaPython,
    FaJava,
    FaNodeJs,
    FaAngular,
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
    SiCsharp,
    SiTailwindcss,
    SiFlutter,
    SiSwift
} from 'react-icons/si';

import { TbBrandReactNative } from 'react-icons/tb'

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from 'framer-motion'
import { fadeIn } from "../../utils/variants";
import CountUp from "react-countup";

const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Web Development',
            },
            {
                title: 'Mobile',
            },
            {
                title: 'UI/UX Design',
            }
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'Programmer Analyst - INFOMATICA',
                stage: '2022 - 2023',
            },
            {
                title: 'Full-stack - FREELANCE',
                stage: '2020 - 2023',
            },
            {
                title: 'Mobile - ISIL',
                stage: '2023 - 2023',
            },
            {
                title: 'Frontend - THE PISONAY',
                stage: '2023 - 2024',
            },
            {
                title: 'Backend - AYESA',
                stage: '2023 - 2024',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - TECSUP, Lima',
                stage: '2020',
            },
            {
                title: 'Ing. systems and informatics - UTP, Lima',
                stage: '2024',
            },
            {
                title: 'Mobile Developer - TECSUP, Lima',
                stage: '2021',
            },
            {
                title: 'Ingles - ICPNA, Lima',
                stage: '2020',
            },
        ],
    },
];

const About = () => {

    const [index, setIndex] = useState(0)


    return (
        <div className="h-full bg-primary py-32 text-center xl:text-left">
            <Circles />
            <motion.div
                initial='initial'
                animate='show'
                exit='hidden'
                variants={fadeIn('right', 0.4)}
                className="hidden xl:flex absolute bottom-0 -left-[370px]"
            >
                <Avatar />
            </motion.div>

            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-auto">
                {/* text */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        variants={fadeIn('right', 0.6)}
                        className="h2">Immersive <span className="text-[#3282B8]">stories</span> , exceptional designs.</motion.h2>
                    <motion.p
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        variants={fadeIn('right', 0.6)}
                        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
                        Since I started my journey in development, Through these languages, I have been able to create creative and efficient solutions that have driven the success of several projects.
                    </motion.p>

                    <motion.div
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        variants={fadeIn('right', 0.8)}
                        className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8">
                        <div className="flex flex-1 xl:gap-x-6 ">
                            {/* experience */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-[#3282B8] mb-2">
                                    <CountUp start={0} end={3} duration={6} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Years of experience</div>
                            </div>

                            {/* clients */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-[#3282B8] mb-2">
                                    <CountUp start={0} end={7} duration={6} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Clients</div>
                            </div>

                            {/* Projects */}
                            <div className="relative flex-1 ">
                                <div className="text-2xl xl:text-4xl font-extrabold text-[#3282B8] mb-2">
                                    <CountUp start={0} end={15} duration={6} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Projects</div>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div
                    initial='hidden'
                    animate='show'
                    exit='hidden'
                    variants={fadeIn('left', 0.8)}
                    className="flex flex-col w-full xl:max-w-[48%] h-[480px]">
                    <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
                        {aboutData.map((item, indexItem) => {
                            return (
                                <div key={indexItem} className={`${index === indexItem && 'text-[#3282B8] after:w-[100%] after:bg-[#3282B8] after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[1px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(indexItem)}>{item.title}</div>
                            );
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                        {aboutData[index].info.map((item, indexItem) => {
                            return (
                                <div key={indexItem} className="flex md:flex-row flex-col w-full gap-x-2 items-center text-white/60 justify-between ">
                                    <div className={`${index === 0 ? 'w-[260px]' : 'w-full max-w-[400px]'} whitespace-nowrap font-light mb-2 text-xs md:text-lg`}>{item.title}</div>
                                    <div className="w-auto px-2 hidden md:flex col-span-1">-</div>
                                    <div className={` ${index === 0 ? 'hidden' : 'block w-auto'} col-span-1`}>{item.stage}</div>

                                    <div className={`flex flex-col w-auto justify-center items-center w-full ${index === 0 ? 'block' : 'hidden'}`}>
                                        {indexItem === 0 && item.title === 'Web Development' && (
                                            <div className="md:flex md:flex-row flex flex-col gap-2 md:gap-0 items-center">
                                                <div className="text-2xl text-white flex flex-row max-w-max gap-x-2 items-center text-white/60">
                                                    <FaHtml5 className='hover:text-[#E34F26] transition-colors duration-300 cursor-pointer' />
                                                    <FaCss3 className='hover:text-[#1572B6] transition-colors duration-300 cursor-pointer' />
                                                    <FaJs className='hover:text-[#F7DF1E] transition-colors duration-300 cursor-pointer' />
                                                    <FaReact className='hover:text-[#61DAFB] transition-colors duration-300 cursor-pointer' />
                                                    <SiNextdotjs className='hover:text-[#f2f2f2] transition-colors duration-300 cursor-pointer' />
                                                    <FaPython className='hover:text-[#FFD43B] transition-colors duration-300 cursor-pointer' />
                                                </div>
                                                <div className="text-2xl text-white flex flex-row max-w-max gap-x-2 items-center text-white/60 justify-around">
                                                    <FaJava className='hover:text-[#007396] transition-colors duration-300 cursor-pointer' />
                                                    <FaNodeJs className='hover:text-[#339933] transition-colors duration-300 cursor-pointer' />
                                                    <SiCsharp className='hover:text-[#239120] transition-colors duration-300 cursor-pointer' />
                                                    <SiTailwindcss className='hover:text-[#38B2AC] transition-colors duration-300 cursor-pointer' />
                                                    <FaAngular className='hover:text-[#FC31CA] transition-colors duration-300 cursor-pointer' />
                                                </div>
                                            </div>
                                        )}
                                        {indexItem === 1 && item.title === 'Mobile' && (
                                            <div className="text-2xl flex flex-row max-w-max gap-x-2 items-center text-white/60">
                                                <SiFlutter className='hover:text-[#02569B] transition-colors duration-300 cursor-pointer' />
                                                <SiSwift className='hover:text-[#FA7343] transition-colors duration-300 cursor-pointer' />
                                                <TbBrandReactNative className='hover:text-[#61DAFB] transition-colors duration-300 cursor-pointer' />
                                            </div>
                                        )}

                                        {indexItem === 2 && item.title === 'UI/UX Design' && (
                                            <div className="text-2xl flex flex-row max-w-max gap-x-2 items-center text-white/60">
                                                <FaFigma className='hover:text-[#F24E1E] transition-colors duration-300 cursor-pointer' />
                                                <SiAdobexd className='hover:text-[#FF61F6] transition-colors duration-300 cursor-pointer' />
                                                <SiFramer className='hover:text-[#0055FF] transition-colors duration-300 cursor-pointer' />
                                                <SiAdobephotoshop className='hover:text-[#31A8FF] transition-colors duration-300 cursor-pointer' />
                                            </div>
                                        )}

                                    </div>

                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;