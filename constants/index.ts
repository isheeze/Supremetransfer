// this is for header
export const NAVIGATION = [
    { name: 'Home', href: '/', submenu: [] },
    { name: 'About', href: '/about', submenu: [] },
    { name: 'Services', href: '#', submenu: [
      { name: 'Airport Transfer', href: '/airport-transfer' },
      { name: 'Ports Chauffeur', href: '#' }
    ] },
    { name: 'Fleet', href: '/fleet', submenu: [] },
    { name: 'Contact', href: '/contact', submenu: [] },
    { name: 'Driver', href: '#', submenu: [] },
]
// social Media
export const PHONE = "+442080732199"
export const WHATSAPP_LINK = `https://wa.me/${PHONE}`
export const PHONE_LINK = `tel:${PHONE}`

export const MAIL = "info@supremetransfer.co.uk"
export const MAIL_LINK = `mailto:${MAIL}`

// Everywhere
export const LOGO_SRC = '/logo.png'

// FeaturesWithImage component
import { FlagIcon, RectangleGroupIcon, SparklesIcon } from '@heroicons/react/20/solid'
export const FEATURES_WITH_IMAGES = [
    {
      name: 'Our Priority.',
      description:
        'Your safety and reliability are our top priorities. We provide high-quality, professional services with a focus on punctuality. All our airport transfers are guaranteed for on-time pickups.',
      icon: FlagIcon,
    },
    {
      name: 'Instant Free Quotes.',
      description: 'Get a free quote in seconds! We pride ourselves on offering the best rates in the market.',
      icon: RectangleGroupIcon,
    },
    {
      name: 'Exciting Offers.',
      description: 'Join Supreme Transfer loyalty for a FREE journey and many more benefits.',
      icon: SparklesIcon,
    },
]

export const FEATURES_WITH_IMAGES_CONTENT = {
  title: 'Welcome to',
  heading: 'Supreme Transfer',
  description: 'At Supreme Transfers, we redefine your travel experience, setting the standard for excellence in transportation services across the United Kingdom.',
  image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
}

// Features component
import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
export const FEATURES = [
  {
    name: 'ACHIEVEMENTS',
    description: 'We are continuous 5 Star award winners, for the last 7 years; from Licensed Private Hire Car Association (www.lphca.co.uk) and our customer satisfaction is more than 90% ( read our customer reviews).',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'CHILD SEAT',
    description: 'Concerning the safety of children we do provide FREE Child seats on MPV-5, MPV7 & MPV-8 vehicles. You must request on the booking. We provide 3 types of child seats Which are Infant seat 10-13KG 6-15 months, Child seat 9-18KG 9 months to 4 years & booster seat 15/25KG 4-11Years.',
    icon: LockClosedIcon,
  },
  {
    name: 'CHANGES IN FLIGHT LANDING TIME',
    description: 'Supreme transfer monitors flight landing times. No additional charge for any flight delays. Your requested time will be adjusted accordingly, if your flight is delayed or early. If you need more time for baggage reclaim, immigration etc, it can be requested in the Supreme Transfer booking form (e.g. meet the driver in 15, 30, 45, 60, 90 minutes from the flight landing time).',
    icon: ArrowPathIcon,
  },
  {
    name: 'SERVICES',
    description: 'Mini-cabs/chauffeur service to and from train/tube stations, hotels, houses, university residents/halls, airports, cruise ports, and major UK cities.',
    icon: FingerPrintIcon,
  },
  {
    name: 'GUARANTEED PICKUPS',
    description: 'We have introduce the new benefit called GUARANTEED, so that our loyal customers can rest at ease knowing that Supreme. Transfer guarantees that we will be there for all their airport transportation needs read more at loyalty benefits۔',
    icon: FingerPrintIcon,
  },
  {
    name: 'LICENCE',
    description: 'England Transfers is licensed by Transfer for London private hire, licensed number 0000. For more details about Transport For London (TFL) please visit www.tfl.gov.uk.',
    icon: FingerPrintIcon,
  },
]
export const FEATURES_CONTENT = {
  title: 'Why Choose',
  heading: 'Supreme Transfer',
  description: "Whether you're a solo traveler, a family, or a group, our services are tailored to meet your unique requirements. Enjoy personalized attention and customized solutions for a hassle-free experience."
}

// Testimonial component
export const REVIEWS = [
    {
      name: 'Paul Starr',
      profession: 'Profession',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, rerum. Nobis laborum praesentium necessitatibus vero.',
      image: '/reviews.avif',
    },
    {
        name: 'Paul Starr',
        profession: 'Profession',
        description:
          'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad mollitia rerum quo unde neque atque molestias quas pariatur! Sint, maxime?',
        image: '/reviews.avif',
    },
    {
        name: 'Paul Starr',
        profession: 'Profession',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur hic delectus maxime.',
        image: '/reviews.avif',
    },
    {
        name: 'Paul Starr',
        profession: 'Profession',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga?',
        image: '/reviews.avif',
    },
    {
        name: 'Paul Starr',
        profession: 'Profession',
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate officia natus blanditiis rerum incidunt ex autem repudiandae doloribus eveniet quia? Culpa commodi quae atque perspiciatis? Provident.',
        image: '/reviews.avif',
    },
    {
        name: 'Paul Starr',
        profession: 'Profession',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur hic delectus maxime.',
        image: '/reviews.avif',
    },
    {
        name: 'Paul Starr',
        profession: 'Profession',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur hic delectus maxime.',
        image: '/reviews.avif',
    },
    {
        name: 'Paul Starr',
        profession: 'Profession',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit esse delectus, maiores fugit, reiciendis culpa inventore sint accusantium libero dolore eos quasi a ex aliquam molestiae. Tenetur hic delectus maxime.',
        image: '/reviews.avif',
    }
]

// this is for footer
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'
export const FOOTER_MENU = [
  { 
    title: 'Legal',
    links: [
      {
        name: 'Privacy Policy', href: '#'
      },
      {
        name: 'Terms & Conditions', href: '#'
      }
    ]
  },
  { 
    title: 'Useful Links',
    links: [
      {
        name: 'New Member Registration', href: '#'
      },
      {
        name: 'Affiliate Programme', href: '#'
      },
      {
        name: 'Return & Refund', href: '#'
      },
      {
        name: 'Help & FAQs', href: '#'
      }
    ]
  },
  { 
    title: 'Get In Touch',
    links: [
      {
        name: PHONE, href: PHONE_LINK
      },
      {
        name: MAIL, href: MAIL_LINK
      }
    ]
  }
]

// Fleet
import { UsersIcon, WifiIcon, BriefcaseIcon, ShoppingBagIcon, CheckCircleIcon } from '@heroicons/react/24/outline'
export const FLEETS = [
  { 
    name: 'Saloon',
    img: '/fleet1.png',
    features: [
      {
        icon: UsersIcon, title: '4 Passengers'
      },
      {
        icon: ShoppingBagIcon, title: '2 Suitcases'
      },
      {
        icon: BriefcaseIcon, title: '2 Cabin Size Cases'
      }
    ]
  },
  { 
    name: 'Estate',
    img: '/fleet2.png',
    features: [
      {
        icon: UsersIcon, title: '4 Passengers'
      },
      {
        icon: ShoppingBagIcon, title: '2 Suitcases'
      },
      {
        icon: BriefcaseIcon, title: '3 Cabin Size Cases'
      }
    ]
  },
  { 
    name: 'Executive Saloon',
    img: '/fleet3.png',
    features: [
      {
        icon: UsersIcon, title: '3 Passengers'
      },
      {
        icon: ShoppingBagIcon, title: '1 Suitcases'
      },
      {
        icon: BriefcaseIcon, title: '2 Cabin Size Cases'
      },
      {
        icon: CheckCircleIcon, title: 'Water'
      },
      {
        icon: WifiIcon, title: 'Wifi'
      }
    ]
  },
  { 
    name: 'MPV5',
    img: '/fleet4.png',
    features: [
      {
        icon: UsersIcon, title: '5 Passengers'
      },
      {
        icon: ShoppingBagIcon, title: '2 Suitcases'
      },
      {
        icon: BriefcaseIcon, title: '2 Cabin Size Cases'
      }
    ]
  },
  { 
    name: 'MPV6',
    img: '/fleet5.png',
    features: [
      {
        icon: UsersIcon, title: '5 Passengers'
      },
      {
        icon: ShoppingBagIcon, title: '3 Suitcases'
      },
      {
        icon: BriefcaseIcon, title: '3 Cabin Size Cases'
      }
    ]
  },
  { 
    name: 'MPV7',
    img: '/fleet6.png',
    features: [
      {
        icon: UsersIcon, title: '6 Passengers'
      },
      {
        icon: ShoppingBagIcon, title: '4 Suitcases'
      },
      {
        icon: BriefcaseIcon, title: '4 Cabin Size Cases'
      }
    ]
  },
  { 
    name: 'MPV8',
    img: '/fleet7.png',
    features: [
      {
        icon: UsersIcon, title: '7 Passengers'
      },
      {
        icon: ShoppingBagIcon, title: '5 Suitcases'
      },
      {
        icon: BriefcaseIcon, title: '5 Cabin Size Cases'
      }
    ]
  },
  { 
    name: 'Executive MPV8',
    img: '/fleet8.png',
    features: [
      {
        icon: UsersIcon, title: '5 Passengers'
      },
      {
        icon: ShoppingBagIcon, title: '4 Suitcases'
      },
      {
        icon: BriefcaseIcon, title: '5 Cabin Size Cases'
      },
      {
        icon: CheckCircleIcon, title: 'Water'
      },
      {
        icon: WifiIcon, title: 'Wifi'
      }
    ]
  },
  { 
    name: 'limousine category',
    img: '/fleet9.png'
  },
  { 
    name: 'limousine category',
    img: '/fleet10.png'
  },
  { 
    name: 'Supreme Luxury',
    img: '/fleet11.png'
  },
  { 
    name: 'Luxury Saloon S-Class',
    img: '/fleet12.png'
  },
  { 
    name: 'Luxury Saloon',
    img: '/fleet13.png'
  },
  { 
    name: 'Luxury Services Mercedes S',
    img: '/fleet14.png'
  },
  { 
    name: 'Luxury XL',
    img: '/fleet15.png'
  },
  { 
    name: 'Executive Estate',
    img: '/fleet16.png'
  }
  
]