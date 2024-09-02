import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { FaQuoteRight } from 'react-icons/fa';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


export default function ReviewPage() {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      new Swiper(swiperRef.current, {
        modules: [Navigation, Pagination], 
        loop: true,
        speed:400,
       spaceBetween:30,
        autoplay:{
            delay: 3000,
            disableOnInteraction : false,

        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        grabCursor: true,
        breakpoints : {
          640 : {
            slidesPerView : 1,
            
          },
          768 : {
            slidesPerView : 2,
            
          },
          1024 : {
            slidesPerView : 3,
            
          }
         
        }
      });
    }
  }, []);

  return (
    <main>
      <div className="mx-w-md mx-auto text-center">
        <h2 className="section__title">CUSTOMER REVIEW</h2>
        <div className="separater mx-auto"></div>
        <p className="paragraph py-3">
          Indulge in the ultimate burger experience with our gourmet creations,
          crafted to perfection with the freshest, highest-quality ingredients.
        </p>
      </div>
      <div className="swiper py-10" ref={swiperRef}>
        <div className="swiper-wrapper lg:flex flex-row items-center">
        
          <div className="swiper-slide mx-auto">
            
            <div className="flex flex-col gap-5 bg-primarycolor dark:bg-darkColor rounded-lg p-6">
              <p className="paragraph">
                Indulge in the ultimate burger experience with our gourmet creations,
                crafted to perfection with the freshest, highest-quality ingredients.
                Each bite delivers a mouthwatering explosion of flavors.
              </p>
              <div className="flex items-center">
                <Image
                  src="/rev1.jpg"
                  alt="this is image"
                  className="w-12 h-12 rounded-full"
                  width={1000}
                  height={1000}
                />
                <div className="ml-2">
                  <p className="uppercase">Salman Khan</p>
                  <p className="paragraph">Actor</p>
                </div>
                <FaQuoteRight className="text-4xl text-secondaryColor ml-auto" />
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="flex flex-col gap-5 bg-primarycolor dark:bg-darkColor rounded-lg p-6">
              <p className="paragraph">
                Indulge in the ultimate burger experience with our gourmet creations,
                crafted to perfection with the freshest, highest-quality ingredients.
                Each bite delivers a mouthwatering explosion of flavors.
              </p>
              <div className="flex items-center">
                <Image
                  src="/rev2.jpg"
                  alt="this is image"
                  className="w-12 h-12 rounded-full"
                  width={1000}
                  height={1000}
                />
                <div className="ml-2">
                  <p className="uppercase">tiger shroff</p>
                  <p className="paragraph">Actor</p>
                </div>
                <FaQuoteRight className="text-4xl text-secondaryColor ml-auto" />
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="flex flex-col gap-5 bg-primarycolor dark:bg-darkColor rounded-lg p-6">
              <p className="paragraph">
                Indulge in the ultimate burger experience with our gourmet creations,
                crafted to perfection with the freshest, highest-quality ingredients.
                Each bite delivers a mouthwatering explosion of flavors.
              </p>
              <div className="flex items-center">
                <Image
                  src="/rev3.jpg"
                  alt="this is image"
                  className="w-12 h-12 rounded-full"
                  width={1000}
                  height={1000}
                />
                <div className="ml-2">
                  <p className="uppercase">hritik roshan</p>
                  <p className="paragraph">Actor</p>
                </div>
                <FaQuoteRight className="text-4xl text-secondaryColor ml-auto" />
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="flex flex-col gap-5 bg-primarycolor dark:bg-darkColor rounded-lg p-6">
              <p className="paragraph">
                Indulge in the ultimate burger experience with our gourmet creations,
                crafted to perfection with the freshest, highest-quality ingredients.
                Each bite delivers a mouthwatering explosion of flavors.
              </p>
              <div className="flex items-center">
                <Image
                  src="/rev4.jpg"
                  alt="this is image"
                  className="w-12 h-12 rounded-full"
                  width={1000}
                  height={1000}
                />
                <div className="ml-2">
                  <p className="uppercase">Shahid kapoor</p>
                  <p className="paragraph">Actor</p>
                </div>
                <FaQuoteRight className="text-4xl text-secondaryColor ml-auto" />
              </div>
            </div>
          </div>
          <div className="swiper-slide">
            <div className="flex flex-col gap-5 bg-primarycolor dark:bg-darkColor rounded-lg p-6">
              <p className="paragraph">
                Indulge in the ultimate burger experience with our gourmet creations,
                crafted to perfection with the freshest, highest-quality ingredients.
                Each bite delivers a mouthwatering explosion of flavors.
              </p>
              <div className="flex items-center">
                <Image
                  src="/rev5.jpg"
                  alt="this is image"
                  className="w-12 h-12 rounded-full object-cover"
                  width={1000}
                  height={1000}
                />
                <div className="ml-2">
                  <p className="uppercase">vicky kaushal</p>
                  <p className="paragraph">Actor</p>
                </div>
                <FaQuoteRight className="text-4xl text-secondaryColor ml-auto" />
              </div>
            </div>
          </div>
          {/* Add more slides here */}
          
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </div>
    </main>
  );
}
