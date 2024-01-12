import { FLEETS } from "@constants"
import Image from "next/image";

export default function Fleet() {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <svg
                className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
                aria-hidden="true"
                >
                <defs>
                    <pattern
                    id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                    width={200}
                    height={200}
                    x="50%"
                    y={-1}
                    patternUnits="userSpaceOnUse"
                    >
                    <path d="M100 200V.5M.5 .5H200" fill="none" />
                    </pattern>
                </defs>
                <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                    <path
                    d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                    strokeWidth={0}
                    />
                </svg>
                <rect width="100%" height="100%" strokeWidth={0} fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" />
                </svg>
            </div>
            <div className="py-24 sm:py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center">
                        <h2 className="text-base font-semibold leading-7 text-indigo-600">Enjoy a memoriable journey on</h2>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        OUR FLEET
                        </p>
                        <p className="mt-6 text-lg leading-8 text-gray-600">
                        Supreme Transfer is one of the Best Executive Luxury Chauffeur driven car service in London
                        </p>
                    </div>
                    <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
                        <div className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-4 lg:gap-y-10">
                            {FLEETS.map((fleet) => (
                            <div key={fleet.img}>
                                <div className="ml-[10%] bg-indigo-600 rounded-3xl shadow-[0px_15px_30px_rgba(0,0,0,0.3)] aspect-square w-2/3 flex items-center justify-center z-10 relative">
                                    <Image className="max-w-[130%]" src={fleet.img} width={500} height={500} alt="name" />
                                </div>
                                <div className="bg-white rounded-3xl p-5 -mt-12 pt-16 shadow-[0px_15px_30px_rgba(0,0,0,0.2)]">
                                    <h3 className="mb-2 font-bold">{fleet.name}</h3>
                                    <div className="grid max-w-xl grid-cols-2 gap-x-1 gap-y-2 items-center">
                                        {fleet.features?.map((feature) => (
                                            <div className="flex text-sm gap-1"><feature.icon className="w-5"/>{feature.title}</div>
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
  