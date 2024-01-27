const features = [
    { name: 'National Airports' },
    { name: 'National Destinations' },
    { name: 'Office to Office' },
    { name: 'Cruse Ports' },
    { name: 'Addresss to Address' },
    { name: 'Pleasure transport' }
]

import Image from 'next/image'

export default function Collage2() {
    return (
      <div className="relative overflow-hidden bg-white">
        <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
          <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
            <div className="sm:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Extensive Coverages</h2>
    
                <dl className="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8">
                {features.map((feature) => (
                    <div key={feature.name} className="border-t border-gray-200 pt-4">
                    <dt className="font-medium text-gray-900">{feature.name}</dt>
                    </div>
                ))}
                </dl>
            </div>
            <div>
              <div className="mt-10">
                {/* Decorative image grid */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
                >
                  <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/3 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                    <div className="flex items-center space-x-6 lg:space-x-8">
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-64 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                          <Image
                            src="/c1.jpeg"
                            alt=""
                            width={300}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-64 overflow-hidden rounded-lg">
                          <Image
                            src="/c2.jpeg"
                            alt=""
                            width={300}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-64 overflow-hidden rounded-lg">
                          <Image
                            src="/c3.jpeg"
                            alt=""
                            width={300}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-64 overflow-hidden rounded-lg">
                          <Image
                            src="/c4.jpeg"
                            alt=""
                            width={300}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-64 overflow-hidden rounded-lg">
                          <Image
                            src="/c5.jpeg"
                            alt=""
                            width={300}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                      <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                        <div className="h-44 w-64 overflow-hidden rounded-lg">
                          <Image
                            src="/collage6.jpeg"
                            alt=""
                            width={300}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                        <div className="h-44 w-64 overflow-hidden rounded-lg">
                          <Image
                            src="/c6.jpeg"
                            alt=""
                            width={300}
                            height={500}
                            className="h-full w-full object-cover object-center"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  