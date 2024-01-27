import Image from "next/image";

export default function ImageBanner() {
    return (
        <div>
            <Image className="w-full h-auto" src='/2.jpg' width={2824} height={952} alt="banner" />
        </div>
    )
}