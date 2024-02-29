import Order from '@components/Order'
import Nav from '@components/Nav'
import { header, theme } from '@sanity/lib/queries'

export default function Page() {
  return (
    <main className="">
      <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
      <Order themeColor={theme.themeColor}/>
    </main>
  )
}