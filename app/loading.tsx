import Image from 'next/image'
export default function Loading() {
    return <div className="min-h-screen flex items-center justify-center"><Image src="/loader.gif" width={50} height={50} alt='supreme transfer'/></div>
}