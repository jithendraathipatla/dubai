import React from "react"
import TitleComponent from "../title"
import { css } from "@emotion/core"
import LocationComponent from "../contactus"
import { Link } from "gatsby"
import {FaBackward} from 'react-icons/fa'

const BusinessSetup = props => {
  return (
    <div>
      <div css={main}>
        <h1>{props.main}</h1>
        <p>{props.submain}</p>
      </div>

      <div css={second}>
        <h4>{props.hetchfour}</h4>

        {props.children}
      </div>
    </div>
  )
}

export default BusinessSetup

const main = css`
  background: url("https://www.shuraa.com/wp-content/uploads/2020/04/Business-Setup-in-Deira-Dubai.jpg");
  height: 300px;
  width: 100%;
  padding-top: 10%;
  text-align: center;
  color: white;
  h1 {
    font-size: 50px;
    margin-bottom: 8px;
  }
`

const second = css`
  margin: 10px 10%;
  text-align: justify;
  svg{
    padding-top: 6px;
  }
  h4 {
    color: black;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`
