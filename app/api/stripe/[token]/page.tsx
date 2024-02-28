'use client'
import { loadStripe } from "@stripe/stripe-js"
import { useEffect } from "react";

export default function Page({ params }: { params: { token: string } }) {

    async function stripeSession() {
        const asyncStripe = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
        const session_id = params.token
        const stripe = await asyncStripe;

        if(stripe && session_id){
            await stripe.redirectToCheckout({
                sessionId:session_id
            })
        }else{
            console.log('stripe: ',stripe, ' -> session: ',session_id)
        }
    }

    useEffect(()=>{
        stripeSession()
    })

    return (
        <div></div>
    )
}