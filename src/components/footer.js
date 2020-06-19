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
          <TitleComponent title="Logo" />
          <ul>
            <li><FaPhone/> +91 9999999999</li>
            <li><FaEnvelope/> abcd@gmail.com </li>
            <li><FaLocationArrow/> Dubai, 001020, Mount blue Plaza, Saudi Arabia </li>  
          </ul>
        </div>
        <div>
          <TitleComponent title="Quick Links" />
          <ul>
            <li>Business Consulting</li>
            <li>Finacial Reporting And Consulting</li>
            <li>Legal Consulting And Advisory</li>
            <li>Sales - Consulting And Planning</li>
            <li>Technology Consulting</li>
            <li>HR Consulting</li>
            <li>Interior Design Consulting</li>
            <li>Regulatory Compliances and Licensing</li>
            <li>Marketing - Advisory and Consulting</li>
            <li>Others</li>
          </ul>
        </div>
        <div>
          <TitleComponent title="Quick Links" />
          <ul>
            <li>FAQ`s</li>
            <li>General</li>
            <li>Become a Mentor</li>
            <li>Become a Mentee</li>
            <li>Blogs</li>
            <li>News and Media</li>
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
  background: #111;
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
  background: no-repeat padding-box #1e1e1e;
  color: #b6b6b6;
  grid-gap: 30px;
  padding: 10px 50px;
  
  div{
    margin-left:10px;
    ul{
      margin-left:10px;
    }
  }
  
`
