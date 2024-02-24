import Image from "next/image"
import { imageBanner } from "@sanity/lib/queries"
import { urlForImage } from "@sanity/lib/image"

export default function ImageBanner() {
    return (
        <div className="relative">
            <Image className="w-full h-auto" src={urlForImage(imageBanner.imageBanner)} width={2824} height={952} alt="banner" />
            <div className="absolute top-0 w-full h-full" style={{ background: 'linear-gradient(180deg, rgba(102,102,102,1) 0%, rgba(255,255,255,0) 9%, rgba(255,255,255,0) 100%)'}}></div>
        </div>
    )
}