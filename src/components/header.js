import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import Logo from "../images/logo.jpeg"
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
                <a className="navbar-link is-arrowless">UAE Company Setup</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/uaemainland" activeClassName="active">
                   UAE Main Land
                  </Link>

                  <Link to="/uae-free-zones" activeClassName="active">
                   UAE Free zones
                  </Link>

                  <Link to="/uae-off-shores" activeClassName="active">
                   UAE Off Shores
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">UAE Packages</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/view-all-packages" activeClassName="active">
                    View All Packages
                  </Link>
                  <Link to="/dubai-packages" activeClassName="active">
                    Dubai
                  </Link>
                  <Link to="/abu-dha-bi-packages" activeClassName="active">
                    Abu Dhabi
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Sharjah
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Fujairah
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Ras Al Khaimah
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Umm Al Qwain
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">UAE Services</a>

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
                  <Link to="/bank-assistance" activeClassName="active">
                    Property Services
                  </Link>
                </div>
              </div>

              

              <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-arrowless">UAE Properties</a>

              <div className="navbar-dropdown" css={final}>
                <Link to="/properties-for-sale" activeClassName="active">
                  Properties for Sale
                </Link>
                <Link to="/properties-for-rent" activeClassName="active">
                  Properties for Rent
                </Link>
                <Link to="/property-leasing" activeClassName="active">
                Property Leasing
                </Link>
                <Link to="/properties-business-centers" activeClassName="active">
                 Business Centers
                </Link>
                <Link to="/properties-smart-desks" activeClassName="active">
                 Smart Desks
                </Link>
              </div>
            </div>

            <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">UK Company Setup</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/uaemainland" activeClassName="active">
                   UK Main Land
                  </Link>

                  <Link to="/uae-free-zones" activeClassName="active">
                   UK Free zones
                  </Link>

                  <Link to="/uae-off-shores" activeClassName="active">
                   UK Off Shores
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">UK Packages</a>

                <div className="navbar-dropdown" css={final}>
                  <Link to="/view-all-packages" activeClassName="active">
                    View All Packages
                  </Link>
                  <Link to="/dubai-packages" activeClassName="active">
                    Dubai
                  </Link>
                  <Link to="/abu-dha-bi-packages" activeClassName="active">
                    Abu Dhabi
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Sharjah
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Fujairah
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Ras Al Khaimah
                  </Link>
                  <Link to="/sharja-packages" activeClassName="active">
                    Umm Al Qwain
                  </Link>
                </div>
              </div>

              <div className="navbar-item has-dropdown is-hoverable">
                <a className="navbar-link is-arrowless">UK Services</a>

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
                  <Link to="/bank-assistance" activeClassName="active">
                    Property Services
                  </Link>
                </div>
              </div>

              

              <div className="navbar-item has-dropdown is-hoverable">
              <a className="navbar-link is-arrowless">UK Properties</a>

              <div className="navbar-dropdown" css={final}>
                <Link to="/business-centers" activeClassName="active">
                  Properties for Sale
                </Link>
                <Link to="/offices-for-rent" activeClassName="active">
                  Properties for Rent
                </Link>
                <Link to="/smart-desks" activeClassName="active">
                Property Leasing
                </Link>
                <Link to="/business-centers" activeClassName="active">
                 Business Centers
                </Link>
                <Link to="/smart-desks" activeClassName="active">
                 Smart Desks
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
    font-size: 13px;
  color: white;
  letter-spacing: 0.8px;
  width: -webkit-max-content;
  width: -moz-max-content;
  width: max-content;
  :hover{
    color: white !important;
    opacity: 0.7;
  }
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
