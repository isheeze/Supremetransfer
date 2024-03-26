'use client'
import { urlForImage } from '@sanity/lib/image';
import { sanityFetch } from '@sanity/lib/sanityFetch';
import { SanityDocument, groq } from 'next-sanity';
import React, { useState, useRef, useEffect } from 'react';

import { SearchBox } from './SearchBox';
import { useFormState } from 'react-dom';
import { handleRide } from '@app/lib/actions';

const Hero = (props: any)=> {
  const [state, formAction] = useFormState(handleRide, null)
  
  const [pickupAddress, setPickupAddress] = useState<any>()
  const [pickupZipcode, setPickupZipcode] = useState<any>()
  const [pickupLat, setPickupLat] = useState<any>()
  const [pickupLng, setPickupLng] = useState<any>()

  const [via1Address, setVia1Address] = useState<any>()
  const [via1Zipcode, setVia1Zipcode] = useState<any>()
  const [via1Lat, setVia1Lat] = useState<any>()
  const [via1Lng, setVia1Lng] = useState<any>()

  const [via2Address, setVia2Address] = useState<any>()
  const [via2Zipcode, setVia2Zipcode] = useState<any>()
  const [via2Lat, setVia2Lat] = useState<any>()
  const [via2Lng, setVia2Lng] = useState<any>()

  const [dropoffAddress, setDropoffAddress] = useState<any>()
  const [dropoffZipcode, setDropoffZipcode] = useState<any>()
  const [dropoffLat, setDropoffLat] = useState<any>()
  const [dropoffLng, setDropoffLng] = useState<any>()

  const [via, setVia] = useState(false);
  const [via2, setVia2] = useState(false);
  const [twoWay, setTwoWay] = useState(false);

  const [promoCode, setPromoCode] = useState<any>()

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

    function slider(){
      let slides = document.querySelectorAll('.txtSlider > div')
      if(slides.length){
        let i = 0;
        setInterval(()=>{
          console.log('=> ',slides[i])
            slides[i].classList.add("hide")
            i = (i + 1) % slides.length
            slides[i].classList.remove("hide")
        }, 1000)
      }
    }
    
    useEffect(() => {
      const fetchThemeData = async () => {
        try {
          const getThemeDataQuery = groq`*[_type == "home"]{
            heroImage,
            txtbg,
            textSlider
          }`;

          const themeData = await sanityFetch<SanityDocument>({
            query: getThemeDataQuery,
          });

          setTheme(themeData[0]);
        } catch (error) {
          console.error('Error fetching theme data:', error);
        }
      };

      fetchThemeData()
      slider()
    }, []);

    if (!theme) {
      return <div></div>;
    }
    
    return (
        <div className={`overflow-hidden relative isolate pt-14 lg:pt-24 lg:pb-12 bg-cover bg-center bg-fixed bg-no-repeat`} style={{ "--theme-color": props.themeColor,backgroundImage: `url(${urlForImage(theme.heroImage)})` } as React.CSSProperties}>
          <div className='max-w-7xl flex flex-col-reverse lg:flex-row mx-auto'>
            <div className="flex-1 flex justify-center items-center sm:justify-start">
              <form action={formAction} className='max-w-md w-full rounded-3xl backdrop-blur-[5px] bg-slate-50/70 ring-1 ring-inset ring-gray-400/20 p-6 lg:mx-8 mx-6 my-6 shadow-2xl'>
                <div className="space-y-2">
                  <div className="border-b border-gray-900/10 pb-2">
                    <h2 className="text-center text-base font-semibold leading-7 text-black">Book Your Ride</h2>

                    {state && <div className="my-8">{state.errors.map((item: any) => (<div className="mb-2 rounded-md shadow-md bg-red-800 text-gray-50 p-2">{item.message}</div>))}</div>}
                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-6">
                      <div className="col-span-full">
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <SearchBox 
                             onSelectAddress={(address, zipcode, lat, lng) => {
                              setPickupAddress(address)
                              setPickupZipcode(zipcode)
                              setPickupLat(lat)
                              setPickupLng(lng)
                            }}
                            defaultValue={""}
                            placeholder='Pick-up Location'/>
                          </div>
                          <input type='hidden' name="pickupAddress" value={pickupAddress} />
                          {pickupZipcode && <input type='hidden' name="pickupZipcode" value={pickupZipcode} />}
                          {pickupLat && <input type='hidden' name="pickupLat" value={pickupLat} />}
                          {pickupLng && <input type='hidden' name="pickupLng" value={pickupLng} />}
                        </div>
                      </div>

                      <div className={`col-span-full${via ? '' : ' hidden'}`}>
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <SearchBox 
                              onSelectAddress={(address, zipcode, lat, lng) => {
                                setVia1Address(address)
                                setVia1Zipcode(zipcode)
                                setVia1Lat(lat)
                                setVia1Lng(lng)
                            }}
                            defaultValue={""}
                            placeholder='Via Location'/>
                            <span onClick={() => handleVia(false)} className="absolute cursor-pointer -translate-y-1/2 top-1/2 right-2.5 rounded-full px-1 py-0.5 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                              - Via
                            </span>
                            {via1Address && <input type='hidden' name="via1Address" value={via1Address} />}
                            {via1Zipcode && <input type='hidden' name="via1Zipcode" value={via1Zipcode} />}
                            {via1Lat && <input type='hidden' name="via1Lat" value={via1Lat} />}
                            {via1Lng && <input type='hidden' name="via1Lng" value={via1Lng} />}
                          </div>
                        </div>
                      </div>

                      <div className={`col-span-full${via2 ? '' : ' hidden'}`}>
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <SearchBox 
                              onSelectAddress={(address, zipcode, lat, lng) => {
                                setVia2Address(address)
                                setVia2Zipcode(zipcode)
                                setVia2Lat(lat)
                                setVia2Lng(lng)
                            }}
                            defaultValue={""}
                            placeholder='Via Location'/>
                            <span onClick={handleVia2} className="absolute cursor-pointer -translate-y-1/2 top-1/2 right-2.5 rounded-full px-1 py-0.5 text-xs bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                              - Via
                            </span>
                            {via2Address && <input type='hidden' name="via2Address" value={via2Address} />}
                            {via2Zipcode && <input type='hidden' name="via2Zipcode" value={via2Zipcode} />}
                            {via2Lat && <input type='hidden' name="via2Lat" value={via2Lat} />}
                            {via2Lng && <input type='hidden' name="via2Lng" value={via2Lng} />}
                          </div>
                        </div>
                      </div>

                      <div className="col-span-full">
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <SearchBox 
                              onSelectAddress={(address, zipcode, lat, lng) => {
                                setDropoffAddress(address)
                                setDropoffZipcode(zipcode)
                                setDropoffLat(lat)
                                setDropoffLng(lng)
                            }}
                            defaultValue={""}
                            placeholder='Drop-off Location'/>
                            <span onClick={() => handleVia()} className={`absolute cursor-pointer	-translate-y-1/2 top-1/2 right-2.5 rounded-full px-1 py-0.5 text-xs bg-gradient-to-r from-sky-500 to-indigo-500 text-white${via && via2 ? ' hidden' : ''}`}>
                              + Via
                            </span>
                            <input type='hidden' name="dropoffAddress" value={dropoffAddress} />
                            {dropoffZipcode && <input type='hidden' name="dropoffZipcode" value={dropoffZipcode} />}
                            {dropoffLat && <input type='hidden' name="dropoffLat" value={dropoffLat} />}
                            {dropoffLng && <input type='hidden' name="dropoffLng" value={dropoffLng} />}
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
                                    name="direction"
                                    onChange={handleTwoWay}
                                    value="One Way"
                                    defaultChecked
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
                                    name="direction"
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
                          <label htmlFor="pickupTime" className='font-bold'>Pickup Time</label>
                        </div>
                        <div className="mt-2">
                          <div className="flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <input
                              type="datetime-local"
                              name="pickupTime"
                              id="pickupTime"
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
                          <label htmlFor="returnTime" className='font-bold'>Return Time</label>
                        </div>
                        <div className="mt-2">
                          <div className="flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <input
                              type="datetime-local"
                              name="returnTime"
                              id="returnTime"
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
                              name="passenger"
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
                                    name="infantSeat"
                                    value="infantSeat"
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
                                    name="babySeat"
                                    value="babySeat"
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
                                    name="boosterSeat"
                                    value="boosterSeat"
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

                      <div className="col-span-full">
                        <div className="mt-2">
                          <div className="relative flex rounded-full shadow ring-1 ring-inset ring-slate-900/20 focus-within:ring-2 focus-within:ring-inset customFocusWithinRing">
                            <input 
                              type='text'
                              defaultValue={""}
                              placeholder='Promo Code'
                              name="promoCode"
                              onChange={(event) => {setPromoCode(event.target.value);}}/>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 flex items-center justify-end gap-x-6">
                  <button
                    type="submit"
                    className="rounded-md  px-3 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500 hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    style={{ "--tw-shadow-color": props.heroButtonColor, backgroundColor: props.heroButtonColor } as React.CSSProperties}
                  >
                    Get Quotes
                  </button>
                </div>
              </form>
            </div>
            <div className="flex-1">
              <div className='relative w-fit p-[3%] aspect-square flex items-center float-right mr-8'>
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" className='absolute w-full -z-10 top-1/2 left-1/2' style={{transform:"translate(-50%,-50%)"}}>
                  <g transform="matrix(0.122543, 0, 0, -0.122543, 55.530079, 700.987488)" fill="#000000" stroke="none">
                    <path d="M 1290.175 5592.368 C 1243.175 5545.368 1200.175 5507.368 1193.175 5507.368 C 1186.175 5507.368 1132.175 5525.368 1073.175 5547.368 C 1014.175 5569.368 963.175 5584.368 960.175 5580.368 C 956.175 5575.368 924.175 5529.368 887.175 5476.368 L 822.175 5381.368 L 704.175 5398.368 C 640.175 5408.368 584.175 5414.368 580.175 5412.368 C 576.175 5410.368 554.175 5359.368 531.175 5299.368 C 482.175 5175.368 488.175 5178.368 350.175 5176.368 C 234.175 5174.368 239.175 5178.368 215.175 5043.368 L 195.175 4924.368 L 145.175 4910.368 C 117.175 4902.368 65.175 4887.368 28.175 4876.368 L -38.825 4856.368 L -41.825 4729.368 L -44.825 4602.368 L -144.825 4551.368 C -198.825 4522.368 -245.825 4494.368 -247.825 4488.368 C -249.825 4482.368 -238.825 4425.368 -223.825 4362.368 C -208.825 4299.368 -197.825 4246.368 -200.825 4244.368 C -271.825 4188.368 -379.825 4093.368 -379.825 4086.368 C -379.825 4081.368 -356.825 4032.368 -329.825 3977.368 C -302.825 3922.368 -279.825 3874.368 -279.825 3870.368 C -279.825 3865.368 -313.825 3819.368 -353.825 3767.368 C -426.825 3675.368 -427.825 3672.368 -411.825 3651.368 C -402.825 3638.368 -367.825 3594.368 -335.825 3552.368 L -276.825 3475.368 L -329.825 3367.368 C -370.825 3285.368 -380.825 3255.368 -372.825 3245.368 C -365.825 3238.368 -324.825 3203.368 -280.825 3167.368 C -236.825 3131.368 -200.825 3094.368 -199.825 3085.368 C -199.825 3076.368 -210.825 3026.368 -224.825 2975.368 C -238.825 2924.368 -249.825 2874.368 -249.825 2865.368 C -249.825 2854.368 -215.825 2831.368 -146.825 2795.368 L -44.825 2742.368 L -39.825 2613.368 L -34.825 2483.368 L 80.175 2452.368 L 194.175 2421.368 L 215.175 2302.368 C 238.175 2168.368 235.175 2170.368 335.175 2168.368 C 363.175 2167.368 408.175 2164.368 436.175 2161.368 L 488.175 2154.368 L 531.175 2045.368 C 554.175 1985.368 576.175 1934.368 580.175 1932.368 C 584.175 1930.368 629.175 1934.368 681.175 1942.368 C 832.175 1965.368 819.175 1970.368 890.175 1862.368 C 925.175 1809.368 956.175 1764.368 960.175 1762.368 C 964.175 1759.368 1016.175 1775.368 1075.175 1797.368 C 1134.175 1819.368 1188.175 1837.368 1194.175 1837.368 C 1200.175 1837.368 1243.175 1799.368 1290.175 1752.368 L 1375.175 1668.368 L 1477.175 1732.368 C 1533.175 1768.368 1583.175 1797.368 1587.175 1797.368 C 1592.175 1797.368 1640.175 1768.368 1695.175 1732.368 L 1795.175 1668.368 L 1880.175 1752.368 C 1927.175 1799.368 1970.175 1837.368 1976.175 1837.368 C 1982.175 1837.368 2036.175 1819.368 2095.175 1797.368 C 2154.175 1775.368 2206.175 1759.368 2210.175 1762.368 C 2214.175 1764.368 2245.175 1809.368 2280.175 1862.368 C 2351.175 1970.368 2338.175 1965.368 2489.175 1942.368 C 2541.175 1934.368 2586.175 1930.368 2590.175 1932.368 C 2594.175 1934.368 2616.175 1985.368 2639.175 2045.368 L 2682.175 2155.368 L 2727.175 2161.368 C 2752.175 2164.368 2794.175 2167.368 2819.175 2167.368 C 2844.175 2167.368 2881.175 2170.368 2901.175 2173.368 L 2937.175 2179.368 L 2956.175 2300.368 L 2975.175 2421.368 L 3060.175 2444.368 C 3107.175 2457.368 3161.175 2472.368 3180.175 2477.368 L 3215.175 2486.368 L 3215.175 2614.368 L 3215.175 2741.368 L 3315.175 2794.368 C 3370.175 2822.368 3416.175 2851.368 3418.175 2857.368 C 3420.175 2863.368 3409.175 2919.368 3394.175 2982.368 C 3379.175 3045.368 3368.175 3098.368 3371.175 3100.368 C 3450.175 3163.368 3550.175 3250.368 3550.175 3257.368 C 3550.175 3263.368 3527.175 3314.368 3498.175 3371.368 L 3446.175 3475.368 L 3491.175 3532.368 C 3515.175 3563.368 3549.175 3608.368 3567.175 3631.368 L 3599.175 3673.368 L 3525.175 3768.368 C 3484.175 3820.368 3450.175 3865.368 3450.175 3870.368 C 3450.175 3874.368 3473.175 3922.368 3500.175 3977.368 C 3528.175 4032.368 3550.175 4081.368 3550.175 4086.368 C 3550.175 4093.368 3442.175 4188.368 3371.175 4244.368 C 3368.175 4246.368 3379.175 4299.368 3394.175 4362.368 C 3409.175 4425.368 3420.175 4482.368 3418.175 4488.368 C 3416.175 4494.368 3369.175 4522.368 3315.175 4551.368 L 3215.175 4602.368 L 3213.175 4725.368 C 3212.175 4793.368 3209.175 4851.368 3206.175 4854.368 C 3203.175 4857.368 3150.175 4874.368 3088.175 4892.368 L 2976.175 4924.368 L 2955.175 5043.368 C 2932.175 5178.368 2936.175 5174.368 2820.175 5176.368 C 2682.175 5178.368 2688.175 5175.368 2639.175 5299.368 C 2616.175 5359.368 2594.175 5410.368 2590.175 5412.368 C 2586.175 5414.368 2530.175 5408.368 2466.175 5398.368 L 2348.175 5381.368 L 2279.175 5484.368 C 2241.175 5541.368 2208.175 5587.368 2207.175 5587.368 C 2205.175 5587.368 2156.175 5569.368 2097.175 5547.368 C 2039.175 5525.368 1985.175 5507.368 1978.175 5507.368 C 1971.175 5507.368 1927.175 5545.368 1880.175 5592.368 L 1795.175 5676.368 L 1695.175 5612.368 C 1640.175 5576.368 1591.175 5547.368 1586.175 5547.368 C 1578.175 5547.368 1534.175 5574.368 1395.175 5663.368 C 1376.175 5676.368 1367.175 5670.368 1290.175 5592.368 Z" style={{fill: "rgb(246, 36, 36)"}}/>
                  </g>
                </svg>

                <div className='txtSlider w-fit text-white text-center'>
                {theme.textSlider.map((txt: any) => (
                  <div>{txt.text}</div>
                ))}
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Hero