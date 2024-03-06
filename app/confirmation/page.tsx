import Confirm from '@components/Confirm'
import Nav from '@components/Nav'
import { header, theme } from '@sanity/lib/queries'

const Page = ({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
  }) => {
    return (
        <>
        <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
        <Confirm themeColor={theme.themeColor} searchParams={searchParams}/>
        </>
    )
}

export default Page