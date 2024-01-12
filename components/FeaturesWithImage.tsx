import { FEATURES_WITH_IMAGES } from "@constants"
import { FEATURES_WITH_IMAGES_CONTENT } from "@constants"

export default function FeatureWithImage() {
  return (
    <div className="overflow-hidden bg-white py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <h2 className="text-2xl font-semibold leading-7 text-indigo-600 text-center">{FEATURES_WITH_IMAGES_CONTENT.title}</h2>
      <h2 className="mt-2 mb-16 text-7xl font-bold tracking-tight text-gray-900 sm:text-7xl text-center">{FEATURES_WITH_IMAGES_CONTENT.heading}</h2>
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <p className="mt-6 text-lg leading-8 text-gray-600">
                {FEATURES_WITH_IMAGES_CONTENT.description}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {FEATURES_WITH_IMAGES.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src={FEATURES_WITH_IMAGES_CONTENT.image}
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
