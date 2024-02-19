import Hero from '@components/Hero'
import FeaturesWithImage from '@components/FeaturesWithImage'
import Testimonial from '@components/Testimonial'
import Features from '@components/Features'
import ImageBanner from '@components/ImageBanner'
import Slider from '@components/Slider'
import Collage2 from '@components/Collage2'
import Nav from '@components/Nav'
import { header, theme } from '@sanity/lib/queries'

export default function Home() {
  return (
    <main className="">
      <Nav menuColor={header.menuColor} phoneBG={header.phoneBG} phoneColor={header.phoneColor} />
      <Hero themeColor={theme.themeColor} />
      <ImageBanner />
      <FeaturesWithImage themeColor={theme.themeColor} />
      <Features themeColor={theme.themeColor} />
      <Collage2 />
      <Slider themeColor={theme.themeColor} />
      <Testimonial themeColor={theme.themeColor} />
    </main>
  )
}

