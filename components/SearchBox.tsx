import { ChangeEvent } from "react";
import { FunctionComponent } from "react";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
  getZipCode
} from "use-places-autocomplete";
import { useGoogleMapsScript, Libraries } from "use-google-maps-script";
import { Combobox } from '@headlessui/react';
import axios from "axios";

interface ISearchBoxProps {
  onSelectAddress: (
    address: string,
    postcode: any,
    latitude: number | null,
    longitude: number | null
  ) => void;
  defaultValue: string;
  placeholder: string;
}

const libraries: Libraries = ["places"];

export function SearchBox({ onSelectAddress, defaultValue, placeholder }: ISearchBoxProps) {
  const { isLoaded, loadError } = useGoogleMapsScript({
    googleMapsApiKey: 'AIzaSyDZLZ7lGMz9xDLBFhp9mpV9R50X44I9T04',
    libraries,
  });

  if (!isLoaded) return null;
  if (loadError) return <div>Error loading</div>;

  return (
    <ReadySearchBox
      onSelectAddress={onSelectAddress}
      defaultValue={defaultValue}
      placeholder={placeholder}
    />
  );
}

function ReadySearchBox({ onSelectAddress, defaultValue, placeholder }: ISearchBoxProps) {
  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({ debounce: 300, defaultValue });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      onSelectAddress("", "", null, null);
    }
  };

  const handleSelect = async (address: string) => {
    setValue(address, false);
    clearSuggestions();
    try {
      

      const results = await getGeocode({ address });
      const { lat, lng } = await getLatLng(results[0]);
      const zipCode = await getZipCode(results[0], false);
      
      onSelectAddress(address, zipCode, lat, lng);
    } catch (error) {
      console.error(`😱 Error:`, error);
    }
  };

  return (
    <Combobox onChange={handleSelect}>
    <Combobox.Input id="search"
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            className="block w-full flex-1 border-0 bg-transparent py-1.5 px-4 text-black placeholder:text-black focus:ring-0 sm:text-sm sm:leading-6"
            autoComplete="off"/>
    <Combobox.Options className="absolute bg-white w-full rounded-lg shadow-lg top-11 z-10 p-3 max-h-72 overflow-auto" >
    {status === "OK" &&
                data.map(({ place_id, description }) => (
                    <Combobox.Option key={place_id} value={description} className={({ active }:any) =>
                    `text-gray-900 p-2 cursor-pointer rounded-md ${
                      active ? 'customBg text-white shadow-md' : 'text-gray-900'
                    }`}>
                        {description}
                    </Combobox.Option>
                ))}
    </Combobox.Options>
    </Combobox>
  );
}
export const distance = (originLat:any, originLng:any, distinationLat:any, distinationLng:any) => {
  const url = 'https://routes.googleapis.com/distanceMatrix/v2:computeRouteMatrix';
  const headers = {
    'X-Goog-Api-Key': 'AIzaSyDZLZ7lGMz9xDLBFhp9mpV9R50X44I9T04',
    'Content-Type': 'application/json',
    'X-Goog-FieldMask': 'originIndex,destinationIndex,duration,distanceMeters,status,condition'
  }
  const data = {
    origins: [
      {
        waypoint: {
          location: {
            latLng: {
              latitude: originLat,
              longitude: originLng,
            },
          },
        },
        routeModifiers: { avoid_ferries: true },
      },
    ],
    destinations: [
      {
        waypoint: {
          location: {
            latLng: {
              latitude: distinationLat,
              longitude: distinationLng,
            },
          },
        },
      },
    ],
    travelMode: "DRIVE"
  };
  fetch(url, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(response => {
    // Handle successful response
    console.log(response);
  })
  .catch(error => {
    // Handle errors
    console.error(error);
  });
};