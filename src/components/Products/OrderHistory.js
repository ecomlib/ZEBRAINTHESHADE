import React from 'react'

const OrderHistory = props => {
  console.log(props.user.orderHistory)
  const orderHistory = props.user.orderHistory.map(order => (
    <div key={order.productId}>
      <div className='item-box'>
        <div className='itemImg'>
          <img src={order.imageUrl} alt={order.name} />
        </div>
        <p className='amount'>Name: {order.name}</p>
        <p className='amount' >Price:<span>$</span>{order.price}</p>
        <p className='amount'>Order Date: {order.createdAt}</p>
        <p className='amount'>receip: {order.receiptNumber}</p>
      </div>
    </div>
  ))
  return (
    <div>
      {orderHistory}
    </div>
  )
}
export default OrderHistory
