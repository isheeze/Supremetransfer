'use client'
import { urlForImage } from '@sanity/lib/image';
import { sanityFetch } from '@sanity/lib/sanityFetch';
import { SanityDocument, groq } from 'next-sanity';
import React, { useState, useRef, useEffect } from 'react';

import { SearchBox } from './SearchBox';

const Hero = (props: any)=> {
    const [via, setVia] = useState(false);
    const [via2, setVia2] = useState(false);
    const [twoWay, setTwoWay] = useState(false);

    const DepDateRef = useRef<any>(null);
    const handleDepDateFocus = () => {
      if (DepDateRef.current) {
        DepDateRef?.current?.showPicker(); // Open the picker programmatically
      }
    };
    const ArivalDateRef = useRef<any>(null);
    const handleArivalDateRefFocus = () => {
      if (ArivalDateRef.current) {
        ArivalDateRef?.current?.showPicker(); // Open the picker programmatically
      }
    };
    const handleVia = (inc = true) => {
      if(inc){
        if(via){
          setVia2(true)
        }else{
          setVia(true)
        }
      }else{
        setVia(false)
      }
    };
    const handleVia2 = () => {
      setVia2(!via2);
    };
    const handleTwoWay = (e:any) => {
      setTwoWay(e.currentTarget.value == 'Two Way')
    }


    const [theme, setTheme] = useState<SanityDocument>()
    
    useEffect(() => {
      const fetchThemeData = async () => {
        try {
          const getThemeDataQuery = groq`*[_type == "home"]{
            heroImage
          }`;

          const themeData = await sanityFetch<SanityDocument>({
            query: getThemeDataQuery,
          });

          setTheme(themeData[0]);
        } catch (error) {
          console.error('Error fetching theme data:', error);
        }
      };

      fetchThemeData();
    }, []);

    if (!theme) {
      return <div></div>;
    }
    
    return (
        <div className={`overflow-hidden relative isolate pt-14 lg:pt-24 lg:pb-12 bg-cover bg-center bg-fixed bg-no-repeat`} style={{ "--theme-color": props.themeColor,backgroundImage: `url(${urlForImage(theme.heroImage)})` } as React.CSSProperties}>
          <div className='max-w-7xl flex flex-col-reverse lg:flex-row mx-auto'>
            <div className="flex-1 flex justify-center items-center sm:justify-start">
              <form className='max-w-md w-full rounded-3xl backdrop-blur-[5px] bg-slate-50/70 ring-1 ring-inset ring-gray-400/20 p-6 lg:mx-8 mx-6 my-6 shadow-2xl'>
                <div className="space-y-2">
                  <div className="border-b border-gray-900/10 pb-2">
                    <h2 className="text-center text-base font-semibold leading-7 text-black">Book Your Ride</h2>

                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                      <div className="col-span-full">
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <SearchBox 
                             onSelectAddress={(address, latitude, longitude) => {
                              console.log("address", address);
                              console.log("latitude", latitude);
                              console.log("longitude", longitude);
                            }}
                            defaultValue={""}
                            placeholder='Pick-up Location'/>
                          </div>
                        </div>
                      </div>

                      <div className={`col-span-full${via ? '' : ' hidden'}`}>
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <SearchBox 
                             onSelectAddress={(address, latitude, longitude) => {
                              console.log("address", address);
                              console.log("latitude", latitude);
                              console.log("longitude", longitude);
                            }}
                            defaultValue={""}
                            placeholder='Via Location'/>
                            <span onClick={() => handleVia(false)} className="absolute cursor-pointer -translate-y-1/2 top-1/2 right-2.5 rounded-full px-1 py-0.5 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                              - Via
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className={`col-span-full${via2 ? '' : ' hidden'}`}>
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <SearchBox 
                             onSelectAddress={(address, latitude, longitude) => {
                              console.log("address", address);
                              console.log("latitude", latitude);
                              console.log("longitude", longitude);
                            }}
                            defaultValue={""}
                            placeholder='Via Location'/>
                            <span onClick={handleVia2} className="absolute cursor-pointer -translate-y-1/2 top-1/2 right-2.5 rounded-full px-1 py-0.5 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                              - Via
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <SearchBox 
                             onSelectAddress={(address, latitude, longitude) => {
                              console.log("address", address);
                              console.log("latitude", latitude);
                              console.log("longitude", longitude);
                            }}
                            defaultValue={""}
                            placeholder='Drop-off Location'/>
                            <span onClick={() => handleVia()} className={`absolute cursor-pointer	-translate-y-1/2 top-1/2 right-2.5 rounded-full px-1 py-0.5 text-xs bg-gradient-to-r from-sky-500 to-indigo-500 text-white${via && via2 ? ' hidden' : ''}`}>
                              + Via
                            </span>
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <fieldset>
                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-6 gap-x-6 gap-y-2">
                            <div className="flex items-center gap-x-3 sm:col-span-3">
                              <div className="flex h-6 items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="one-way">
                                  <input type="radio"
                                    id="one-way"
                                    name="ways"
                                    onChange={handleTwoWay}
                                    value="One Way"
                                    className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:border-4 checked:before:bg-gray-900 hover:before:opacity-10"
                                  />
                                  <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                      stroke="currentColor" strokeWidth="1">
                                      <circle cx="10" cy="10" r="7"  fill="transparent" stroke="transparent"/>
                                    </svg>
                                  </span>
                                </label>
                              </div>
                              <label htmlFor="one-way" className="block text-sm font-medium leading-6 text-black">
                                One Way
                              </label>
                            </div>
                            <div className="flex items-center gap-x-3 sm:col-span-3">
                              
                              <div className="flex h-6 items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="two-way">
                                  <input type="radio"
                                    id="two-way"
                                    name="ways"
                                    onChange={handleTwoWay}
                                    value="Two Way"
                                    className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-full border border-slate-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:border-4 checked:before:bg-gray-900 hover:before:opacity-10"
                                  />
                                  <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                      stroke="currentColor" strokeWidth="1">
                                      <circle cx="10" cy="10" r="7"  fill="transparent" stroke="transparent"/>
                                    </svg>
                                  </span>
                                </label>
                              </div>
                              <label htmlFor="two-way" className="block text-sm font-medium leading-6 text-black">
                                Two Ways
                              </label>
                            </div>
                          </div>
                        </fieldset>
                      </div>

                      <div className="col-span-full">
                        <div className='mt-2'>
                          <label htmlFor="departure-date" className='font-bold'>Pickup Time</label>
                        </div>
                        <div className="mt-2">
                          <div className="flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <input
                              type="datetime-local"
                              name="departure-date"
                              id="departure-date"
                              className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-4 pr-4 text-black placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="janesmith"
                              ref={ DepDateRef }
                              onFocus={ handleDepDateFocus }
                            />
                          </div>
                        </div>
                      </div>

                      <div className={`col-span-full${twoWay ? '' : ' hidden'}`}>
                        <div className='mt-2'>
                          <label htmlFor="arrival-date" className='font-bold'>Return Time</label>
                        </div>
                        <div className="mt-2">
                          <div className="flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <input
                              type="datetime-local"
                              name="arrival-date"
                              id="arrival-date"
                              className="block w-full flex-1 border-0 bg-transparent py-1.5 pl-4 pr-4 text-black placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
                              placeholder="janesmith"
                              ref={ ArivalDateRef }
                              onFocus={ handleArivalDateRefFocus }
                            />
                          </div>
                        </div>
                      </div>

                      <div className="sm:col-span-3">
                        <div className="block w-full rounded-full border-0 py-1 px-3 text-black shadow ring-1 ring-inset ring-slate-900/20 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <select
                              id="Passenger"
                              name="Passenger"
                              autoComplete="Passenger"
                              className="block w-full rounded-full border-0 py-1 bg-transparent text-black sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option value="1">1 Passenger</option>
                              <option value="2">2 Passengers</option>
                              <option value="3">3 Passengers</option>
                              <option value="4">4 Passengers</option>
                              <option value="5">5 Passengers</option>
                              <option value="6">6 Passengers</option>
                              <option value="7">7 Passengers</option>
                              <option value="8">8 Passengers</option>
                              <option value="9">9 Passengers</option>
                              <option value="10">10 Passengers</option>
                              <option value="11">11 Passengers</option>
                              <option value="12">12 Passengers</option>
                              <option value="13">13 Passengers</option>
                              <option value="14">14 Passengers</option>
                              <option value="15">15 Passengers</option>
                              <option value="16">16 Passengers</option>
                            </select>
                          </div>
                      </div>

                      <div className="sm:col-span-3">
                        <div className="block w-full rounded-full border-0 py-1 px-3 text-black shadow ring-1 ring-inset ring-slate-900/20 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
                            <select
                              id="luggage"
                              name="luggage"
                              autoComplete="luggage"
                              className="block w-full rounded-full border-0 py-1 bg-transparent text-black sm:max-w-xs sm:text-sm sm:leading-6"
                            >
                              <option value="0">No luggage</option>
                              <option value="1">1 luggage</option>
                              <option value="2">2 luggages</option>
                              <option value="3">3 luggages</option>
                              <option value="4">4 luggages</option>
                              <option value="5">5 luggages</option>
                              <option value="6">6 luggages</option>
                              <option value="7">7 luggages</option>
                              <option value="8">8 luggages</option>
                              <option value="9">9 luggages</option>
                              <option value="10">10 luggages</option>
                            </select>
                          </div>
                      </div>
                      <div className="col-span-full">
                        <fieldset>
                          <div className="mt-2 grid grid-cols-1 sm:grid-cols-6 gap-x-3 gap-y-2">
                            <div className="relative flex gap-x-2 sm:col-span-2">
                              <div className="flex h-6 items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="infant-seat">
                                  <input type="checkbox"
                                    id="infant-seat"
                                    name="extra-seats"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                  />
                                  <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                      stroke="currentColor" strokeWidth="1">
                                      <path fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                </label>
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor="infant-seat" className="font-medium text-black">
                                  Infant Seat
                                </label>
                              </div>
                            </div>
                            <div className="relative flex gap-x-2 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="baby-seat">
                                  <input type="checkbox"
                                    id="baby-seat"
                                    name="extra-seats"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                  />
                                  <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                      stroke="currentColor" strokeWidth="1">
                                      <path fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                </label>
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor="baby-seat" className="font-medium text-black">
                                  Baby Seat
                                </label>
                              </div>
                            </div>
                            <div className="relative flex gap-x-2 sm:col-span-2">
                            <div className="flex h-6 items-center">
                                <label className="relative flex items-center rounded-full cursor-pointer" htmlFor="booster-seat">
                                  <input type="checkbox"
                                    id="booster-seat"
                                    name="extra-seats"
                                    className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-slate-500 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                  />
                                  <span
                                    className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                                      stroke="currentColor" strokeWidth="1">
                                      <path fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                        clipRule="evenodd"></path>
                                    </svg>
                                  </span>
                                </label>
                              </div>
                              <div className="text-sm leading-6">
                                <label htmlFor="booster-seat" className="font-medium text-black">
                                  Booster Seat
                                </label>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    style={{ "--tw-shadow-color": props.themeColor, backgroundColor: props.themeColor } as React.CSSProperties}
                  >
                    Get Quotes
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1">
            </div>
          </div>
        </div>
    )
}

export default Hero