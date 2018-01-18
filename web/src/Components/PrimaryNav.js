import React, { Fragment } from 'react'

import { Link } from 'react-router-dom'

function PrimaryNav({
  signedIn
  }) {
  return (
    <nav className="primary">
      <h2>The below is using the concept of menu to navigate to all the Components you want by using Link to='/url'>' after setting up Router/Switch/Route in the SPA page/i.e. App.js where all the main components are sitting here</h2>
      <h2>Therefore, we can turn off the PrimaryNav Components off and We can also use import {Link} from 'react-route-dom' into the Components to link to another Components you want using link <Link to="/url">XXX</Link> </h2>
      <ul>
        <li>
          <Link className='active' to="/">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        {signedIn ? (
          <Fragment>
            <li>
              <Link to="/delivery">Delivery</Link>
            </li>
            <li>
              <Link to="/products">Product</Link>
            </li>
          </Fragment>
        ) : (
            <Fragment>
              <li>
                <Link to="/signin">Sign In</Link>
              </li>
              <li>
                <Link to="/signup">Sign Up</Link>
              </li>
            </Fragment>
          )}
      </ul>
    </nav>
  );
}

export default PrimaryNav;