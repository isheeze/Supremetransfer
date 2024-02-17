import { urlForImage } from "@sanity/lib/image";
import { airportTransfer } from "@sanity/lib/queries";
import Image from "next/image";

export default function AirportTransfer() {
  return (
    <div className="bg-white">
      <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 pt-24 sm:px-6 sm:pt-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold leading-7 text-indigo-600">{airportTransfer.subheading}</h2>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{airportTransfer.heading}</h2>

          <dl className="mt-10 grid grid-cols-1">
            {airportTransfer.points.map((point: any,i:any) => (
              <div key={i} className="border-t border-gray-200 py-4">
                <dd className="text-sm text-gray-500">{point.description}</dd>
              </div>
            ))}
            <div className="border-t border-gray-200 py-4"></div>
          </dl>
        </div>
        <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
        <Image
            src={urlForImage(airportTransfer.images.image1)}
            alt={airportTransfer.heading}
            width={200}
            height={200}
            className="rounded-lg bg-gray-100 w-full aspect-square object-cover"
          />
          <Image
            src={urlForImage(airportTransfer.images.image2)}
            alt={airportTransfer.heading}
            width={200}
            height={200}
            className="rounded-lg bg-gray-100 w-full aspect-square object-cover"
          />
          <Image
            src={urlForImage(airportTransfer.images.image3)}
            alt={airportTransfer.heading}
            width={200}
            height={200}
            className="rounded-lg bg-gray-100 w-full aspect-square object-cover"
          />
          <Image
            src={urlForImage(airportTransfer.images.image4)}
            alt={airportTransfer.heading}
            width={200}
            height={200}
            className="rounded-lg bg-gray-100 w-full aspect-square object-cover"
          />
        </div>
      </div>

      <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
        {airportTransfer.sections.map((section: any, i: any) => (
          <div  key={i}>
            {!section.leftimage && 
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-indigo-600">{section.subheading}</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{section.heading}</h1>
                    {section.descriptions && section.descriptions.map((desc: any, i: any) => ( <p key={i} className="mt-6 text-xl leading-8 text-gray-700">
                      {desc.description}
                    </p>))}
                  </div>
                </div>
              </div>
              <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex">
                <Image
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[80vh] object-cover"
                  src={urlForImage(section.image)}
                  alt={airportTransfer.heading}
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="mb-8 max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  {section.blocks.map((textBlock: any, i: any) => (
                    <div key={i}>
                      <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">{textBlock.heading}</h2>
                      {textBlock.descriptions && textBlock.descriptions.map((desc: any, i: any) => ( <p key={i} className='mt-8'>
                        {desc.description}
                      </p>))}
                    </div>
                  ))}
                    {section.points && <ul role="list" className="mt-8 text-gray-600">
                    {section.points.map((point: any, i: any) => (
                      <li className="flex" key={i}  style={{marginTop: `${section.gap}px`}}>
                        <div dangerouslySetInnerHTML={{ __html: point.icon.svg }} className="mt-1 h-5 w-5 mr-1 flex-none text-indigo-600 icons-container" aria-hidden="true"/>
                        <span>
                          <strong className="font-semibold text-gray-900">{point.heading} </strong>
                          {point.descriptions && point.descriptions.map((desc: any, i: any) => (
                          <p key={i} className={(i != 0 ? 'mt-2' : '')}>
                            {desc.description}
                          </p>))}
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
              <div className="lg:col-span-2 lg:col-start-2 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="lg:max-w-lg">
                    <p className="text-base font-semibold leading-7 text-indigo-600">{section.subheading}</p>
                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{section.heading}</h1>
                    {section.descriptions && section.descriptions.map((desc: any, i: any) => ( <p key={i} className="mt-6 text-xl leading-8 text-gray-700">
                      {desc.description}
                    </p>))}
                  </div>
                </div>
              </div>
              <div className="-mr-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-end">
                <Image
                  className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[80vh] object-cover"
                  src={urlForImage(section.image)}
                  alt={airportTransfer.heading}
                  width={2000}
                  height={2000}
                />
              </div>
              <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
                <div className="lg:pr-4">
                  <div className="mb-8 max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
                  {section.blocks.map((textBlock: any, i: any) => (
                    <div key={i}>
                      <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">{textBlock.heading}</h2>
                      {textBlock.descriptions && textBlock.descriptions.map((desc: any, i: any) => ( <p key={i} className='mt-8'>
                        {desc.description}
                      </p>))}
                    </div>
                  ))}
                  {section.points && <ul role="list" className="mt-8 text-gray-600">
                    {section.points.map((point: any, i: any) => (
                      <li className="flex" key={i}  style={{marginTop: `${section.gap}px`}}>
                        <div dangerouslySetInnerHTML={{ __html: point.icon.svg }} className="mt-1 h-5 w-5 mr-1 flex-none text-indigo-600 icons-container" aria-hidden="true"/>
                        <span>
                          <strong className="font-semibold text-gray-900">{point.heading} </strong>
                          {point.descriptions && point.descriptions.map((desc: any, i: any) => (
                          <p key={i} className='mt-4'>
                            {desc.description}
                          </p>))}
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
    </div>
  )
}
