import Nav from '@components/Nav'
import PortsChauffeur from '@components/PortsChauffeur'
import { header, theme } from '@sanity/lib/queries'
export default function Page() {
  return (
    <main>
        <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
        <PortsChauffeur themeColor={theme.themeColor}/>
    </main>
  )
}