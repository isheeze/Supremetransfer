import Image from "next/image"
import { imageBanner } from "@sanity/lib/queries"
import { urlForImage } from "@sanity/lib/image"

export default function ImageBanner() {
    return (
        <div>
            <Image className="w-full h-auto" src={urlForImage(imageBanner.imageBanner)} width={2824} height={952} alt="banner" />
        </div>
    )
}