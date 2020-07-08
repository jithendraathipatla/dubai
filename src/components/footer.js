import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaPhone, FaEnvelope, FaLocationArrow } from "react-icons/fa"
import TitleComponent from "../components/title"

const footer = () => {
  return (
    <div>
      <div css={main}>
        <div>
          <TitleComponent title="Sevago PVT Ltd" />
          <ul>
            <li><FaPhone/> +91 9999999999</li>
            <li><FaEnvelope/> info@sevago.com </li>
            <li><FaEnvelope/> Majid@sevago.com  </li>
            <li><FaLocationArrow/> London, 001020, Mount blue Plaza, United Kingdom </li>  
          </ul>
        </div>
        <div>
          <TitleComponent title="Quick Links" />
          <ul>
            <li>Company Formation & Licensing</li>
            <li>Property Rent & Buy Services</li>
            <li>Pro Services</li>
            <li>Banking Assistance</li>
            <li>Investor Rights Protection</li>
            <li>Value Added Services</li>
          </ul>
        </div>
        <div>
          <TitleComponent title="Menu" />
          <ul>
            <li>Company Setup</li>
            <li>Packages</li>
            <li>Services</li>
            <li>Offers</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div>
          <div>
            <TitleComponent title="Follow us on:" />
          </div>

          <div  css={last}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
      </div>
      <div css={lastl}>
        Copyright © {new Date().getFullYear()} New Business Mentors. All rights
        reserved Privacy Policy Terms and Condition.
      </div>
    </div>
  )
}

export default footer

const lastl = css`
  color: white;
  text-align: center;
  background: #131A22;
  padding: 10px;
  span {
    display: block;
  }
`

const last = css`
  display: flex;
  margin-left:40px;
  svg {
    color: white;
    font-size: 33px;
    padding-right: 10px;
    margin-left: 10px;
  }
`

const main = css`
  display: grid;
  grid-template-columns: 4fr 3fr 2fr 3fr;
  background: no-repeat padding-box #232F3E;
  color: #DDD;
  grid-gap: 30px;
  padding: 10px 50px;
  
  div{
    margin-left:10px;
    ul{
      margin-left:10px;
      li{
        line-height:26px;
      }
    }
  }
  
`
