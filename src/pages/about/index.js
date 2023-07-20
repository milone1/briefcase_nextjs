import Icons from "@/components/Icons";
import { useState } from "react";

import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaWordpress,
    FaFigma,
} from 'react-icons/fa';

import {
    SiNextdotjs,
    SiFramer,
    SiAdobexd,
    SiAdobephotoshop,
} from 'react-icons/si';

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
                // icons: [
                //     <FaHtml5 />,
                //     <FaCss3 />,
                //     <FaJs />,
                //     <FaReact />,
                //     <SiNextdotjs />,
                //     <SiFramer />,
                //     <FaWordpress />,
                // ],
            },
            {
                title: 'UI/UX Design',
                // icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
            },
        ],
    },
    {
        title: 'awards',
        info: [
            {
                title: 'Webby Awards - Honoree',
                stage: '2011 - 2012',
            },
            {
                title: 'Adobe Design Achievement Awards - Finalist',
                stage: '2009 - 2010',
            },
        ],
    },
    {
        title: 'experience',
        info: [
            {
                title: 'UX/UI Designer - XYZ Company',
                stage: '2012 - 2023',
            },
            {
                title: 'Web Developer - ABC Agency',
                stage: '2010 - 2012',
            },
            {
                title: 'Intern - DEF Corporation',
                stage: '2008 - 2010',
            },
        ],
    },
    {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - ABC University, LA, CA',
                stage: '2011',
            },
            {
                title: 'Computer Science Diploma - AV Technical Institute',
                stage: '2009',
            },
            {
                title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                stage: '2006',
            },
        ],
    },
];

const About = () => {

    const [index, setIndex] = useState(0)


    return (
        <div className="h-full bg-primary/30 py-32 text-center xl:text-left">
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

            <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
                {/* text */}
                <div className="flex-1 flex flex-col justify-center">
                    <motion.h2
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        variants={fadeIn('right', 0.6)}
                        className="h2">Captivating <span className="text-accent">stories</span> birth magnificent desings.</motion.h2>
                    <motion.p
                        initial='hidden'
                        animate='show'
                        exit='hidden'
                        variants={fadeIn('right', 0.6)}
                        className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0">
                        Minim fugiat ea eiusmod elit velit incididunt laborum. Aliqua aliqua sint non anim. Nisi mollit nulla anim commodo nostrud sint ut anim. Nisi Lorem in adipisicing anim consectetur fugiat. Veniam ad nisi magna dolor ea qui aute in elit.
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
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={10} duration={5} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Years of experience</div>
                            </div>

                            {/* clients */}
                            <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={250} duration={10} /> +
                                </div>
                                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px] ">Clients</div>
                            </div>

                            {/* Projects */}
                            <div className="relative flex-1 ">
                                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                                    <CountUp start={0} end={5} duration={5} /> +
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
                                <div key={indexItem} className={`${index === indexItem && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`} onClick={() => setIndex(indexItem)}>{item.title}</div>
                            );
                        })}
                    </div>
                    <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
                        {aboutData[index].info.map((item, indexItem) => {
                            return (
                                <div key={indexItem} className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                                    <div className="font-light mb-2">{item.title}</div>
                                    <div className="hidden md:flex">-</div>
                                    <div>{item.stage}</div>

                                    <div className="flex gap-x-4">
                                        {indexItem === 0 && item.title === 'Web Development' && (
                                            <div className="text-2xl text-white flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                                                <FaHtml5 />
                                                <FaCss3 />
                                                <FaJs />
                                                <FaReact />
                                                <SiNextdotjs />
                                                <SiFramer />
                                                <FaWordpress />
                                            </div>
                                        )}
                                        {indexItem === 1 && item.title === 'UI/UX Design' && (
                                            <div className="flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60">
                                                <FaFigma />
                                                <SiAdobexd />
                                                <SiAdobephotoshop />
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