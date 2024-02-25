import { urlForImage } from '@sanity/lib/image'
import { carsSection } from '@sanity/lib/queries'
import Image from 'next/image'


export default function CarsSection(props: any) {
    return(
        <div className='flex mx-auto justify-between'>
            <div><Image className="scale-x-[-1]" src={urlForImage(carsSection.CarsSection.image1)} width={500} height={500} alt="Supreme transfer"/></div>
            <div><Image src={urlForImage(carsSection.CarsSection.image2)} width={500} height={500} alt="Supreme transfer"/></div>
        </div>
    )
}