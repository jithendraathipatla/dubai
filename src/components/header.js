import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Logo from "../images/logo.jpg"
import "../components/layout.css"

const Header = () => {
  return (
    <div css={abx}>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div css={abc}>
          <div className="navbar-brand">
            <a className="navbar-item">
              <Link to="/">
                {" "}
                <img
                  src={Logo}
                  style={{ height: "fit-content", width: "120px" }}
                />
              </Link>
            </a>
          </div>

          <div id="navbarBasicExample" className="navbar-menu">
            <a className="navbar-item">
              <Link to="/" activeClassName="active">
                Home
              </Link>
            </a>
            <div className="navbar-start">
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Company Setup</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item">
                    <Link to="/uaemainland" activeClassName="active">London Main Laind</Link>
                  </a>
                  <a className="navbar-item">
                    <Link to="/uae-free-zones" activeClassName="active" className="navbar-item">London Free zones</Link>
                  </a>
                  <a className="navbar-item">
                  <Link to="/uae-off-shores" activeClassName="active">London Off Shores</Link>
                </a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Packages</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item"><Link to="/view-all-packages" activeClassName="active">View All Packages</Link></a>
                  <a className="navbar-item"><Link to="/dubai-packages" activeClassName="active" className="navbar-item">Dhubai</Link></a>
                  <a className="navbar-item"><Link to="/abu-dha-bi-packages" activeClassName="active">Abu Dhabi</Link></a>
                  <a className="navbar-item"><Link to="/sharja-packages" activeClassName="active" className="navbar-item">Sharja</Link></a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Services</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item"><Link to="/business-licenses" activeClassName="active">Business Licences</Link></a>
                  <a className="navbar-item"><Link to="/business-sponsor-services" activeClassName="active" className="navbar-item">Business Sponser Servies</Link></a>
                  <a className="navbar-item"><Link to="/pro-services" activeClassName="active">Pro Services</Link></a>
                  <a className="navbar-item"><Link to="/business-activities" activeClassName="active" className="navbar-item">Business Activities</Link></a>
                  <a className="navbar-item"><Link to="/bank-assistance" activeClassName="active">Bank Assistance</Link></a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Offices</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item"><Link to="/business-centers" activeClassName="active">Business Centers</Link></a>
                  <a className="navbar-item"><Link to="/offices-for-rent" activeClassName="active" className="navbar-item">Offices for Rent</Link></a>
                  <a className="navbar-item"><Link to="/smart-desks" activeClassName="active">Smart Desks</Link></a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">What`s new</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item"><Link to="/blog" activeClassName="active">Blog</Link></a>
                  <a className="navbar-item"><Link to="/news-and-events" activeClassName="active" className="navbar-item">News and Events</Link></a>
                  <a className="navbar-item"><Link to="/press-release" activeClassName="active" >Press Release</Link></a>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">About</a>

                <div className="navbar-dropdown">
                  <a className="navbar-item"><Link to="/what-is-sevago" activeClassName="active">What is Sevago?</Link></a>
                  <a className="navbar-item"><Link to="/chairman" activeClassName="active" className="navbar-item">Chairman`s Profile</Link></a>
                  <a className="navbar-item"><Link to="/why-sevago" activeClassName="active">Why Sevago?</Link></a>
                  <a className="navbar-item"><Link to="/testimonials" activeClassName="active" className="navbar-item">Testimonials</Link></a>
                </div>
              </div>
              <a className="navbar-item">
                <Link to="/contact" activeClassName="active">
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