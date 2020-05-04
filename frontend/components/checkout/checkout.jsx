import React from 'react';
import { Link } from 'react-router-dom'
import CheckoutRow from './checkout_row'
export default class Checkout extends React.Component {
  componentDidMount() {
    const { fetchBox, currentUser } = this.props;
    fetchBox(currentUser);
  }

  finalize(price, user_id) {
    this.props.createOrder({ price, user_id }).then(this.props.history.push("/orders"));
  }

  render() {
    const { inclusions, products, box, currentUser } = this.props;
    const boxRows = [];
    for (let i = 0; i < inclusions.length; i++) {
      boxRows.push({ ...products[i], ...inclusions[i] });
    }
    return (
      <div id="checkout-main">
        <div id="checkout-header">
          <div id="phantom" />
          <h1>Order-summary</h1>
        </div>
        <ul id="item-list">
          {boxRows.map((row) => (
            <CheckoutRow
              key={row.id}
              row={row}
            />
          ))}
        </ul>
        <div id="checkout-footer">
          <div id="checkout-total">Order Total: ${box.price}.00</div>
        </div>
        <button
          onClick={() => this.finalize(box.price, currentUser)}
          id="finish-checkout-button"
          type="submit"
        >
          FINALIZE ORDER
        </button>

      </div>
    );
  }
}