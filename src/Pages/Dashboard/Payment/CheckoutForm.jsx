import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useCarts from "../../../Hooks/useCarts/useCarts";
import useAxiosSecure from "../../../Hooks/useAxiosSecure/useAxiosSecure";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const {user} = useContext(AuthContext)
    const [error,setError] = useState(null)
    const stripe = useStripe()
    const elements = useElements()
    const [clientSecret,setClientSecret] = useState('')
    const [transactionId,settransactionId] = useState('')
    const [cart,refetch] = useCarts()
    const totalPrice = cart.reduce((total,item) => total + item.price,0)
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate()
    

    // create an post method to send price and get secret key
    useEffect(()=>{
       if(totalPrice > 0){
        const res = axiosSecure.post("/create-payment-intent",{price: totalPrice})
        .then(res=>{
            setClientSecret(res.data.clientSecret)
        })
        .catch(error=>console.log(error))
       }
    },[axiosSecure,totalPrice])

    const handleSubmit = async (event) => {
        event.preventDefault()

        
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return;
        }


        // check payment method error or ok
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        if (error) {
            setError(error)
            console.log("Payment error is :", error)
        }
        else {
            console.log("Payment method is ", paymentMethod)
            setError("")
        }


        const {paymentIntent,error:confirmError} = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:card,
                billing_details:{
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous'
                }
            }
        })
        if(confirmError){
            console.log('confirm error',confirmError)
            settransactionId("")
        }
        else{
            console.log('payment intent',paymentIntent)
            if(paymentIntent.status === "succeeded"){
                settransactionId(paymentIntent.id)
                const paymentInfo = {
                    email: user?.email,
                    name:user?.displayName,
                    date: new Date(),
                    status: "pending",
                    transactionId: paymentIntent.id,
                    price: totalPrice,
                    cartIds : cart.map(item=>item._id),
                    foodIds: cart.map(item=> item.foodId),
                }
                const res = await axiosSecure.post('/payments',paymentInfo)
                .then(res=>{
                    console.log(res.data)
                    refetch()
                    if(res.data.paymentResult.insertedId){
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "Your Payment succesfull",
                            showConfirmButton: false,
                            timer: 1500
                          });
                          navigate('/dashboard/paymentHistory')
                    }
                    
                })
                .catch(error=>{
                    console.log(error)
                })

            }
        }
    }
    return (
        <div className="container mx-auto mt-20">
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className="btn bg-red-700 mt-3" type="submit" disabled={!stripe || !clientSecret}>
                    Pay
                </button>
                {error && <div className="text-3xl text-red-600">{error.message}</div>}
                {transactionId && <p className="text-xl text-green-400">Your transaction id is: {transactionId}</p>}
            </form>
        </div>
    );
};

export default CheckoutForm;