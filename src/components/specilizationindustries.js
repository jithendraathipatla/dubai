import React, { useState } from "react"
import { FcBusiness } from "react-icons/fc"
import {
  FaRegMoneyBillAlt,
  FaBuilding,
  FaArtstation,
  FaRegHeart,
  FaTruckMoving,
  FaMoneyBillAlt,
  FaCartPlus,
} from "react-icons/fa"
import { GoNote } from "react-icons/go"
import { FiMail } from "react-icons/fi"
import { GrTechnology, GrResources, GrCart } from "react-icons/gr"
import { GiLipstick } from "react-icons/gi"
import { AiOutlineAntDesign } from "react-icons/ai"
import { css } from "@emotion/core"
import Titlecomponent from '../components/title'

const Specilizationindustries = () => {
  const [state, setstate] = useState(false)

  const spe = [
    {
      icon: <FaArtstation />,
      title: "Arts and entertainment",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <FaCartPlus />,
      title: "E-commerce/Online Services",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <GoNote />,
      title: "Legal consulting",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <GoNote />,
      title: "Training & Education",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <FaRegHeart />,
      title: "Health care",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <FaBuilding />,
      title: "Home Based Business",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <GiLipstick />,
      title: "Fashion, Design & beauty ",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <FaTruckMoving />,
      title: "Interior design and Consulting",
      para: "Our specialized mentors will provide strategies to help",
    },
  ]

  const ind = [
    {
      icon: <FaRegMoneyBillAlt />,
      title: "Company Formation & Licensing",
      para: "Our business setup consultants can help you with customized company formation Solutins that are hassle-free, and suitable for your business",
    },
    {
      icon: <FaMoneyBillAlt />,
      title: "Properties",
      para: "Find all Properties for Leasing,rent & purchasing in UAE. Search through a wide range of Properties and get the best Deals."    },
    {
      icon: <GoNote />,
      title: "Pro Services",
      para: "Our Public Relations Officers (PRO) Help you easily and efficiently handel all your documentation and government related process",
    },
    {
      icon: <FiMail />,
      title: "Banking Assistance",
      para: "Our strong relationship with various banks, and official in-house countries of banking patner, makes opening a corporate bank account through as quick and effortless",
    },

    {
      icon: <FaArtstation />,
      title: "Investor Rights Protection",
      para: "A corporate Sponsorship agreement with us comes with a strong investor rights and protection contract that ensures you 100% operational ownership",
    },
    {
      icon: <FaBuilding />,
      title: "Value Added Services",
      para: "We offer value added services to new businesses such as business centers, recruitment services, advertising services, tax, consulting, etc.",
    },
   
  ]

  const handelSpecilization = () => {
    setstate(false)
  }

  const handelIndustries = () => {
    setstate(true)
  }

  const displayingIndustries = () => {
    return ind.map((item, i) => {
      return (
        <div key={i} css={service}>
          <h1>{item.title}</h1>
           <hr/>
          <p>{item.para}</p>
        </div>
      )
    })
  }

  const displayingSpecilization = () => {
    return spe.map((item, i) => {
      return (
        <div key={i} css={service}>
          {item.icon}
          <h1>{item.title}</h1>
           <hr/>
          <p>{item.para}</p>
        </div>
      )
    })
  }

  const display = () => (
    <>{state === false ? displayingIndustries() : displayingSpecilization()}</>
  )

  return (
    <div style={{ textAlign: "center" }}>
        <Titlecomponent title="Our Services"/>
        <p style={{fontWeight:"490", fontSize:"17px", letterSpacing:"1px"}}>We offer the best Mentors our customers, All the mentors are best at their job.</p>
          <br/>
        <div css={indust}>{display()}</div>
    </div>
  )
}

export default Specilizationindustries;



const indust = css`
 margin-top:-2px;
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-gap: 20px 0px;
  svg {
    height: 75px;
    width: 16%;
    color:black;
  }
  h1 {
    font-size: 19px;
    font-weight: 500;
    color: black;
  }
  hr{
    width: 18%;
    border-bottom: 2px solid orange;
    margin: 7px;
    margin-left: 20%;
    transform: translate(119%, 2px);
  }
  p {
    font-size: 16px;
    margin-top: 7px;
    margin-bottom: 10px;
  }
`
const service = css`
  padding:15px;
`
