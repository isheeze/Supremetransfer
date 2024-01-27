import { UserGroupIcon, GlobeAsiaAustraliaIcon, UserCircleIcon } from '@heroicons/react/20/solid'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'

export default function About() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">Here is</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Who we are</h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Supreme Transfer is a leading passenger transport Service Company we continuously provide our customers with an unbeatable and reliable Minicab service 24/7.We provide services on all major airport such as Gatwick, Heathrow, Stansted, Luton, and London City Airport, South end Airport and Cruise Ports such as Southampton, Portsmouth, Dover, Tilbury, and Harwich with Meet & Greet Service to and from London.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[80vh] object-cover"
            src="/About.jpeg"
            alt="about"
            width={2000}
            height={2000}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Why hire Supreme Transfer</h2>
              <p className='mt-8'>
                Before booking a journey with Supreme Transfer, you may think why choose us. The simple answer for this comes that we are specialized for Airport Transfers and all types of long and short distance journeys and connecting flights. If you are looking for Supreme Transfer, all you need to do is to book our Supreme Transfer Minicab and before you land at the airport; our driver will meet you an Arrival hall with your name board and will pick you up from there instantly. We will surely give you the value of your money by our services for all that you love for your ease.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <UserGroupIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Group transfer</strong> We provide services for group transport to choose multiple vehicles up to 16 passengers and we will arrange as per you requirement. If you are More than 16 passengers, we have an option for Mini Coach up to 29 Passengers and Coaches for your need up to 49 Passengers. All of our vehicles are PCO Licensed and Insured.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <GlobeAsiaAustraliaIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Tourism</strong> Supreme Transfer specializes in London Sightseeing and UK tourism. Providing comfortable and quality London tours, day trips to all incredible tourist destinations and spots in England, such as Windsor Castle, Harry Porter, Stonehenge, Bath, Oxford, and Bicester Village, Book one of the Minicab with our experienced driver and discover the marvelous history and beauty of the United Kingdom and beyond.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <UserCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-semibold text-gray-900">Our drivers</strong> All of our drivers are well trained, expert in navigation and PCO License Holders with a minimum of 3-year experience of driving in London. All of our drivers are polite well-spoken and Insured.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-12 mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="-mr-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-1 lg:row-span-2 lg:row-start-1 lg:overflow-hidden flex justify-end">
          <Image
            className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] h-[80vh] object-cover"
            src="/About.jpeg"
            alt="about"
            width={2000}
            height={2000}
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-2 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Our fleet</h2>
              <p className='mt-8'>
                Supreme Transfer provides Executive and Luxury transfers to and from anywhere in London and we have a wide range of Executive vehicles. Our fleet includes Mercedes E Class, BMW 5 Series. Mercedes Vito, Mercedes Viano, Mercedes V Class, Lexus, and many more Luxury vehicles. All you need to do is select one of our executive vehicles while booking and enjoy the most comfortable journey. All of our vehicles are PCO Licensed and Insured. Our fleet of Minicabs include Executive (Mercedes E Class, BMW 5 Series, Saloon (Toyota Prius), Estate (Vauxhall Astra) MPV-5 (Citroen C4 Picasso, Vauxhall Zafira,), MPV-6 (Ford Galaxy), MPV-7 (I Hyundai 800), MPV-8 (Renault Traffic,), Extra Large MPV-8 (Mercedes-Benz Traveliner, Transporter) MPV-7 Executive (Mercedes Viano).
              </p>
              <h2 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">UK airport rides services</h2>
              <ul role="list" className="mt-8 space-y-2 text-gray-600">
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-normal text-gray-900">Free waiting time 1 hour after flight landing.</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-normal text-gray-900">Latest, clean & comfortable cars, with the latest GPS technology.</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-normal text-gray-900">We monitor all flights. So, no waiting charges if the flight is delayed</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-normal text-gray-900">Our operators are available 24/7 customer service by web chat, email, telephone and WhatsApp.</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-normal text-gray-900">Fixed Fares - no hidden charges.</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-normal text-gray-900">Free meet & greet - On-time pick up guaranteed.</strong>
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <ArrowRightCircleIcon className="h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
                  <span>
                    <strong className="font-normal text-gray-900">Professional & helpful drivers for a safe, reliable & secure journey.</strong>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  )
}
