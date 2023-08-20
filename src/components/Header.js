import Image from "next/image";
import Link from "next/link";
import Socials from "./Socials";

const Header = () => {
    return (
      <header className="absolute z-30 w-full items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-y-6 py-6">
          <Link href={'/'}>
            <Image 
              width={220}
              height={48}
              priority={true}
              alt=""
              className="bg-white px-4 py-2 rounded-md shadow-md hidden md:block"
              src={'/logo.png'}
            />
          </Link>
          <Socials />
        </div>
      </div>
    </header>
    );
  };
  
export default Header;