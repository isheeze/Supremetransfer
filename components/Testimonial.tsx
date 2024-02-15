'use client'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid"
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import 'swiper/css/autoplay'
import '@styles/Testimonial.css'

import { EffectCoverflow, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { useEffect, useState } from "react"
import { SanityDocument, groq } from "next-sanity"
import { sanityFetch } from "@sanity/lib/sanityFetch"

export default function Testimonial(){
  const [reviewsSection, setReviewsSection] = useState<SanityDocument>()
    
  useEffect(() => {
    const fetchThemeData = async () => {
      try {
        const getThemeDataQuery = groq`*[_type == "home"]{
          ReviewsSection
        }`;

        const themeData = await sanityFetch<SanityDocument>({
          query: getThemeDataQuery,
        });

        setReviewsSection(themeData[0].ReviewsSection);
      } catch (error) {
        console.error('Error fetching theme data:', error);
      }
    };

    fetchThemeData();
  }, []);

  if (!reviewsSection) {
    return <div></div>;
  }
  
    return (
      <div className="bg-white py-24 sm:py-16">
      <div className="testimonials">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-center">
            Our Client's Say
          </p>
        </div>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            pagination={{ el: '.swiper-pagination', clickable: true }}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev'
            }}
            autoplay
            modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
            className="swiper_container"
          >
            {reviewsSection.reviews.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="relative p-10 pt-24 w-full text-gray-800">
                  <Image className="absolute top-5 right-7 opacity-20" src='/quote.png' width={80} height={80} alt="quote"/>
                  <div>
                    <p>{item.review}</p>
                    <div>
                      <div className="flex mt-5">
                        <h3 className="text-base font-normal tracking-[1px] text-indigo-600">
                          {item.name} <br />
                          <span className="text-xs text-gray-900">{item.profession}</span>
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
    
            <div className="slider-controler flex mt-28">
              <div className="swiper-button-prev slider-arrow h-9 w-9">
                <ChevronLeftIcon className="text-indigo-600"/>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ChevronRightIcon className="text-indigo-600" />
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </Swiper>
        </div>
      </div>
  )
}