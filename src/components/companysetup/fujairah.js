import React from "react"
import {FaDotCircle} from 'react-icons/fa'
import { css } from "@emotion/core"

const Dubaimainland = () => {
  const data = [
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2019/09/sheikh-zayed-dubai-uae.jpg",
      name: "Al Quoz",
      paragraph:
        "Company registration on Dubai’s Sheikh Zayed Road is a prestigious option for many businesses. Boasting an extensive skyline, Sheikh Zayed Road showcases the wealth and development of Dubai. It is literally an iconic pathway that accommodates some of the world’s largest companies and global business leaders.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2019/09/deira-business-setup-dubai-uae.jpg",
      name: "DEIRA",
      paragraph:
        "Company registration in Deira is ideal for Dubai startup companies, traders, SMEs, and small shops retaining the old business culture of the Emirates. The busy area is filled with some of Dubai’s oldest shops, and is known as a souk, offering traders business opportunities. Deira is a good choice for businessmen who would like to set up a small shop in Dubai.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2019/09/Jumeirah-company-formation.jpg",
      name: "JUMEIRAH",
      paragraph:
        "Jumeirah is a locality with spectacular residential plots and tourism sectors offering lavish business development modules. Setting up a company in Dubai’s Jumeirah region can be ideal for both large businesses as well as for startups. The region offers freehold properties as well as business centres, making it easy for SMEs to set up businesses.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2019/09/sheikh-zayed-dubai-uae.jpg",
      name: "SHEIKH ZAYED ROAD",
      paragraph:
        "Company registration on Dubai’s Sheikh Zayed Road is a prestigious option for many businesses. Boasting an extensive skyline, Sheikh Zayed Road showcases the wealth and development of Dubai. It is literally an iconic pathway that accommodates some of the world’s largest companies and global business leaders.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2019/09/start-a-company-in-business-bay-dubai-uae.jpg",
      name: "BUSINESS BAY",
      paragraph:
        "Business Bay is defined as the central business district and is ideal for any kind of business. This district is perfect for companies belonging to financial sectors, professional consultancies, retail industry, hospitality industry, and many more. Business Bay continues to create multiple business setup centres catering to the demand for office spaces in Dubai.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2019/09/Company-formation-at-Al-Qusais.jpg",
      name: "AL QUSAIS",
      paragraph:
        "Al Qusais is located on the outskirts of Dubai, but this does not make it any less developed. Al Qusais is segregated into residential areas and industrial zones. Educational institutes, medical and shopping centres, and other related businesses can be started in this region. Registering your company in Dubai’s Al Qusais district can be a cost-effective option as well.",
    },
  ]

  const display = () => {
    return data.map((item, i) => {
      return (
        <div key={i} css={card}>
          <img height="294" width="540" src={item.img} />
          <div style={{ textAlign: "center" }}>
            <h1>{item.name}</h1>
          </div>
          <span>{item.paragraph}</span>
        </div>
      )
    })
  }
  return (
    <div style={{textAlign:"justify"}}>
      <div css={main}>
        <h1>Company Spaces from Fujairah Main Land</h1>
      </div>
      <span>
      <br/>
      <br/>
      <h1 style={{ fontSize: "22px", color: "black" }}>Company Spaces from Fujairah Main Land</h1>
      <br />
      
      Hassle-free and affordable business setup solutions for new businesses
      in Fujairah Mainland
      <br />
      <br />
      As a growing economy, Fujairah’s large-scale development is drawing a lot
      of interest from local and overseas entrepreneurs. The emirate is
      creating exciting business opportunities, especially for startups, small
      and medium enterprises, and businesses with small budgets.
      <br />
      <br />
      Business setup in Fujairah mainland is easy and economical. It offers
      businesses opportunities for growth and global exposure. Another reason
      for its growing popularity is the affordable cost of an Fujairah mainland
      business license.
      <br />
      <br />
      <h1 style={{ fontSize: "22px", color: "black" }}>HOW TO START A BUSINESS IN FUJAIRAH</h1>
      <br />
     
      The general process of setting up a business in Fujairah mainland is to
      reserve a trade name and present the required documents as per your
      business activity. You must then get the preliminary approval by
      ensuring that you have met the requirements of inspection. Follow-up
      with the economic department and provide the external approvals, if any,
      specific to your business activity. Next, draft the company’s Memorandum
      of Association, pay the fees, and receive the license to start your
      business in Fujairah mainland.
      <br />
      <br />
      At Shuraa Business Setup, we ensure quick and efficient processing of
      your business license and can offer expert guidance on your business
      setup in Fujairah, UAE. Company registration in Fujairah offers several
      opportunities. However, it is important to understand which options are
      best suited for your particular business. At Shuraa, we offer exclusive
      business setup packages for Fujairah mainland that cover a range of
      services at affordable prices, starting from AED 14,000*.
    </span>
    <br />
    <br />
    <h1 style={{ fontSize: "22px", color: "black" }}>Advantages:</h1>
    <br />
    There are several advantages of business setup in Fujairah, some of which are
    the following:
    <br />
    <br />
    <ul css={list}>
      <li>
        <FaDotCircle /> Company registration in Fujairah offers low-cost rented
        commercial spaces and offices
      </li>
      <li>
        <FaDotCircle /> LLC license cost in Fujairah is comparatively more
        reasonable than most other emirates
      </li>
      <li>
        <FaDotCircle /> Manufacturing units prefer business set-up in Fujairah
        due to easy lease options
      </li>
      <li>
        <FaDotCircle /> Fujairah provides easy access to two international
        airports and four ports
      </li>
      <li>
        <FaDotCircle /> Company formation in Fujairah is ideal for industries as
        raw materials are easily available
      </li>
    </ul>
    </div>
  )
}

export default Dubaimainland

const list = css`
  svg{
    font-size:6px;
    padding-top:-5px;
  }
`

const main = css`
  text-align: center;
  min-height: 301px;
  color: white;
  background: url("https://d2g4iwshf24scx.cloudfront.net/Images/LandingPageImages/Fujairah-Travel-Guide-Banner.jpg");
  h1 {
    font-size: 30px;
    padding-top: 12%;
  }
`

const sty = css`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr;
  grid-gap: 30px;
  text-align: justify;
`
const card = css`
  border-radius: 2px;
  h1 {
    font-size: 20px;
    font-weight: 500;
    margin-bottom: 10px;
    color: black;
  }
`
