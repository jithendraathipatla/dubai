import React from "react"
import { css } from "@emotion/core"
import { Link } from "gatsby"

const Header = () => {
  return (
    <div css={abx}>
      <div>
        <h1>logo</h1>
      </div>
      <div css={two}>
        <span>
          <Link to="/" activeClassName="active">Home</Link>
        </span>
        <span>
          <Link to="/mentor" activeClassName="active">Find a Mentor</Link>
        </span>
        <span>
          <Link to="/faq" activeClassName="active">FAQ's</Link>
        </span>
        <span>
          <Link to="/blog" activeClassName="active">Blogs</Link>
        </span>
        <span>
          <Link to="/event" activeClassName="active">Events and Workshops</Link>
        </span>
        <span>
          <Link to="/contact" activeClassName="active">Contact</Link>
        </span>
      </div>
    </div>
  )
}

export default Header

const two = css`
  span {
    a {
      margin-left: 34px;
      font-size: 20px;
      letter-spacing: 0.5px;
      padding-bottom:16px;
      :hover{
        cursor: pointer;
        color:#3273dc8f;
      }
    }
  }
`

const abx = css`
  position: fixed;
  padding: 17px 1%;
  margin: 0px;
  z-index: 99;
  width: 100%;
  background: white;
  box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-between;
`
