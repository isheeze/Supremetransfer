import AirportTransfer from '@components/AirportTransfer'
import Nav from '@components/Nav'
import { header, theme } from '@sanity/lib/queries'
export default function Page() {
  return (
    <main>
        <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
        <AirportTransfer themeColor={theme.themeColor} />
    </main>
  )
}