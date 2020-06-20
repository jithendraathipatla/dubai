import React from "react"
import { css } from "@emotion/core"
import Titlecomponent from "../components/title"
import { GiTeamIdea } from "react-icons/gi"
import { BsPersonCheckFill } from "react-icons/bs"
import { IoMdLaptop } from "react-icons/io"
import { FiChevronRight } from "react-icons/fi"

const HowitWorks = () => {
  return (
      <>
    <div style={{ textAlign: "center" }}>
    <Titlecomponent title="How it Works ?" />
  </div>
    <div css={main}>
      
      <div css={content}>
        <div>
          <GiTeamIdea />
          <h1>Select a business problem</h1>
          <h2>Look for your query to be solved</h2>
          <div css={right}>
            <FiChevronRight />
          </div>
        </div>
        <div>
          <BsPersonCheckFill />
          <h1>Choose a Mentor</h1>
          <h2>Select from top 20+ highly Professional Mentors</h2>
          <div css={right}>
            <FiChevronRight />
          </div>
        </div>
        <div>
          <IoMdLaptop />
          <h1>Start a section</h1>
          <h2>Book an appointment and start the session</h2>
        </div>
      </div>
    </div>
    </>
  )
}

export default HowitWorks

const main = css`
background: aliceblue;
margin: 0px 4%;
padding:30px;
box-shadow: 0px 0px 2px 1px rgba(0,0,0,0.2);
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
      color: blueviolet;
    }
  }
  div :nth-child(1) {
    border-right: 1px solid #eeee;
    position: relative;
  }
  div :nth-child(2) {
    border-right: 1px solid #eeee;
    position: relative;
  }
`

const right = css`
  position: absolute;
  top: 40%;
  right: -17px;
  width: 7.5%;
  svg {
    height: 30px !important;
    border-radius: 50%;
    background: white;
    border: 1px solid #eeee;
    box-shadow: 0px 0px 6px 2px rgba(0, 0, 0, 0.2);
    color: black !important;
  }
`
