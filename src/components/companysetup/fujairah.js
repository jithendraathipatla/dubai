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
      <br />
      <span>
        Sharjah, a booming emirate in the United Arab Emirates, offers new
        avenues of progress implemented regularly by its government. Business
        setup in Sharjah mainland is ideal for service-oriented sectors as well
        as industrial sectors. Sharjah is valued as a strategic location that
        connects major trading zones and is a cost-effective way to
        commercialise your business activity. The location stimulates the marine
        and shipping sector of the country. Hence, company formation in Sharjah
        is a good option. Company formation in Sharjah mainland with Sevago
        Business Setup is economical and has the least administrative
        procedures. Our business setup consultants in Sharjah sort everything
        out for you, which makes starting a business in Sharjah extremely simple
        and convenient. At Sevago, we assist multinational companies as well as
        small and medium enterprises (SME) with getting their business licenses
        in Sharjah. We offer excellent startup deals on setting up a company in
        Sharjah mainland. This makes opening a company in Sharjah, with Sevago,
        even more attractive, as foreign investors can explore and participate
        in different sectors.
      </span>
      <br />
      <br />
    <h1>Advantages:</h1>
    <br/>
      <ul  css={list}>
       <li><FaDotCircle/> It is a hub for manufacturing industries, service-oriented companies, and cultural and educational entities.</li>
       <li><FaDotCircle/> Sharjah trade license cost is affordable.</li>
       <li><FaDotCircle/> Company registration in Sharjah is quick and has limited restrictions.</li>
       <li><FaDotCircle/> he economy greatly supports SMEs and there are over 54,000 SMEs recorded in Sharjah</li>
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
