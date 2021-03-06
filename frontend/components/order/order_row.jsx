import React from 'react';

const OrderRow = (props) => {

  const { row } = props;
  const { name, price, quantity, imgUrl } = row;

  return (
    <li className="box-row order-show-row">
      <img className="box-row-image" src={imgUrl} alt="" />
      <div className="box-row-details">
        <div className="box-row-name" >{name}</div>
        <div className="box-row-quantity" >Quantity: {quantity}</div>
      </div>
      <div className="box-row-price">
        <div>${price}.00</div>
      </div>
    </li>
  );
};

export default OrderRow;