import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Logo from "../images/logo.jpg"
import "../components/layout.css"

const Header = () => {
  return (
    <div css={abx}>
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div css={abc}>
          <div class="navbar-brand">
            <a class="navbar-item">
              <Link to="/">
                {" "}
                <img
                  src={Logo}
                  style={{ height: "fit-content", width: "120px" }}
                />
              </Link>
            </a>
          </div>

          <div id="navbarBasicExample" class="navbar-menu">
            <a class="navbar-item">
              <Link to="/">
                Home
              </Link>
            </a>
            <div class="navbar-start">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">Company Setup</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">
                    <Link to="/uaemainland">UAE Main Laind</Link>
                  </a>
                  <a class="navbar-item">
                    <Link to="/uae-free-zones">UAE Free zones</Link>
                  </a>
                  <a class="navbar-item">UAE Off Shores</a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">Packages</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">View All Packages</a>
                  <a class="navbar-item">Dhubai</a>
                  <a class="navbar-item">Abu Dhabi</a>
                  <a class="navbar-item">Sharja</a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">Services</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">Business Licences</a>
                  <a class="navbar-item">Business Sponser Servies</a>
                  <a class="navbar-item">Pro Services</a>
                  <a class="navbar-item">Business Activities</a>
                  <a class="navbar-item">Bank Assistance</a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">Offices</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">Business Centers</a>
                  <a class="navbar-item">Offices for Rent</a>
                  <a class="navbar-item">Smart Desks</a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">What`s new</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">Blog</a>
                  <a class="navbar-item">News and Events</a>
                  <a class="navbar-item">Press Release</a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">About</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item">What is Sevago?</a>
                  <a class="navbar-item">Chairman`s Profile</a>
                  <a class="navbar-item">Why Sevago?</a>
                  <a class="navbar-item">Testimonials</a>
                </div>
              </div>
              <a class="navbar-item">
                <Link to="/contact">
                  Contact US
                </Link>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

const abc = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`

const logo = css`
  img {
    height: 67px;
  }
`

const two = css`
  span {
    a {
      margin-left: 34px;
      font-size: 20px;
      letter-spacing: 0.5px;
      padding-bottom: 16px;
      :hover {
        cursor: pointer;
        color: #3273dc8f;
      }
    }
  }
`

const abx = css`
  position: fixed;
  padding: 0px 1%;
  margin: 0px;
  z-index: 99;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
`