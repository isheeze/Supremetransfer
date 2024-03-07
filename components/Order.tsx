import { orderHandler } from "@app/lib/actions"
import HiddenInputsFleetPrice from "./HiddenInputsFleetPrice"
import OrderAndFlightDetails from "./OrderAndFlightDetails"

const Order = (props: any) => {
    return (
        <div className="relative isolate overflow-hidden px-6 py-12 sm:py-12 lg:overflow-visible lg:px-0">
            <div className="py-12 sm:py-8">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:text-center mb-8">
                        <h2 className="text-base font-semibold leading-7" style={{color: props.themeColor}}>Proceed With Order</h2>
                        <p className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                        Personal Details
                        </p>
                    </div>
                    <form action={orderHandler}>
                        <HiddenInputsFleetPrice />
                        <OrderAndFlightDetails themeColor={props.themeColor}/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Order