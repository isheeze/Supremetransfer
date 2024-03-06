import FleetPrice from "@components/FleetPrice"
import Nav from "@components/Nav"
import { header, theme } from "@sanity/lib/queries"

export default function Page({
  params,
  searchParams,
}: {
  params: { price: number };
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  return (
    <main className="">
      <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
      {searchParams && <FleetPrice themeColor={theme.themeColor} price={params.price} direction={searchParams.direction}/>}
    </main>
  )
}