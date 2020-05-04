/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = (props) => {
  const loginButton = <Link className="auth-link" id="login-link" to="/login">Sign In</Link>;
  const orders = <Link className="auth-link" id="order-link" to="/orders">Your Orders</Link>;
  const logoutButton = <button type="submit" className="auth-link" onClick={props.logout}>Log Out</button>;
  const toggleShow = () => ((props.searchDisplay) ? props.hideSearch() : props.showSearch())
  return (
    <div>
      <div id="navbar-options">
        <div className="auth-link-div">
          <span id="gear-span">&#9881;</span>
          {(props.currentUser !== undefined) ? logoutButton : loginButton}
          {(props.currentUser !== undefined) ? orders : null}
        </div>
        <div onClick={() => props.showBox()} className="box-link-div">
          <span id="gear-span">🍱</span>
        </div>
        <div onClick={() => toggleShow()} className="box-link-div">
          <span id="gear-span">🔍</span>
        </div>
      </div>
      {(props.searchDisplay) ? (
        <div id="searchbar"><input type="text" placeholder="Search"/></div>
      ) : null}
    </div>
  );
};
export default Greeting;
