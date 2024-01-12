import Image from "next/image";

export default function ImageBanner() {
    return (
        <div>
            <Image className="w-full h-auto" src='/banner0.png' width={1024} height={352} alt="banner" />
        </div>
    )
}