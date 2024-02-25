import { groq } from "next-sanity";
import { SanityDocument } from "@sanity/client"
import { sanityFetch } from '@sanity/lib/sanityFetch'

// ======================== theme ================================

export const getThemeDataQuery = groq`*[_type == "theme"]{
    websiteName,
    websiteDescription,
    logo,
    favicon,
    socialLinks,
    themeColor
}`;

const themeData = await sanityFetch<SanityDocument>({
    query: getThemeDataQuery,
})
export const theme = themeData[0]

// ======================== Header ================================

export const getHeaderDataQuery = groq`*[_type == "header"]{
    menuColor,
    phoneBG,
    phoneColor,
    menuColorN,
    phoneBGN,
    phoneColorN,
    menu
}`;

const headerData = await sanityFetch<SanityDocument>({
    query: getHeaderDataQuery,
})
export const header = headerData[0]

// ======================== Footer ================================

export const getFooterDataQuery = groq`*[_type == "footer"]{
    gallery,
    Menus,
    titleColorCode,
    menuColorCode
}`;

const footerData = await sanityFetch<SanityDocument>({
    query: getFooterDataQuery,
})
export const footer = footerData[0]

// ======================== Home ================================
export const getImageBannerQuery = groq`*[_type == "home"]{
    imageBanner
}`;

const ImageBannerData = await sanityFetch<SanityDocument>({
    query: getImageBannerQuery,
})
export const imageBanner = ImageBannerData[0]

export const carsSectionQuery = groq`*[_type == "home"]{
    CarsSection
}`;

const CarsSectionData = await sanityFetch<SanityDocument>({
    query: carsSectionQuery,
})
export const carsSection = CarsSectionData[0]

// feature with image section
export const getFeatureWithImageQuery = groq`*[_type == "home"]{
    WelcomeSection
}`;

const FeatureWithImageData = await sanityFetch<SanityDocument>({
    query: getFeatureWithImageQuery,
})
export const featureWithImage = FeatureWithImageData[0].WelcomeSection

// feature section
export const getFeaturesQuery = groq`*[_type == "home"]{
    FeaturesSection
}`;

const FeaturesData = await sanityFetch<SanityDocument>({
    query: getFeaturesQuery,
})
export const features = FeaturesData[0].FeaturesSection

// Collage2Section
export const getCollage2SectionQuery = groq`*[_type == "home"]{
    Collage2Section
}`;

const Collage2SectionData = await sanityFetch<SanityDocument>({
    query: getCollage2SectionQuery,
})
export const collage2Section = Collage2SectionData[0].Collage2Section

// SliderSection
export const getSliderSectionQuery = groq`*[_type == "home"]{
    SliderSection
}`;

const SliderSectionData = await sanityFetch<SanityDocument>({
    query: getSliderSectionQuery,
})
export const sliderSection = SliderSectionData[0].SliderSection

// ReviewsSection
export const getReviewsSectionQuery = groq`*[_type == "home"]{
    ReviewsSection
}`;

const ReviewsSectionData = await sanityFetch<SanityDocument>({
    query: getReviewsSectionQuery,
})
export const reviewsSection = ReviewsSectionData[0].ReviewsSection

// ======================== About ================================
export const getaboutQuery = groq`*[_type == "about"]{
    sections
}`;

const aboutData = await sanityFetch<SanityDocument>({
    query: getaboutQuery,
})
export const about = aboutData[0]

// ======================== airportTransfer ================================
export const getairportTransferQuery = groq`*[_type == "airportTransfer"]{
    heading,
    subheading,
    images,
    points,
    sections
}`;

const airportTransferaboutData = await sanityFetch<SanityDocument>({
    query: getairportTransferQuery
})
export const airportTransfer = airportTransferaboutData[0]

// ======================== portsChauffeur ================================
export const getportsChauffeurQuery = groq`*[_type == "portsChauffeur"]{
    heading,
    subheading,
    images,
    points,
    sections
}`;

const portsChauffeurData = await sanityFetch<SanityDocument>({
    query: getportsChauffeurQuery
})
export const portsChauffeur = portsChauffeurData[0]

// ======================== fleet ================================
export const getfleetQuery = groq`*[_type == "fleet"]{
    heading,
    subheading,
    description,
    fleets
}`;

const fleetData = await sanityFetch<SanityDocument>({
    query: getfleetQuery
})
export const fleet = fleetData[0]