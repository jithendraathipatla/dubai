import React from "react"
import { css } from "@emotion/core"

const PropertySetup = props => {
  return (
    <div>
      <div css={second}>
        <h4>{props.hetchfour}</h4>
        {props.children}
      </div>
    </div>
  )
}

export default PropertySetup

const second = css`
  margin: 10px 10%;
  text-align: justify;
  svg {
    padding-top: 6px;
  }
  h4 {
    color: black;
    font-size: 18px;
    margin-bottom: 10px;
    font-weight: 500;
  }
`
