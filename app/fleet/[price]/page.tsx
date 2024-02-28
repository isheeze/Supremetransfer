import FleetPrice from "@components/FleetPrice"
import Nav from "@components/Nav"
import { header, theme } from "@sanity/lib/queries"

export default function Page({ params }: { params: { price: number } }) {
  return (
    <main className="">
      <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
      <FleetPrice themeColor={theme.themeColor} price={params.price}/>
    </main>
  )
}