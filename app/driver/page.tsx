import Driver from '@components/Driver'
import Nav from '@components/Nav'
import { header, theme } from '@sanity/lib/queries'
export default function Page() {
  return (
    <main>
        <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
        <Driver websiteName={theme.websiteName} themeColor={theme.themeColor} whatsapp={theme.socialLinks.whatsapp} email={theme.socialLinks.email} />
    </main>
  )
}