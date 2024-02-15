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
    menu
}`;

const headerData = await sanityFetch<SanityDocument>({
    query: getHeaderDataQuery,
})
export const header = headerData[0]

// ======================== Home ================================
export const getImageBannerQuery = groq`*[_type == "home"]{
    imageBanner
}`;

const ImageBannerData = await sanityFetch<SanityDocument>({
    query: getImageBannerQuery,
})
export const imageBanner = ImageBannerData[0]
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