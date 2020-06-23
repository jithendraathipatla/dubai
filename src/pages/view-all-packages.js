import React from "react"
import SecondHOC from "../components/HOC/allpages"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import { FaCheck } from "react-icons/fa"

const Allpackages = () => {
  const dubai = [
    { name: "Free Business Setup Consultation" },
    { name: "Dedicated Consultant" },
    { name: "DED License Fees" },
    { name: "Registration Fees" },
    { name: "Office Space*" },
    { name: "UAE Service Agent" },
    { name: "Stamp of The Company" },
    { name: "Complete Documentation" },
  ]
  const dubai_display = () => {
    return dubai.map((item, i) => {
      return (
        <div key={i} css={one}>
          <div><FaCheck/></div> 
          <div>{item.name}</div>
        </div>
      )
    })
  }

  return (
    <LayoutComponent>
       <div css={landing}>
        <h1>All Packages in London(United Kingdom)</h1>
       </div>
      <div>
        <SecondHOC title="All Packages in United Kingdom">
        <br/>
            <div css={main}>
              <div style={{background:"#eeee"}}>
                <div css={secondmain}><h1>Dubai</h1></div>
                <div css={thirdmain}>
                  <h1>ADE 15,500*</h1>
                  <span>First Year</span>
                </div>
                {dubai_display()}
                <br/>
                <div style={{textAlign:"center"}}>
                  <button className="button is-link">
                    Book a Consultation
                  </button>
                </div>
              </div>
              <div style={{background:"#eeee"}}>
              <div css={secondmain}><h1>Abu dhabi</h1></div>
              <div css={thirdmain}>
                <h1>ADE 25,500*</h1>
                <span>First Year</span>
              </div>
              {dubai_display()}
              <br/>
              <div style={{textAlign:"center"}}>
                <button className="button is-link">
                  Book a Consultation
                </button>
              </div>
             
              </div>
              <div style={{background:"#eeee"}}>
              <div css={secondmain}><h1>Sharja</h1></div>
              <div css={thirdmain}>
                <h1>ADE 11,500*</h1>
                <span>First Year</span>
              </div>
              {dubai_display()}
              <br/>
              <div style={{textAlign:"center"}}>
                <button className="button is-link">
                  Book a Consultation
                </button>
              </div>
              
              </div>
              <div style={{background:"#eeee"}}>
              <div css={secondmain}><h1>Ajman</h1></div>
              <div css={thirdmain}>
                <h1>ADE 10,500*</h1>
                <span>First Year</span>
              </div>
              {dubai_display()}
              <br/>
              <div style={{textAlign:"center"}}>
                <button className="button is-link">
                  Book a Consultation
                </button>
              </div>
              
              </div>
            </div>
            <br/>
            Planning on company registration in Dubai freezone? Dubai offers
            more than 20 freezones and has some of the most prestigious
            freezones in the UAE. Dubai freezones offer world-class business
            amenities, options such as flexi-desk and flexi-office setups, great
            infrastructure, access to freehold property and complete privacy to
            investors with limited reporting obligations. While Dubai free zone
            business setup allows you to enjoy all the benefits of no taxation
            and import duty exemptions that mainland Dubai companies enjoy, it
            also gives you the benefit of 100% ownership over your company.
            However, with freezone business setup in Dubai you can do business
            internationally and not within the country. In case you want to
            conduct business within UAE, you can simply partner with a local
            distributor and you will be free to trade within UAE as well, speak
            to a consult for free to know your options.
        </SecondHOC>
      </div>
    </LayoutComponent>
  )
}

export default Allpackages

const landing = css`
 background:url("https://www.shuraa.com/wp-content/uploads/2020/04/Company-Setup.jpg");
 height: 370px;
 width: 100%;
 margin-bottom:-3%;
 h1{
  color: white;
  padding-top: 14%;
  padding-left: 32%;
  font-size: 30px;
 }
`
const one = css`
 display: flex;
 padding: 7px;
 border-bottom: 1px solid white;
 :nth-child(10){
   border-bottom:none;
 }
 svg{
   margin-right:10px;
   border-radius:50%;
   border: 1px solid #ffff;
   padding:2px;
   background:white;
   margin-top:5px;
 }

`
const secondmain = css`
 background: #5a7e84;
 padding:20px 0px;
 text-align: center;
 h1{
   color: white;
   font-size: 30px;
 }
`

const thirdmain = css`
  text-align: center;
  padding:20px 0px;
  h1{
    font-size: 30px;
    font-weight:600;
  }
  span{
    font-size:20px;
  }
`

const main = css`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-gap:0px 40px;
`
