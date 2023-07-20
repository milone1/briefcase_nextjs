import Bulb from "../../components/Bulb";
import Circles from "@/components/Circles";
import WorkSlider from "@/components/WorkSlider";
import { fadeIn } from "@/utils/variants";
import { motion } from "framer-motion";

const Work = () => {
    return (
        <div className="h-full bg-primary/30 py-36 flex items-center">
            <Circles />
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-x-8">
                    <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4">
                        <motion.h2
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            variants={fadeIn('up', 0.2)}
                            className='h2 xl:mt-8'>
                            My work <span className="text-accent">.</span>
                        </motion.h2>

                        <motion.p
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            variants={fadeIn('up', 0.4)}
                            className="mb-4 max-w-[400px] mx-auto lg:mx-0">
                            Aliqua non in aliquip nulla quis voluptate reprehenderit voluptate adipisicing occaecat laborum adipisicing. Nulla enim culpa et ullamco labore veniam laboris dolore amet. Dolore consectetur ad exercitation nisi.
                        </motion.p>
                    </div>

                    <motion.div
                            initial='hidden'
                            animate='show'
                            exit='hidden'
                            variants={fadeIn('down', 0.2)}
                            className="w-full xl:max-w-[65%]">
                                <WorkSlider />
                    </motion.div>
                </div>
            </div>
            <Bulb />
        </div>
    );
};

export default Work;