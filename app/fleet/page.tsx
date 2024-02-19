import Fleet from "@components/Fleet"
import Nav from "@components/Nav"
import { header, theme } from "@sanity/lib/queries"
import Image from 'next/image'
export default function Page() {
  return (
    <main className="">
      <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
      <Fleet themeColor={theme.themeColor}/>
    </main>
  )
}