import React from "react"
import {Link} from 'gatsby'
import { css } from "@emotion/core"

const Dubaimainland = () => {
  const data = [
    {
      img:"https://www.shuraa.com/wp-content/uploads/2018/05/dubaisouthfreezoneuae.jpg",
      name: "Dubai South Freezone (DSF)",
      path:"/business-setup-dsf-free-zone",
      paragraph:
        "Company registration on Dubai’s Sheikh Zayed Road is a prestigious option for many businesses. Boasting an extensive skyline, Sheikh Zayed Road showcases the wealth and development of Dubai. It is literally an iconic pathway that accommodates some of the world’s largest companies and global business leaders.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2018/05/businesssetupinjebelali-freezone-dubai-uae.jpg",
      name: "JEBEL ALI FREEZONE (JAFZA)",
      path:"/business-setup-jafz-free-zone",
      paragraph:
        "Company registration in Deira is ideal for Dubai startup companies, traders, SMEs, and small shops retaining the old business culture of the Emirates. The busy area is filled with some of Dubai’s oldest shops, and is known as a souk, offering traders business opportunities. Deira is a good choice for businessmen who would like to set up a small shop in Dubai.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2018/05/businesssetupin-dubaisilicon-oasis-dso-uae.jpg",
      name: "DUBAI SILICON OASIS (DSO)",
      path:"/business-setup-dso-free-zone",
      paragraph:
        "DSO is a locality with spectacular residential plots and tourism sectors offering lavish business development modules. Setting up a company in Dubai’s Jumeirah region can be ideal for both large businesses as well as for startups. The region offers freehold properties as well as business centres, making it easy for SMEs to set up businesses.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2018/05/businesssetupindubaiinternetcity-uae.jpg",
      name: "DUBAI INTERNET CITY (DIC)",
      path:"/business-setup-dsf-free-zone",
      paragraph:
        "Company registration on Dubai’s Sheikh Zayed Road is a prestigious option for many businesses. Boasting an extensive skyline, Sheikh Zayed Road showcases the wealth and development of Dubai. It is literally an iconic pathway that accommodates some of the world’s largest companies and global business leaders.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2019/09/Dubai-Airport-Free-Zone.jpg",
      name: "DUBAI AIRPORT FREE ZONE",
      path:"/business-setup-daf-free-zone",
      paragraph:
        "Business Bay is defined as the central business district and is ideal for any kind of business. This district is perfect for companies belonging to financial sectors, professional consultancies, retail industry, hospitality industry, and many more. Business Bay continues to create multiple business setup centres catering to the demand for office spaces in Dubai.",
    },
    {
      img:
        "https://www.shuraa.com/wp-content/uploads/2018/05/businesssetupin-dubaisilicon-oasis-dso-uae.jpg",
      name: "DIFC",
      path:"/business-setup-daf-free-zone",
      paragraph:
        "DIFC is located on the outskirts of Dubai, but this does not make it any less developed. DIFC is segregated into residential areas and industrial zones. Educational institutes, medical and shopping centres, and other related businesses can be started in this region. Registering your company in Dubai’s Al Qusais district can be a cost-effective option as well.",
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
          <br />
          <br />
          <div>
            <Link to={item.path}><button className="button is-small is-link">View More</button></Link>
          </div>
        </div>
      )
    })
  }
  return (
    <div style={{textAlign:"justify"}}>
      <div css={main}>
        <h1>Company Spaces from Dubai Free Zone</h1>
      </div>
      <br />
      <span>
        Planning on company registration in Dubai freezone? Dubai offers more
        than 20 freezones and has some of the most prestigious freezones in the
        UAE. Dubai freezones offer world-class business amenities, options such
        as flexi-desk and flexi-office setups, great infrastructure, access to
        freehold property and complete privacy to investors with limited
        reporting obligations. While Dubai free zone business setup allows you
        to enjoy all the benefits of no taxation and import duty exemptions that
        mainland Dubai companies enjoy, it also gives you the benefit of 100%
        ownership over your company. However, with freezone business setup in
        Dubai you can do business internationally and not within the country. In
        case you want to conduct business within UAE, you can simply partner
        with a local distributor and you will be free to trade within UAE as
        well, speak to a consult for free to know your options.
      </span>
      <br />
      <br />
      <div css={sty}>{display()}</div>
    </div>
  )
}

export default Dubaimainland

const main = css`
  text-align: center;
  min-height: 301px;
  color: white;
  background: url("https://www.shuraa.com/wp-content/uploads/2020/04/Set-Up-a-Free-Zone-Company-in-the-UAE-1.jpg");
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
