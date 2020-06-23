import React from "react"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
import FirstSliderImage from "../images/mainimage.jpg"
import { css } from "@emotion/core"
import { GiAerialSignal,GiSatelliteCommunication, GiArmoredBoomerang } from "react-icons/gi"


const Slider = () => {
  return (
    <div>
      <div style={{ position: "relative", marginTop:"55px", marginBottom:"-130px" }}>
        <div css={first}>
         <img src={FirstSliderImage}/>
        </div>
        <br/>
        <div css={two}>
          <div>
           
          </div>
          <div css={card}>
           
            <h1>Start Your Business in UK</h1>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Slider

const first = css`
 img{
   height: 55vh;
   width:100%;
   object-fit: cover;
 }
`
const two = css`
  display:grid;
  grid-template-columns: 4fr 4fr 4fr;
  margin: 0px 40px;
  position: absolute;
  top: 30%;
  z-index: 40;
`
const card = css`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  background-color: #00000070;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  margin: 0px 50px;
  text-align: center;
  padding:10px 4px;
  svg{
    height: 75px;
    width: 100%;
    color: black;
  }
  h1{
    font-size: 20px;
    font-weight: 500;
    color: #ffff;
    margin-top:7px;
    padding:0px 40px;
    padding-bottom:10px;
  }
  
`
