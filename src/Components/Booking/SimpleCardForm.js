import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({name,email,serviceName}) => {
	const stripe = useStripe();
	const elements = useElements();
	const [ paymentError, setPaymentError ] = useState('');
	const [ success, setSuccess ] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			return;
		}

		const cardElement = elements.getElement(CardElement);

		const { error, paymentMethod } = await stripe.createPaymentMethod({
			type: 'card',
			card: cardElement
		});

		if (error) {
      setPaymentError(error.message);
      setSuccess('');
		} else {
			console.log('[PaymentMethod]', paymentMethod);
			const orderInfo = {
				name,
				email,
				serviceName,
				status:"pending",
				date: new Date().toDateString(),
				paymentId: paymentMethod.id
			}
			console.log("orderInfo", orderInfo);

			const url = `https://shrouded-springs-84958.herokuapp.com/addOrder`;
			// const url = `http://localhost:5055/addOrder`;
			fetch(url, {
				method: 'POST',
				headers: {
					'content-type': 'application/json'
				},
				body: JSON.stringify(orderInfo)
			})
				.then((res) => console.log('server side response', res));

      setPaymentError('');
      setSuccess("Your Payment was successful");
		}
	};

	return (
    <div>
      <p className="text-info">For Testing purpose enter card number 4242 4242 4242 4242</p>
			<form className="form-group" onSubmit={handleSubmit}>
				<CardElement />
				<button className="btn btn-info mt-3" style={{width:'100%',fotSize:'20px'}} type="submit" disabled={!stripe}>
					Pay
				</button>
      </form>
      <h4 className="text-danger">{paymentError}</h4>
      <h4 className="text-success">{success}</h4>
		</div>
	);
};
export default SimpleCardForm;
