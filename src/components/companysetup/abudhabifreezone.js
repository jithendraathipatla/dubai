import React from "react"
import { css } from "@emotion/core"
import { FaDotCircle } from "react-icons/fa"

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
    <div style={{ textAlign: "justify" }}>
      <div css={main}>
        <h1>BUSINESS SETUP IN ABU DHABI</h1>
      </div>
      <br />
      <span>
        <h1 style={{ fontSize: "22px", color: "black" }}>
          Hassle-free and affordable business setup solutions for new businesses
          in Abu Dhabi Free Zone
        </h1>
        <br />
        Over the past few years, Abu Dhabi has transformed itself into one of
        the fastest-growing economies in the world. With strong support from the
        government, the city’s advancement and growth has made it an ideal
        location for business. Starting a business in Abu Dhabi can be a great
        decision for any commercial entity. Regulated by the Abu Dhabi
        Department of Economic Development (ADDED), business setup in Abu Dhabi
        offers many benefits
        <br />
        <br />
        Getting a business license in Abu Dhabi with Shuraa not only allows you
        complete ownership of your business but also offers business setup at an
        affordable price. Company registration in Abu Dhabi offers two-years’
        validity on trade licence whereas other UAE trade licenses are valid
        only for one year. This means you save on time and money. Moreover, with
        Shuraa Business Setup’s exclusive business setup services in Abu Dhabi,
        the cost of setting up a Limited Liability Company (LLC) in Abu Dhabi is
        only AED 23,500* for 2 years! At Shuraa, our business setup consultants
        in Abu Dhabi can offer you expert guidance and the best assistance
        throughout the entire process of company incorporation in Abu Dhabi
        <br />
        <br />
        <h1 style={{ fontSize: "22px", color: "black" }}>
          HOW TO SETUP A BUSINESS IN ABU DHABI?
        </h1>
        <br />
        Initially, you need to decide the jurisdiction and the business
        activity, along with the number of shareholders in the company.
        Depending on the structure of the company, the procedures will differ.
        For example, the procedure for an LLC formation in Abu Dhabi will be
        different from that of a service-oriented small business setup in Abu
        Dhabi.
        <br />
        <br />
        Do you want to start a new business in Abu Dhabi but are wondering how
        to go about it? Do you want to know how to start a restaurant or a
        trading business in Abu Dhabi? Shuraa can help you out. To get detailed
        information about these and any other business-related queries about Abu
        Dhabi company formation, speak to our Abu Dhabi company formation
        experts to get all your questions answered
      </span>
      <br />
      <br />
      <h1 style={{ fontSize: "22px", color: "black" }}>Advantages:</h1>
      <br />
      <span>
        Here are some advantages of business setup in Abu Dhabi compared to
        other emirates:
      </span>
      <br />
      <br />
      <ul css={list}>
        <li>
          <FaDotCircle /> Abu Dhabi commercial license is valid for 2 years,
          unlike other emirates
        </li>
        <li>
          <FaDotCircle /> There is less stress on renewals and you can save on
          annual payments and costs.
        </li>
        <li>
          <FaDotCircle /> Cost of setting up a company in Abu Dhabi is much
          cheaper than most emirates.
        </li>
        <li>
          <FaDotCircle /> LLC formation in Abu Dhabi has the least taxes levied
          on businesses.
        </li>
        <li>
          <FaDotCircle /> Company registration in Abu Dhabi is easy, quick, and
          efficient with Shuraa.
        </li>
      </ul>
    </div>
  )
}

export default Dubaimainland

const list = css`
  svg {
    font-size: 6px;
    padding-top: -5px;
  }
`

const main = css`
  text-align: center;
  min-height: 301px;
  color: white;
  background: url("https://www.shuraa.com/wp-content/uploads/2020/04/Business-Setup-in-Abu-Dhabi-Mainland.jpg");
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
