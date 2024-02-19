import About from '@components/About'
import Nav from '@components/Nav'
import { header, theme } from '@sanity/lib/queries'

export default function Page() {
  return (
    <main className="">
      <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
      <About themeColor={theme.themeColor}/>
    </main>
  )
}