import { CheckCircleIcon } from "@heroicons/react/24/outline"
import ConfirmOrder from "./ConfirmDetails"
const Confirm = (props: any) => {
    return (
        <div className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-12 lg:overflow-visible lg:px-0">
            <div className="py-12 sm:py-8">
                <div className="mx-auto max-w-5xl px-6 lg:px-8 shadow-lg ring-1 ring-gray-300 rounded-xl my-6 py-20">
                    <div className="mx-auto max-w-2xl lg:text-center mb-8">
                        <h2 className="text-base font-semibold leading-7" style={{color: props.themeColor}}><CheckCircleIcon className="m-auto w-20"/></h2>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                            Booking Confirmed
                        </p>
                    </div>
                    <ConfirmOrder themeColor={props.themeColor} />
                </div>
            </div>
        </div>
    )
}
export default Confirm