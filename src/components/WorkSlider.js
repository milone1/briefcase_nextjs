import {Swiper, SwiperSlide } from "swiper/react";

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import { Pagination } from "swiper";
// import {RxArrowTopRight} from 'react-icons/rx'
import Image from "next/image";
import { BsArrowRight } from "react-icons/bs";
import Link from "next/link";

const WorkSlider = () => {

    const workSlides = {
        slides: [
          {
            images: [
              {
                title: 'Landing Strong',
                path: 'https://res.cloudinary.com/dijacbsqo/image/upload/v1700013314/Face_ekv2lo.png',
                repository: 'https://strong.pisonay.com.pe/'
              },
              {
                title: 'Quiz App',
                path: 'https://miro.medium.com/v2/resize:fit:612/1*IEvCzclpZEQa5b1ZnzNhJw.png',
                repository: 'https://github.com/milone1/quizzApp.github.io'
              },
            ],
          },
          {
            images: [
              {
                title: 'ecommerce_flutter',
                path: '/ecommerce_flutter1.webp',
                repository: 'https://github.com/milone1/sunmi-ecommerce'
              },
              {
                title: 'app_chat',
                path: '/appchat1.webp',
                repository: 'https://github.com/milone1/appChat_flutter'
              },
              {
                title: 'calculator_flutter',
                path: '/calculator1.webp',
                repository: 'https://github.com/milone1/calculator-GetX'
              },
              {
                title: 'movies_app',
                path: '/moviesapp1.webp',
                repository: 'https://github.com/milone1/moviesApp_flutter'
              },
            ],
          },
          {
            images: [
              {
                title: 'qr_scan_flutter',
                path: '/qrscanlite.webp',
                repository: 'https://github.com/milone1/qr_scan_flutter'
              },
            ],
          }
        ],
      };


    return (
        <Swiper 
        spaceBetween={10}
        pagination={{
            clickable: true,
        }}
        modules={[Pagination]}
        className="h-[280px] sm:h-[480px]" >
            {workSlides.slides.map((item, index) => {
                return <SwiperSlide key={index}>
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
                        {item.images.map((path, index) => {
                            return <div className="w-auto h-[120px] md:h-[180px] relative rounded-lg overflow-hidden flex items-center justify-center group" key={index}>
                              <Link href={`${path.repository}`}>
                                <div className="flex items-center justify-center relative overflow-hidden group">
                                    <Image src={path.path} width={500} height={280} alt="" className="object-cover rounded-lg"/>
                                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#000000] to-[#3282B8] opacity-0 group-hover:opacity-30 transition-all duration-700"></div>

                                    <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                                            <div className="delay-100">LIVE</div>
                                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">PROJECT</div>
                                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 duration-300 delay-200"> 
                                                <BsArrowRight /> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        })}
                    </div>
                </SwiperSlide>
            })}
        </Swiper>
    );
}

export default WorkSlider