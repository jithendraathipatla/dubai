import React from "react"
import Slider from "react-slick"
import { css } from "@emotion/core"
import TitleComponent from "../components/title"

const SlickDemo = () => {
  const data = [
    {
      name: "Credit and Risk Manger ( A top Financial service firm in UAE)",
      message:
        "I wanted to send you a quick note letting you know what a great job the SEVAGO consultant is doing for our account. He has produced some great analysis and insights regarding our portfolio. The one-on-ones he and I have been having are proving to be very valuable. We have done a poor job of recognizing him for his efforts, but I want to make sure you know we really appreciate everything he does.",
    },

    {
      name: "Vicki Roscoe Erickson, VP Marketing & Communication, TopLine",
      message:
        "The SEVAGO team are ultimate rock stars! They are a highly professional, educated and experienced team that is dedicated to helping their clients achieve success. One of the best teams I have ever worked with – highly responsive, innovative and leverage best practices. From kick-off to project completion, they never miss a beat and are always there to answer questions and provide intelligent insight. Looking forward too many more projects ahead!",
    },
    {
      name:
        "Mohammed Ali, Global Innovation Manager",
      message:
        "I just wanted to let you know that SEVAGO team has been doing a tremendous job on our requests. They are turning things around quickly, coming up with approaches and suggestions on their own and are truly partnering with us on different initiatives. We are deeply appreciative of all their effort and engagement.",
    },
    {
      name: " Manager, Bank in UAE",
      message:
        "I just wanted to let you know what a great job your guy has been doing with the Triggers. We are very excited about the models/segmentation strategy to help us reach our goal of contacting the right the people. This will help us concentrate our efforts and resources and end up incrementally better overall. He has been great at putting everything together, explaining the methodology and continuing to keep up the updated tracking and reporting coming in. Thanks",
    },
  ]

  function display() {
    return data.map((item, i) => {
      return (
        <div key={i} css={message}>
          <span>{item.message}</span>
          <h1>{item.name}</h1>
        </div>
      )
    })
  }

  function wework() {
    return (
      <div>
        <div style={{ textAlign: "center" }}>
          <TitleComponent title="We work closely with government Agencies" />
          <img src="https://www.shuraa.com/wp-content/uploads/2020/05/Government-slide-03.jpg" style={{marginBottom:"-25px"}}/>
        </div>
      </div>
    )
  }

  var settings = {
    dots: true,
  }
  return (
    <div>
      {wework()}
      <hr/>
      <div css={container}>
        <div style={{ textAlign: "center" }}>
          <TitleComponent title="Client  Testimonials"/>
        </div>
        <br />
        <Slider {...settings}>{display()}</Slider>
      </div>
    </div>
  )
}

export default SlickDemo

const container = css`
  padding: 40px;
  padding-top:0px;
  background:white;
  margin-bottom:10px;
`

const message = css`
padding: 21px 6%;
background: #6d549d38;
text-align: justify;
border-radius: 13px;
  h1 {
    text-align: center;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 18px;
  }
  span {
    letter-spacing: 0.5px;
    text-align: justify;
    font-size: 17px;
    line-height: 30px;
  }
`
