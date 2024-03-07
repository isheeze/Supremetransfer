import { UserGroupIcon, GlobeAsiaAustraliaIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import { urlForImage } from '@sanity/lib/image'
import { about } from '@sanity/lib/queries'
import Image from 'next/image'

export default function About(props: any) {
  
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      {about.sections.map((section: any, i: any) => (
        <div key={i}>
          {!section.leftimage && 
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7" style={{ color: props.themeColor }}>{section.subheading}</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{section.heading}</h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex">
              <Image
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[80vh] object-cover"
                src={urlForImage(section.image)}
                alt="about"
                width={2000}
                height={2000}
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                {section.blocks.map((textBlock: any, i: any) => (
                  <div key={i}>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{textBlock.heading}</h2>
                    <p className='mt-8'>
                      {textBlock.description}
                    </p>
                  </div>
                ))}
                  {section.points && <ul role="list" className="mt-8 text-gray-600">
                  {section.points.map((point: any, i: any) => (
                    <li className="flex" key={i}  style={{marginTop: `${section.gap}px`}}>
                      <div dangerouslySetInnerHTML={{ __html: point.icon.svg }} className="mt-1 h-5 w-5 mr-1 flex-none icons-container" aria-hidden="true" style={{ color: props.themeColor }}/>
                      <span>
                        <strong className="font-semibold text-gray-900">{point.heading} </strong> {point.description}
                      </span>
                    </li>
                  ))}
                  </ul>}
                </div>
              </div>
            </div>
          </div>}
          {section.leftimage && 
          <div className="mt-12 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg">
                  <p className="text-base font-semibold leading-7" style={{ color: props.themeColor }}>{section.subheading}</p>
                  <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{section.heading}</h1>
                  <p className="mt-6 text-xl leading-8 text-gray-700">
                    {section.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="-mr-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-end">
              <Image
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[80vh] object-cover"
                src={urlForImage(section.image)}
                alt="about"
                width={2000}
                height={2000}
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                {section.blocks.map((textBlock: any, i: any) => (
                  <div key={i}>
                    <h2 className="text-2xl font-bold tracking-tight text-gray-900">{textBlock.heading}</h2>
                    <p className='mt-8'>
                      {textBlock.description}
                    </p>
                  </div>
                ))}
                  {section.points && <ul role="list" className="mt-8 text-gray-600">
                  {section.points.map((point: any, i: any) => (
                    <li className="flex" key={i}  style={{marginTop: `${section.gap}px`}}>
                      <div dangerouslySetInnerHTML={{ __html: point.icon.svg }} className="mt-1 h-5 w-5 mr-1 flex-none icons-container" aria-hidden="true" style={{ color: props.themeColor }}/>
                      <span>
                        <strong className="font-semibold text-gray-900">{point.heading} </strong> {point.description}
                      </span>
                    </li>
                  ))}
                  </ul>}
                </div>
              </div>
            </div>
          </div>}
        </div>
      ))}
    </div>
  )
}
