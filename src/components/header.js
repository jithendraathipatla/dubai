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
            <div className="navbar-start">
              
                <Link to="/" activeClassName="active" className="navbar-item">
                  Home
                </Link>
              
              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Company Setup</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/uaemainland" activeClassName="active">
                    London Main Land
                  </Link>

                  <Link to="/uae-free-zones" activeClassName="active">
                    London Free zones
                  </Link>

                  <Link to="/uae-off-shores" activeClassName="active">
                    London Off Shores
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Packages</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/view-all-packages" activeClassName="active">
                    View All Packages
                  </Link>
                  <Link to="/dubai-packages" activeClassName="active">
                    Dhubai
                  </Link>
                  <Link to="/abu-dha-bi-packages" activeClassName="active">
                    Abu Dhabi
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Sharja
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Services</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/business-licenses" activeClassName="active">
                    Business Licences
                  </Link>
                  <Link
                    to="/business-sponsor-services"
                    activeClassName="active"
                  >
                    Business Sponser Servies
                  </Link>
                  <Link to="/pro-services" activeClassName="active">
                    Pro Services
                  </Link>
                  <Link to="/business-activities" activeClassName="active">
                    Business Activities
                  </Link>
                  <Link to="/bank-assistance" activeClassName="active">
                    Bank Assistance
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">Offices</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/business-centers" activeClassName="active">
                    Business Centers
                  </Link>
                  <Link to="/offices-for-rent" activeClassName="active">
                    Offices for Rent
                  </Link>
                  <Link to="/smart-desks" activeClassName="active">
                    Smart Desks
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">What`s new</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/blog" activeClassName="active">
                    Blog
                  </Link>
                  <Link to="/news-and-events" activeClassName="active">
                    News and Events
                  </Link>
                  <Link to="/press-release" activeClassName="active">
                    Press Release
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">About</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/what-is-sevago" activeClassName="active">
                    What is Sevago?
                  </Link>
                  <Link to="/chairman" activeClassName="active">
                    Chairman`s Profile
                  </Link>
                  <Link to="/why-sevago" activeClassName="active">
                    Why Sevago?
                  </Link>
                  <Link to="/testimonials" activeClassName="active">
                    Testimonials
                  </Link>
                </div>
              </div>
            
              <Link to="/contact" activeClassName="active" className="navbar-item" style={{marginRight:"10px"}}>
                Contact US
              </Link>
          
            </div>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header

const final = css`
 a{
  display: block;
  margin: 2px 10px;
  margin-bottom: 9.5px;
  font-size: 16px;
  color: black;
  letter-spacing: 0.8px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
 }
`

const abc = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
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
