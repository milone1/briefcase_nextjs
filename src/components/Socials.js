import Link from "next/link";

import { RiInstagramLine, RiTwitterLine, RiWhatsappLine, RiLinkedinLine, RiGithubLine } from "react-icons/ri";

const Socials = () => {
    return(
        <div className="flex items-center gap-x-5 text-lg">

            {/* <Link href={''} className="hover:text-[#3282B8] transition-all duration-300">
                <RiInstagramLine />
            </Link> */}

            <Link href={'https://www.linkedin.com/in/erick-milan-marin-165a8b231/'} className="hover:text-[#3282B8] transition-all duration-300">
                <RiLinkedinLine />
            </Link>

            <Link href={'https://wa.me/51995560456'} className="hover:text-[#3282B8] transition-all duration-300">
                <RiWhatsappLine />
            </Link>

            {/* <Link href={''} className="hover:text-[#3282B8] transition-all duration-300">
                <RiTwitterLine />
            </Link> */}

            <Link href={'https://github.com/milone1'} className="hover:text-[#3282B8] transition-all duration-300">
                <RiGithubLine />
            </Link>

        </div>
    );
};

export default Socials;
