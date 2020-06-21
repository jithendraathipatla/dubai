import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import FirstSliderImage from "../images/gatsby-astronaut.png"
import SecondSliderImage from "../images/gatsby-astronaut.png"
import ThirdSliderImage from "../images/gatsby-astronaut.png"
import { css } from "@emotion/core"
import { GiAerialSignal,GiSatelliteCommunication, GiArmoredBoomerang } from "react-icons/gi"

const AutoplaySlider = withAutoplay(AwesomeSlider)

const Slider = () => {
  return (
    <div>
      <div style={{ position: "relative", marginTop:"80px", marginBottom:"-115px" }}>
        <div>
         <img src="https://d329jirxh7znrd.cloudfront.net/app/wp-content/uploads/sites/281/2019/08/home-banner.png"/>
        </div>

        <div css={two}>
          <div css={card}>
            <GiAerialSignal />
            <h1>Mentors with global expertise</h1>
            <h2>Reach out to the mentors from various areas of business, from all parts of the world</h2>
          </div>
          <div css={card}>
            <GiSatelliteCommunication />
            <h1>Easy Communication Ways</h1>
            <h2>Easily connect with your mentor through LIVE CHAT, VOICE CALL or VIDEO CALL</h2>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Slider

const slidercss = css`
  height: 80vh;
  @media (max-width: 600px) {
    height: 33vh;
  }
`
const two = css`
  display:grid;
  grid-template-columns: 4fr 4fr 4fr;
  margin: 0px 40px;
  position: absolute;
  top: 10%;
  z-index: 40;
`
const card = css`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 0px 50px;
  text-align: center;
  padding:10px 4px;
  svg{
    height: 75px;
    width: 100%;
    color: #0c2be9;
  }
  h1{
    font-size: 19px;
    font-weight: 500;
    color: black;
    margin-top:7px;
  }
  h2{
      font-size: 16px;
      margin-top:7px;
      margin-bottom: 10px;
  }
`
