import { features } from "@sanity/lib/queries"

export default function Features() {
  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">{features.subtitle}</h2>
          <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            {features.title}
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            {features.description}
          </p>
        </div>
        <div className="mx-auto mt-16 sm:mt-20 lg:mt-24">
          <dl className="grid max-w-xl grid-cols-1 gap-x-10 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-10">
            {features.points.map((feature) => (
              <div key={feature.title} className="relative text-justify">
                <dt className="text-base font-semibold leading-7 text-gray-900 text-center">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 mx-auto mb-2">
                    <div dangerouslySetInnerHTML={{ __html: feature.icon.svg }} className="h-6 w-6 text-white features-icons-containers" aria-hidden="true"/>
                  </div>
                  {feature.title}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
