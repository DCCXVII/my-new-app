import React from "react";
import "./Header.css";

function Header(props) {
  return (
    <div>
      <header>
        {/* Logo */}
        <h2 className="logo">
          <a href="#">Yougik</a>
        </h2>

        {/* Search bar
        <div className="cta-div">
          <a className="cta" href="#"></a>
          <form>
            <input type="search" placeholder="Search Course..." />
          </form>
        </div> */}

        <nav>
          <ul className="nav-links">
            {/* Home */}
            <li className="linka">
              <a href="#Courses">
                <div className="icon">
                  <i class="fa fa-home"aria-hidden="true"></i>
                </div>
                <div>Home</div>
              </a>
            </li>

            {/* Courses */}
            <li className="linka">
              <a href="#Courses">
                <div className="icon">
                  <i className="fa fa-play-circle-o"aria-hidden="true"></i>
                </div>
                <div>Courses</div>
              </a>
            </li>

            {/* Cart */}
            <li className="linka">
              <a href="#about">
                <div className="icon">
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                </div>
                <div>Cart</div>
              </a>
              <ul className="dropdown">
                <li>
                  <a href="#">Empty</a>
                </li>
                <li>
                  <div>
                    <span className="price-span" id="total">
                    Total:
                    </span>
                    <span className="price-span" id="price">
                      99.00$  
                    </span>
                    <span className="price-span" id="crossed-price">
                      0.00$
                    </span>
                    <button className="cart-checkout-btn">
                      Go to checkout  <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </button>
                  </div>
                </li>
              </ul>
            </li>

            {/* Profile */}

            <li className="linka">
              <a href="#about">
                <div className="icon" id="profile">
                  
                  <img
                    src="https://res.cloudinary.com/dev-empty/image/upload/v1661230727/rquq94qv4bpuvf7xnxyh.jpg"
                    alt="Smith"
                    className="img-avatar"
                  />
                </div>
                <div>Profile</div>
              </a>
              <ul className="dropdown d2">
                <li>
                  <div class="user-info">
                    <img
                      src="https://res.cloudinary.com/dev-empty/image/upload/v1661230727/rquq94qv4bpuvf7xnxyh.jpg"
                      alt="Smith"
                    />
                    <div class="info">
                      <span class="name">User Name</span>
                      <span class="email">user@example.com</span>
                    </div>
                  </div>
                </li>

                <li>
                  <a>
                    <div class="container">
                      <i class="fa fa-book" aria-hidden="true"></i>
                      <span class="name">My Courses</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a>
                    <div class="container">
                      <i class="fa fa-plus-square-o"aria-hidden="true"></i>
                      <span class="name">Create New Courses</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a>
                    <div class="container">
                      <i class="fa fa-book"aria-hidden="true"></i>
                      <span class="name">My Learning</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a>
                    <div class="container">
                      <i class="fa fa-credit-card"aria-hidden="true"></i>
                      <span class="name">My Purchase</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a>
                    <div class="container">
                      <i class="fa fa-heart"aria-hidden="true"></i>
                      <span class="name">My Whishlist</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="container">
                      <i class="fa fa-cog"aria-hidden="true"></i>
                      <span class="name">Profile Settings</span>
                    </div>
                  </a>
                </li>

                <li>
                  <a href="#">
                    <div class="container">
                      <i class="fa fa-sign-out"aria-hidden="true"></i>
                      <span class="name">Sign out</span>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>

        <div className="lines">
          <div className="line" />
          <div className="line" />
          <div className="line" />
        </div>


      </header>
    </div>
  );
}

export default Header;
