import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = ({ cart, price }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useAuth();
    const navigate = useNavigate();
    const [axiosSecure] = useAxiosSecure();
    const [cardError, setCardError] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const [processing, setProcessing] = useState(false);
    const [paymentSuccess, setPaymentSuccess] = useState('');

    useEffect(() => {
        if (price > 0) {
            axiosSecure.post('/create-payment-intent', { price })
                .then(res => {
                    // console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret);
                })
        }
    }, [])

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        //check the card is valid or not..
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setCardError(error.message);
            console.log('[error]', error);
        } else {
            setCardError('');
            // console.log('[PaymentMethod]', paymentMethod);
        }

        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email || 'unknown',
                        name: user?.displayName || 'anonymous'
                    },
                },
            },
        );

        if (confirmError) {
            console.log('confirmError', confirmError);
            return;
        }

        console.log(paymentIntent);
        setProcessing(false);

        if (paymentIntent.status === 'succeeded') {
            setPaymentSuccess(paymentIntent);

            // //save payment information to the server..
            const payment = {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                status: 'service pending',
                quantity: cart.length,
                cart: cart.map(course => course._id),
                courses: cart.map(course => course._id),
                coursesName: cart.map(course => course.name)
            }

            axiosSecure.post('/payments', payment)
                .then(res => {
                    console.log(res.data)
                    if (res.data.insertResult.
                        insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: "your payment has been successful!",
                            showConfirmButton: false,
                            timer: 1500
                        });
                        navigate('/dashboard/paymentHistory');
                    }
                })
        }

    }

    return (
        <>
            <form className="mt-10 w-full" onSubmit={handleSubmit}>
                <CardElement className="bg-[#0a0a0a] p-4"
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#DD6E8B',
                                '::placeholder': {
                                    color: '#dd6e8cc4'
                                },
                            },
                            invalid: {
                                color: '#af0000',
                            },
                        },
                    }}
                />
                <button className="text-black font-semibold heading-font uppercase tracking-wider bg-[#DD6E8B] btn-sm hover:bg-[#0a0a0a] hover:text-[#DD6E8B] rounded-md mt-10" type="submit" disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            {cardError && <p className="text-red-600 my-2">{cardError}</p>}
            {
                paymentSuccess && <div className="flex items-center">
                    <span className="text-[#DD6E8B]">Transaction ID: </span>
                    <p className="text-green-600 my-2 ms-4">{paymentSuccess.id}</p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;