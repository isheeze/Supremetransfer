import { urlForImage } from "@sanity/lib/image"
import { fleet } from "@sanity/lib/queries"
import Image from "next/image"

export default function Fleet(props: any) {
    return (
        <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="py-24 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7" style={{color: props.themeColor}}>{fleet.subheading}</h2>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        {fleet.heading}
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        {fleet.description}
                        </p>
                    </div>
                    <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                        <div className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-16 lg:max-w-none lg:grid-cols-4 lg:gap-y-16">
                            {fleet.fleets.map((fleet: any, i: any) => (
                            <div key={i}>
                                <div className="ml-[10%] rounded-3xl shadow-[0px_15px_30px_rgba(0,0,0,0.3)] aspect-square w-2/3 flex items-center justify-center z-10 relative" style={{backgroundColor: props.themeColor}}>
                                    <Image className="absolute max-w-[130%] w-[130%]" src={urlForImage(fleet.image)} width={500} height={500} alt={fleet.name} />
                                </div>
                                <div className="bg-white rounded-3xl p-5 -mt-12 pt-16 shadow-[0px_15px_30px_rgba(0,0,0,0.2)] relative">
                                    <h3 className="mb-2 font-bold flex justify-between gap-x-2">
                                        <span>{fleet.name}</span>
                                    </h3>
                                    <div className="grid max-w-xl grid-cols-2 gap-x-1 gap-y-2 items-center">
                                        {fleet.properties?.map((feature: any) => (
                                            <div className="flex text-xs gap-1"><div dangerouslySetInnerHTML={{ __html: feature.icon.svg }} className="w-5" aria-hidden="true"/>{feature.property}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
  