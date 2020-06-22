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
      title: "Business Consulting",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <FaMoneyBillAlt />,
      title: "Financial consulting",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <GoNote />,
      title: "Legal consulting",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <FiMail />,
      title: "Sales and Marketing",
      para: "Our specialized mentors will provide strategies to help",
    },

    {
      icon: <FaArtstation />,
      title: "Interior design and Consulting",
      para: "Our specialized mentors will provide strategies to help",
    },
    {
      icon: <FaBuilding />,
      title: "Architecture consulting",
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
        <TitleComponent title="Our Services"/>
        <p>We offer the best Mentors our customers, All the mentors are best at their job.</p>
      <div css={indust}>{display()}</div>
    </div>
  )
}

export default Specilizationindustries;

const bt = css`
    border: none;
    background: none;
    font-size: 21px;
    :hover{
        cursor: pointer;
    }
`

const btn = css`
    border: none;
    background: none;
    font-size: 21px;
    border-bottom: 1px solid #0c2be9;
    margin-bottom: 37px;
    margin-right: 40px;
    color: orange;
    :hover{
        cursor: pointer;
    }
`
const btn1 = css`
    border: none;
    background: none;
    font-size: 21px;
    border-bottom: 1px solid #0c2be9;
    margin-bottom: 37px;
    margin-left: 40px;
    color: orange;
    :hover{
        cursor: pointer;
    }
`

const indust = css`
 margin-top:-2px;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  svg {
    height: 75px;
    width: 16%;
    color: #0c2be9;
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
