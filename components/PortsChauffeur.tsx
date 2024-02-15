const features = [
    { description: <><span className="font-medium text-gray-900">Instant quote</span> with an effortless process using our booking tool</> },
    { description: <><span className="font-medium text-gray-900">No Waiting Charges</span> if flight is delayed, <span className="font-medium text-gray-900">We Monitor All Flights.</span></> },
    { description: <><span className="font-medium text-gray-900">24/7 Customer Service</span>: WhatsApp/Call +442080732199 web chat/email.</> },
    { description: <>Fixed prices - <span className="font-medium text-gray-900">No Hidden Charges.</span></> },
    { description: <>Modern, clean & comfortable cars, with latest GPS technology.</> },
    { description: <>Polite & helpful drivers - safe, reliable & secure journey.</> },
  ]
  
  export default function PortsChauffeur() {
    return (
      <div className="bg-white">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:grid-cols-2 lg:px-8">
          <div>
            <h2 className="text-2xl font-semibold leading-7 text-indigo-600">Airport Transfer</h2>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Up to 50% Lower Prices than Other Airport Transfers</h2>
  
            <dl className="mt-10 grid grid-cols-1">
              {features.map((feature,i) => (
                <div key={i} className="border-t border-gray-200 py-4">
                  <dd className="text-sm text-gray-500">{feature.description}</dd>
                </div>
              ))}
              <div className="border-t border-gray-200 py-4"></div>
            </dl>
          </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8">
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
              alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
              alt="Top down view of walnut card tray with embedded magnets and card groove."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
              alt="Side of walnut card tray with card groove and recessed card area."
              className="rounded-lg bg-gray-100"
            />
            <img
              src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
              alt="Walnut card tray filled with cards and card angled in dedicated groove."
              className="rounded-lg bg-gray-100"
            />
          </div>
        </div>
      </div>
    )
  }
  