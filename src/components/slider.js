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
      <div style={{ position: "relative", marginTop:"44px", marginBottom:"-130px" }}>
        <div css={first}>
         <img src="https://www.fstuae.com/images/banner-3.png"/>
        </div>
        <br/>
        <div css={two}>
          
          <div css={card}>
           
            <h1>Start a business from the safety of your home</h1>
            <span>Get an instant business license, in less than 1 hour, for as low as 15,500* Pounds</span>
            <br/>
            <br/>
            <div style={{display:"flex", justifyContent:"space-around", margin:"0px 28%"}}>
             <button className="button is-link">KNOW MORE</button>
             <button className="button is-link">BOOK A CONSULTATION</button>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Slider

const first = css`
 img{
   height: 75vh;
   width:100%;
   object-fit: cover;
 }
`
const two = css`
  display:grid;
  grid-template-columns: 8fr;
  margin: 0px 40px;
  position: absolute;
  top: 18%;
  z-index: 40;
`
const card = css`
  margin: 0px 50px;
  text-align: center;
  padding:10px 4px;
  svg{
    height: 75px;
    width: 100%;
    color: black;
  }
  h1{
    font-size: 56px;
    font-weight: 500;
    text-transform: uppercase;
    color: #ffff;
    margin-top:7px;
    padding:0px 40px;
    padding-bottom:10px;
    line-height:56px;
  }
  span{
    color: #fff;
    text-align: center;
    font-size: 21px;
    line-height: 1.363157894736842em;
    font-weight: 400;
  }
`
