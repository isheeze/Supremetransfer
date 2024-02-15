import { LOGO_SRC, FOOTER_MENU } from '@constants'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="p-4 sm:p-6 dark:bg-gray-900 overflow-hidden bg-[url('https://tailwindcss.com/_next/static/media/hero-dark@90.dba36cdf.jpg')] bg-cover footer">
            <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-16 lg:px-8">
                <div className="relative isolate">
                    <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0">
                            <Link href="/" className="flex items-center -mt-5">
                                <Image src={ LOGO_SRC }
                                    className="mr-3"
                                    alt="Supreme Transfer Logo"
                                    width={64}
                                    height={64} />
                                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Supreme Transfer</span>
                            </Link>
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            {FOOTER_MENU.map((item) => (
                                <div key={item.title}>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">{item.title}</h2>
                                <ul className="text-gray-600 dark:text-gray-400">
                                    {item.links.map((link) => (
                                        <li className="mb-3" key={link.name}>
                                            <Link key={link.name} href={link.href} className="hover:underline">
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link href="/" className="hover:underline">Supreme Transfer</Link>. All Rights Reserved.
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M 2.3671875 3 L 9.4628906 13.140625 L 2.7402344 21 L 5.3808594 21 L 10.644531 14.830078 L 14.960938 21 L 21.871094 21 L 14.449219 10.375 L 20.740234 3 L 18.140625 3 L 13.271484 8.6875 L 9.2988281 3 L 2.3671875 3 z M 6.2070312 5 L 8.2558594 5 L 18.033203 19 L 16.001953 19 L 6.2070312 5 z"/></svg>
                            </Link>
                            <Link href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 256 256" aria-hidden="true"><g><g><path fill="#000000" d="M128,10C62.8,10,10,62.8,10,128c0,65.2,52.8,118,118,118c65.2,0,118-52.8,118-118C246,62.8,193.2,10,128,10z M99.1,176.9H75.2V100h23.9V176.9z M87,90.6c-7.5,0-12.4-5.3-12.4-12c0-6.7,5-11.9,12.7-11.9s12.4,5.2,12.6,11.9C99.9,85.2,95,90.6,87,90.6z M186.4,176.9h-23.9v-42.6c0-9.9-3.5-16.7-12.1-16.7c-6.6,0-10.5,4.6-12.3,9c-0.6,1.6-0.8,3.8-0.8,6v44.3h-23.9v-52.4c0-9.6-0.3-17.6-0.6-24.5h20.8l1.1,10.7h0.5c3.2-5,10.9-12.4,23.7-12.4c15.7,0,27.5,10.5,27.5,33.2L186.4,176.9L186.4,176.9z"/></g></g></svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </footer>
    )
}