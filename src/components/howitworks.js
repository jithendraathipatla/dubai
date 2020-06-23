import React from "react"
import { css } from "@emotion/core"
import Titlecomponent from "../components/title"
import { GiTeamIdea } from "react-icons/gi"
import { BsPersonCheckFill } from "react-icons/bs"
import { RiCustomerService2Line } from "react-icons/ri"

const HowitWorks = () => {
  return (
      <>
    <div style={{ textAlign: "center" }}>
    <Titlecomponent title="Start Your Business In London Today" />
  </div>
    <div css={main}>
      
      <div css={content}>
        <div>
          <GiTeamIdea />
          <h1>Send us a quick enquiry</h1>
          <h2>Look for your query to be solved</h2>
          <br/>
          <div style={{textAlign:"center", border:"none", padding:"10px 0px"}}>
           <button className="button is-link is-small">Quick Enquiry</button>
          </div>
        </div>
        <div>
          <BsPersonCheckFill />
          <h1>Book an Apointment</h1>
          <h2>Select from top 20+ highly Professional Mentors</h2>
          <br/>
          <div style={{textAlign:"center", border:"none", padding:"10px 0px"}}>
          <button className="button is-link is-small">Book Appointment</button>
         </div>
        </div>
        <div>
          <RiCustomerService2Line />
          <h1>Speak to a Business Consultant</h1>
          <h2>Book an appointment and start the session</h2>
          <br/>
          <div style={{textAlign:"center", display:"flex", justifyContent:"space-around", border:"none", padding:"10px 0px"}}>
          <button className="button is-link is-small">Call Now</button>
          <button className="button is-link is-danger is-small">What`s app</button>
         </div>
        </div>
       
      </div>
    </div>
    </>
  )
}

export default HowitWorks

const main = css`
margin: 0px 4%;
padding:30px;
`

const content = css`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  div {
    text-align: center;
    h1 {
      font-size: 19px;
      font-weight: 500;
      color: black;
      margin-top: 7px;
    }
    h2 {
      font-size: 16px;
      margin-top: 7px;
      margin-bottom: 10px;
    }
    svg {
      height: 75px;
      width: 100%;
      color: black;
    }
  }
  div {
    border: 1px solid #eeee;
    position: relative;
    padding:30px 10px;
    :nth-child(1){
      background: #ffeb3b;
    }
    :nth-child(2){
      background: #00e8ff8f;
    }
    :nth-child(3){
      background: gold;
    }
  }
`

