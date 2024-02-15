'use client'

import { Bars3Icon, ChevronDownIcon, XMarkIcon, PhoneIcon } from '@heroicons/react/24/outline'
import { Dialog, Popover, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Link from 'next/link'

import React, { useEffect } from 'react';
import { sanityFetch } from '@sanity/lib/sanityFetch'
import { groq } from 'next-sanity'
import { SanityDocument } from 'next-sanity'

import { urlForImage } from '@sanity/lib/image'
import Image from 'next/image'
const Nav = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [theme, setTheme] = useState<SanityDocument>()
    const [header, setHeader] = useState<SanityDocument>()
    
    useEffect(() => {
      const fetchThemeData = async () => {
        try {
          const getThemeDataQuery = groq`*[_type == "theme"]{
            websiteName,
            websiteDescription,
            logo,
            favicon,
            socialLinks,
          }`;

          const themeData = await sanityFetch<SanityDocument>({
            query: getThemeDataQuery,
          });

          setTheme(themeData[0]);

          const getHeaderDataQuery = groq`*[_type == "header"]{
              menuColor,
              phoneBG,
              phoneColor,
              menu
          }`;
          
          const headerData = await sanityFetch<SanityDocument>({
              query: getHeaderDataQuery,
          })

          setHeader(headerData[0]);
        } catch (error) {
          console.error('Error fetching theme data:', error);
        }
      };

      fetchThemeData();
    }, []);

    if (!theme || !header) {
      return <div></div>;
    }

    return(
      <section className='relative nav'>
        <header className="max-w-7xl mx-auto absolute inset-x-0 top-0 z-50">
          <nav className="flex items-center justify-between px-6 py-2 lg:px-8" aria-label="Global">
            <div className="flex lg:flex-1">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">{theme.websiteName}</span>
                <Image
                  className="h-16 w-auto"
                  src={ urlForImage(theme.logo) }
                  alt={theme.websiteName}
                  width={64}
                  height={64}
                />
              </Link>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                onClick={() => setMobileMenuOpen(true)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="hidden lg:flex lg:gap-x-12">
              {header.menu?.map((item: any) => (
                <div key={item.label}>
                  {item.submenu?.length == undefined && <Link href={item.url} className="text-sm font-semibold leading-6 text-black" style={{color: header.menuColor}}>
                    {item.label}
                  </Link>}
                  {item.submenu?.length && <Popover className="relative">
                    <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900" style={{color: header.menuColor}}>
                      {item.label}
                      <ChevronDownIcon className="h-5 w-5 flex-none text-gray-900" aria-hidden="true"  style={{color: header.menuColor}}/>
                    </Popover.Button>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-200"
                      enterFrom="opacity-0 translate-y-1"
                      enterTo="opacity-100 translate-y-0"
                      leave="transition ease-in duration-150"
                      leaveFrom="opacity-100 translate-y-0"
                      leaveTo="opacity-0 translate-y-1"
                    >
                      <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-sm overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                        <div className="p-4">
                          {item.submenu?.map((subitem: any) => (
                            <div
                              key={subitem.label}
                              className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm leading-6 hover:bg-gray-50"
                            >
                              <div className="flex-auto">
                                <a href={subitem.url} className="block font-semibold text-gray-900">
                                  {subitem.label}
                                  <span className="absolute inset-0" />
                                </a>
                              </div>
                            </div>
                          ))}
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </Popover>}
                </div>
              ))}
            </div>
            <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-2">
              <Link href={`tel:${theme.socialLinks.phone}`} className="flex items-center gap-2 rounded-full  px-3.5 py-1 text-sm font-semibold  shadow-sm hover:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 text-white bg-gray-900" style={{backgroundColor: header.phoneBG, color: header.phoneColor}}>
                <PhoneIcon className="h-4 w-4" />{ theme.socialLinks.phone }
              </Link>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="/" className="-m-1.5 p-1.5">
                  <span className="sr-only">{theme.websiteName}</span>
                  <Image
                    className="h-8 w-auto"
                    src={ urlForImage(theme.logo) }
                    alt={theme.websiteName}
                    width={30}
                    height={30}
                  />
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {header.menu?.map((item: any) => (
                      <Link
                        key={item.label}
                        href={item.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                      >
                        {item.label}
                        {item.submenu?.length != 0 && <div>
                          {item.submenu?.map((subitem: any) => (
                            <Link
                            key={subitem.label}
                            href={subitem.url}
                            onClick={() => setMobileMenuOpen(false)}
                            className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            >
                              {subitem.label}
                            </Link>
                          ))}
                        </div>
                        }
                      </Link>
                    ))}
                  </div>
                  <div className="py-6">
                    <Link
                      href={`tel:${theme.socialLinks.phone}`}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 rounded-full  px-3.5 py-1 text-sm font-semibold  shadow-sm hover:bg-[#45d079] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 text-gray-900 bg-[#25D366]"
                    >
                      <PhoneIcon className="h-4 w-4" />{ theme.socialLinks.phone }
                    </Link>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
        
        <a className='fixed bottom-5 right-5 bg-[#25d366] rounded-full p-2 z-10 shadow-lg' href={`https://wa.me/${theme.socialLinks.whatsapp}`}>
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
          <path fill="#fff" d="M4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98c-0.001,0,0,0,0,0h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303z"></path><path fill="#fff" d="M4.868,43.803c-0.132,0-0.26-0.052-0.355-0.148c-0.125-0.127-0.174-0.312-0.127-0.483l2.639-9.636c-1.636-2.906-2.499-6.206-2.497-9.556C4.532,13.238,13.273,4.5,24.014,4.5c5.21,0.002,10.105,2.031,13.784,5.713c3.679,3.683,5.704,8.577,5.702,13.781c-0.004,10.741-8.746,19.48-19.486,19.48c-3.189-0.001-6.344-0.788-9.144-2.277l-9.875,2.589C4.953,43.798,4.911,43.803,4.868,43.803z"></path><path fill="#cfd8dc" d="M24.014,5c5.079,0.002,9.845,1.979,13.43,5.566c3.584,3.588,5.558,8.356,5.556,13.428c-0.004,10.465-8.522,18.98-18.986,18.98h-0.008c-3.177-0.001-6.3-0.798-9.073-2.311L4.868,43.303l2.694-9.835C5.9,30.59,5.026,27.324,5.027,23.979C5.032,13.514,13.548,5,24.014,5 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974C24.014,42.974,24.014,42.974,24.014,42.974 M24.014,4C24.014,4,24.014,4,24.014,4C12.998,4,4.032,12.962,4.027,23.979c-0.001,3.367,0.849,6.685,2.461,9.622l-2.585,9.439c-0.094,0.345,0.002,0.713,0.254,0.967c0.19,0.192,0.447,0.297,0.711,0.297c0.085,0,0.17-0.011,0.254-0.033l9.687-2.54c2.828,1.468,5.998,2.243,9.197,2.244c11.024,0,19.99-8.963,19.995-19.98c0.002-5.339-2.075-10.359-5.848-14.135C34.378,6.083,29.357,4.002,24.014,4L24.014,4z"></path><path fill="#40c351" d="M35.176,12.832c-2.98-2.982-6.941-4.625-11.157-4.626c-8.704,0-15.783,7.076-15.787,15.774c-0.001,2.981,0.833,5.883,2.413,8.396l0.376,0.597l-1.595,5.821l5.973-1.566l0.577,0.342c2.422,1.438,5.2,2.198,8.032,2.199h0.006c8.698,0,15.777-7.077,15.78-15.776C39.795,19.778,38.156,15.814,35.176,12.832z"></path><path fill="#fff" fillRule="evenodd" d="M19.268,16.045c-0.355-0.79-0.729-0.806-1.068-0.82c-0.277-0.012-0.593-0.011-0.909-0.011c-0.316,0-0.83,0.119-1.265,0.594c-0.435,0.475-1.661,1.622-1.661,3.956c0,2.334,1.7,4.59,1.937,4.906c0.237,0.316,3.282,5.259,8.104,7.161c4.007,1.58,4.823,1.266,5.693,1.187c0.87-0.079,2.807-1.147,3.202-2.255c0.395-1.108,0.395-2.057,0.277-2.255c-0.119-0.198-0.435-0.316-0.909-0.554s-2.807-1.385-3.242-1.543c-0.435-0.158-0.751-0.237-1.068,0.238c-0.316,0.474-1.225,1.543-1.502,1.859c-0.277,0.317-0.554,0.357-1.028,0.119c-0.474-0.238-2.002-0.738-3.815-2.354c-1.41-1.257-2.362-2.81-2.639-3.285c-0.277-0.474-0.03-0.731,0.208-0.968c0.213-0.213,0.474-0.554,0.712-0.831c0.237-0.277,0.316-0.475,0.474-0.791c0.158-0.317,0.079-0.594-0.04-0.831C20.612,19.329,19.69,16.983,19.268,16.045z" clipRule="evenodd"></path>
          </svg>
        </a>
      </section>
    )
}

export default Nav