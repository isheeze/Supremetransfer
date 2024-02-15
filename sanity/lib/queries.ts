import { groq } from "next-sanity";
import { SanityDocument } from "@sanity/client"
import { sanityFetch } from '@sanity/lib/sanityFetch'

// ======================== theme ================================

const getThemeDataQuery = groq`*[_type == "theme"]{
    websiteName,
    websiteDescription,
    logo,
    favicon,
    socialLinks,
}`;

const themeData = await sanityFetch<SanityDocument>({
    query: getThemeDataQuery,
})
export const theme = themeData[0]

// ======================== Header ================================

const getHeaderDataQuery = groq`*[_type == "header"]{
    menuColor,
    phoneBG,
    phoneColor,
    menu
}`;

const headerData = await sanityFetch<SanityDocument>({
    query: getHeaderDataQuery,
})
export const header = headerData[0]


function data(){
    return {theme,
    header}
}

export default data