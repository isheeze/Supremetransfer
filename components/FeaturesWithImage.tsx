import { urlForImage } from "@sanity/lib/image"
import { featureWithImage } from "@sanity/lib/queries"
import Image from "next/image"

export default function FeatureWithImage(props: any) {
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-2xl font-semibold leading-7 text-center" style={{color: props.themeColor}}>{featureWithImage.subtitle}</h2>
      <h2 className="mt-2 mb-16 text-7xl font-bold tracking-tight text-gray-900 sm:text-7xl text-center">{featureWithImage.title}</h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {featureWithImage.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {featureWithImage.points.map((feature: any) => (
                  <div key={feature.title} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <div dangerouslySetInnerHTML={{ __html: feature.icon.svg }} className="absolute left-1 top-1 h-5 w-5" aria-hidden="true" style={{color: props.themeColor}}/>
                      {feature.title}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            src={urlForImage(featureWithImage.image)}
            alt="Product"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
      </div>
    </div>
  )
}
