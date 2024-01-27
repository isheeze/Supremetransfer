'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
import Image from 'next/image'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

const slides = [
  {
    heading: "60 MIN FREE WAITING",
    desc: "We give a complimetry waiting time, 60 min at airports and 15 min at other locations.",
    img: "/collage1.jpeg"
  },
  {
    heading: "24/7 CUSTOMER SERVICE",
    desc: "Our customer support service works 24/7 to solve queries instantly and book rides.",
    img: "/collage2.jpeg"
  },
  {
    heading: "ZERO DELAYS",
    desc: "We arrive on time, with a plan to ensure you have no delays in your journey",
    img: "/collage3.jpeg"
  },
  {
    heading: "PRIVACY POLICY",
    desc: "Our chauffeur have signed NDA's to assure our clients their privacy will stay intact.",
    img: "/collage4.jpeg"
  },
  {
    heading: "FIXED PRICES",
    desc: "No hidden charges, no extra fees, we charge fixed prices so you can choose us without any confusion.",
    img: "/collage5.jpeg"
  },
  {
    heading: "FLIGHT MONITORING",
    desc: "Latest navigation system and flight monitoring technology in our cars keep you updated about flight status while going to airport.",
    img: "/collage6.jpeg"
  }
]

export default () => {
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
          {slides.map((slide)=>(
            <SwiperSlide>
              <div className="relative min-h-[500px] isolate overflow-hidden bg-gray-900 px-6 pt-16 sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
                <Image
                  className="w-full h-full object-cover text-transparent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10"
                  src={slide.img}
                  alt={slide.heading}
                  width={2000}
                  height={800}
                />
                <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
                  <div className='bg-indigo-600 rounded-3xl p-5'>
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                      {slide.heading}
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                      {slide.desc}
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