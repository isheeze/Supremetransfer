import Confirm from '@components/Confirm'
import Nav from '@components/Nav'
import { header, theme } from '@sanity/lib/queries'

const Page = (props: any) => {
    return (
        <>
        <Nav menuColor={header.menuColorN} phoneBG={header.phoneBGN} phoneColor={header.phoneColorN} />
        <Confirm themeColor={theme.themeColor}/>
        </>
    )
}

export default Page