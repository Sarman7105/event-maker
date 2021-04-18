import React, { useContext, useState, useEffect } from 'react';
import { UserContext } from '../../../App';

const OrderList = ({isAdmin}) => {
	const [ user, setUser ] = useContext(UserContext);
	const [ orders, setOrders ] = useState([]);
	const [ email, setEmail ] = useState(user.email);
	// const [ isAdmin, setIsAdmin ] = useState(false);
	useEffect(
		() => {

			const url = isAdmin
				? `https://shrouded-springs-84958.herokuapp.com/orders`
				: `https://shrouded-springs-84958.herokuapp.com/orderByEmail?email=${email}`;

			fetch(url).then((res) => res.json()).then((data) => {
				setOrders(data);
				console.log(data);
			});
		},
		[ email, isAdmin ]
	);
	let index = 1;
	return (
		<div>
			<h3>you have {orders.length}</h3>
			<table class="table">
				<thead>
					<tr>
						<th scope="col">#</th>
						<th scope="col">Name</th>
						<th scope="col">Service Name</th>
						<th scope="col">Status</th>
					</tr>
				</thead>
				<tbody>
					{orders.map((order) => {
						return (
							<tr>
								<th scope="row">{index++}</th>
								<td>{order.name}</td>
								<td>{order.serviceName}</td>
								<td>{order.status}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
};

export default OrderList;
