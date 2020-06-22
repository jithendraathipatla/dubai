import React from "react"
import TitleComponent from "../title"
import { css } from "@emotion/core"

const Dubaimainland = () => {
  const data = [
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
    {
      img: "Image 1",
      paragraph: "sdfh dsjfh i am from the apartment",
    },
  ]

  const display = () => {
    return data.map((item, i) => {
      return (
        <div key={i} css={card}>
          <img src="https://www.shuraa.com/wp-content/uploads/2019/09/sheikh-zayed-dubai-uae.jpg"/>
          <span>{item.img}</span>
          <span>{item.paragraph}</span>
          <br/>
          <br/>
          <div style={{textAlign:"center"}}>
          <button className="button is-link is-small">More</button>
          </div>
        </div>
      )
    })
  }
  return (
    <div>
      <div css={main}>
        <h1>Company Spaces from Abu Dha Bi Main Land</h1>
      </div>
       <br/>
      <div css={sty}>{display()}</div>
    </div>
  )
}

export default Dubaimainland

const main = css`
  text-align: center;
  min-height: 301px;
  color: white;
  background: url("https://www.shuraa.com/wp-content/uploads/2020/04/Business-setup-in-mainland-1.jpg");
  h1{
    font-size: 30px;
    padding-top: 12%;
  }
`

const sty = css`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-gap: 30px;
`
const card = css`
  border: 1px solid #eeee;
  border-radius: 2px;
`
