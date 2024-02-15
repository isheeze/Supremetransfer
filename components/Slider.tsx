'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import { useEffect, useState } from 'react';
import { SanityDocument, groq } from 'next-sanity';
import { sanityFetch } from '@sanity/lib/sanityFetch';
import { urlForImage } from '@sanity/lib/image';

export default () => {
  const [sliderSection, setSliderSection] = useState<SanityDocument>()
    
  useEffect(() => {
    const fetchThemeData = async () => {
      try {
        const getThemeDataQuery = groq`*[_type == "home"]{
          SliderSection
        }`;

        const themeData = await sanityFetch<SanityDocument>({
          query: getThemeDataQuery,
        });

        setSliderSection(themeData[0].SliderSection);
      } catch (error) {
        console.error('Error fetching theme data:', error);
      }
    };

    fetchThemeData();
  }, []);

  if (!sliderSection) {
    return <div></div>;
  }

  return (
    <div className="bg-white">
      <div className="dark-bg mx-auto max-w-7xl py-24 sm:px-6 sm:py-16 lg:px-8">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }}
          modules={[Pagination, Navigation, Autoplay, EffectFade]}
          autoplay
          className="swiper_container"
          effect="fade"
        >
          {sliderSection?.slides?.map((slide: any)=>(
            <SwiperSlide>
              <div className="relative min-h-[500px] isolate overflow-hidden bg-gray-900 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <Image
                  className="w-full h-full object-cover text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                  src={urlForImage(slide.image)}
                  alt={slide.title}
                  width={2000}
                  height={800}
                />
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <div className='bg-indigo-600 rounded-3xl p-5' style={{backgroundColor: slide.bgColor}}>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {slide.title}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      {slide.description}
                    </p>
                  </div>
                </div>
                <div className="relative mt-16 h-80 lg:mt-8 text-center">
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="slider-controler">
            <div className="swiper-button-prev slider-arrow after:text-white after:!text-xl"></div>
            <div className="swiper-button-next slider-arrow after:text-white after:!text-xl"></div>
            <div className="swiper-pagination"></div>
          </div>
        </Swiper>
      </div>
    </div>
  );
};