import Hero from '@components/Hero'
import FeaturesWithImage from '@components/FeaturesWithImage'
import Testimonial from '@components/Testimonial'
import Features from '@components/Features'
import ImageBanner from '@components/ImageBanner'
import Slider from '@components/Slider'
import Collage2 from '@components/Collage2'

export default function Home() {
  return (
    <main className="">
      <Hero />
      <ImageBanner />
      <FeaturesWithImage />
      <Features />
      <Collage2 />
      <Slider />
      <Testimonial />
    </main>
  )
}

