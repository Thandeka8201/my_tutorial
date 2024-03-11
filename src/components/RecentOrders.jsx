import React from 'react'
import { Link } from 'react-router-dom'
import { getOrderStatus } from '../lib/utils'

//Dummy data, will use an API in a real-world app
const recentOrdersData = [
    {
		id: '1',
		product_id: '4324',
		customer_id: '23143',
		customer_name: 'Shirley A. Lape',
		order_date: '2024-02-17T03:24:00',
		order_total: 'R435.50',
		current_order_status: 'PLACED',
		shipment_address: 'Tableview, 7441'
	},
	{
		id: '7',
		product_id: '7453',
		customer_id: '96453',
		customer_name: 'Ryan Carroll',
		order_date: '2024-02-14T05:24:00',
		order_total: 'R96.35',
		current_order_status: 'CONFIRMED',
		shipment_address: 'Cape Town, 8000'
	},
	{
		id: '2',
		product_id: '5434',
		customer_id: '65345',
		customer_name: 'Mason Nash',
		order_date: '2024-02-17T07:14:00',
		order_total: 'R836.44',
		current_order_status: 'SHIPPED',
		shipment_address: 'Edgemead, 7441'
	},
	{
		id: '3',
		product_id: '9854',
		customer_id: '87832',
		customer_name: 'Luke Parkin',
		order_date: '2024-02-16T12:40:00',
		order_total: 'R334.50',
		current_order_status: 'SHIPPED',
		shipment_address: 'Bantry Bay, 8005'
	},
	{
		id: '4',
		product_id: '8763',
		customer_id: '09832',
		customer_name: 'Anthony Fry',
		order_date: '2024-02-14T03:24:00',
		order_total: 'R876.00',
		current_order_status: 'OUT_FOR_DELIVERY',
		shipment_address: 'Umhlanga, 4319'
	},
	{
		id: '5',
		product_id: '5627',
		customer_id: '97632',
		customer_name: 'Ryan Carroll',
		order_date: '2024-02-14T05:24:00',
		order_total: 'R96.35',
		current_order_status: 'DELIVERED',
		shipment_address: 'Sandton, 2054'
	}
]

export default function RecentOrders() {
  return (
    <div className=' bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1'>
        <strong className='text-gray-700 font-medium'>Recent Orders</strong>
        <div className='mt-3'>
            <table className='w-full text-gray-700 border-x border-gray-200 rounded-sm'>
                <thead>
                    <tr>
                        <td>ID</td>
                        <td>Product ID</td>
                        <td>Customer Name</td>
                        <td>Order Date</td>
                        <td>Order Total</td>
                        <td>Shipping Address</td>
                        <td>Order Status</td>
                    </tr>
                </thead>
                <tbody>
                {recentOrdersData.map(order => 
                    <tr key={order.id}>
                        <td><Link to={`/orders/${order.id}`}>
                            {order.id}
                        </Link></td>
                        <td><Link to={`/products/${order.product_id}`}>
                            {order.product_id}
                        </Link></td>
                        <td><Link to={`/customers/${order.customer_id}`}>
                            {order.customer_name}
                        </Link></td>
                        <td>{new Date(order.order_date).toLocaleDateString()}</td>
                        <td>{order.order_total}</td>
                        <td>{order.shipment_address}</td>
                        <td>{getOrderStatus(order.current_order_status)}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>
    </div>
  )
}
