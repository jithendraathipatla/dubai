import React from "react"
import TitleComponent from "../title"
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
    <div>
      <div css={main}>
        <h1>Company Spaces from Dubai Main Land</h1>
      </div>
      <br />
      <span>
        Hassle-free and affordable business setup solutions for new businesses
        in Dubai Mainland Dubai offers a conducive environment for entrepreneurs
        and investors to thrive. Business setup in Dubai mainland allows
        companies to trade within the local markets as well as conduct business
        internationally. Any company wanting to register in Dubai mainland must
        do so through the Department of Economic Development (DED) in Dubai. To
        save yourself time and money, it is recommended to complete your company
        formation process through a business setup consultant. Shuraa Business
        Setup has almost 20 years’ experience setting up businesses in Dubai. We
        offer complete solutions for your business setup in Dubai mainland. Our
        experienced business setup consultants in Dubai will provide you with
        expert guidance and comprehensive support throughout your business setup
        process. Shuraa Business Setup also provides a reliable UAE local
        sponsor for any type of mainland business setup in Dubai. Our business
        setup services in Dubai include company registration, UAE trade
        licences, government approvals, and PRO services. At Shuraa, we
        understand that the process of setting up business in Dubai could get
        cumbersome and expensive without the right guidance, expertise, and
        connections. We make the client’s requirements and business a top
        priority and provide simple and effective business setup solutions at
        competitive prices.
      </span>
      <br/>
      <br/>
      <div css={sty}>{display()}</div>
    </div>
  )
}

export default Dubaimainland

const main = css`
  text-align: center;
  min-height: 301px;
  color: white;
  background: url("https://www.shuraa.com/wp-content/uploads/2020/04/Business-setup-in-mainland-1.jpg");
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
    margin-bottom:10px;
    color:  black;
  }
`
