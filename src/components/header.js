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
                  <a class="navbar-item">
                  <Link to="/uaemainland">UAE Off Shores</Link>
                </a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">Packages</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item"><Link to="/view-all-packages">View All Packages</Link></a>
                  <a class="navbar-item"><Link to="/dubai-packages">Dhubai</Link></a>
                  <a class="navbar-item"><Link to="/abu-dha-bi-packages">Abu Dhabi</Link></a>
                  <a class="navbar-item"><Link to="/sharja-packages">Sharja</Link></a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">Services</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item"><Link to="/business-licenses">Business Licences</Link></a>
                  <a class="navbar-item"><Link to="/business-sponsor-services">Business Sponser Servies</Link></a>
                  <a class="navbar-item"><Link to="/pro-services">Pro Services</Link></a>
                  <a class="navbar-item"><Link to="/business-activities">Business Activities</Link></a>
                  <a class="navbar-item"><Link to="/bank-assistance">Bank Assistance</Link></a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">Offices</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item"><Link to="/business-centers">Business Centers</Link></a>
                  <a class="navbar-item"><Link to="/offices-for-rent">Offices for Rent</Link></a>
                  <a class="navbar-item"><Link to="/smart-desks">Smart Desks</Link></a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">What`s new</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item"><Link to="/blog">Blog</Link></a>
                  <a class="navbar-item"><Link to="/news-and-events">News and Events</Link></a>
                  <a class="navbar-item"><Link to="/press-release">Press Release</Link></a>
                </div>
              </div>

              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link is-arrowless">About</a>

                <div class="navbar-dropdown">
                  <a class="navbar-item"><Link to="/what-is-sevago">What is Sevago?</Link></a>
                  <a class="navbar-item"><Link to="/chairman">Chairman`s Profile</Link></a>
                  <a class="navbar-item"><Link to="/why-sevago">Why Sevago?</Link></a>
                  <a class="navbar-item"><Link to="/testimonials">Testimonials</Link></a>
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