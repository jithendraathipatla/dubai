import React from "react"
import SecondHOC from "../components/HOC/allpages"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import { FaCheck, FaTimesCircle, FaDotCircle } from "react-icons/fa"

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

  const Ajman = [
    { name: "Free Business Setup Consultation", icon: <FaCheck /> },
    { name: "Dedicated Consultant", icon: <FaCheck /> },
    { name: "DED License Fees", icon: <FaCheck /> },
    { name: "Registration Fees", icon: <FaCheck /> },
    { name: "Office Space*", icon: <FaTimesCircle /> },
    { name: "UAE Service Agent", icon: <FaCheck /> },
    { name: "Stamp of The Company", icon: <FaCheck /> },
    { name: "Complete Documentation", icon: <FaCheck /> },
  ]
  const dubai_display = () => {
    return dubai.map((item, i) => {
      return (
        <div key={i} css={one}>
          <div>
            <FaCheck />
          </div>
          <div>{item.name}</div>
        </div>
      )
    })
  }

  const display_rest = () => {
    return Ajman.map((item, i) => {
      return (
        <div key={i} css={one}>
          <div css={item.name === "Office Space*" ? ABC : null}>
            {item.icon}
          </div>
          <div>{item.name}</div>
        </div>
      )
    })
  }

  return (
    <LayoutComponent>
      <div css={landing}>
        <h1>UAE MAINLAND COMPANY INCORPORATION</h1>
        <span>Company formation packages starting from AED 14,000</span>
      </div>
      <div>
        <SecondHOC title="All Packages in UAE">
          <br />
          <div css={main}>
            <div style={{ background: "#eeee" }}>
              <div css={secondmain}>
                <h1>Dubai</h1>
              </div>

              <div css={thirdmain}>
                <h1>ADE 15,500*</h1>
                <span>First Year</span>
              </div>
              {dubai_display()}
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="button is-link">Book a Consultation</button>
              </div>
              <span css={fourthmain}>
                <h2>Popular</h2>
              </span>
              <div style={{ margin: "24px" }}>
                Package Excludes – Foreign Trade Name, All Visa Costs,
                Immigration Card of Company, Medical, Emirates ID & Insurance
                Card
              </div>
            </div>
            <div style={{ background: "#eeee" }}>
              <div css={secondmain}>
                <h1>Abu Dhabi</h1>
              </div>
              <div css={thirdmain}>
                <h1>ADE 25,500*</h1>
                <span>First Year</span>
              </div>
              {display_rest()}
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="button is-link">Book a Consultation</button>
              </div>
              <div style={{ margin: "24px" }}>
                Package Excludes – Foreign Trade Name, All Visa Costs,
                Immigration Card of Company, Medical, Emirates ID & Insurance
                Card
              </div>
            </div>
            <div style={{ background: "#eeee" }}>
              <div css={secondmain}>
                <h1>Sharjah</h1>
              </div>
              <div css={thirdmain}>
                <h1>ADE 11,500*</h1>
                <span>First Year</span>
              </div>
              {display_rest()}
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="button is-link">Book a Consultation</button>
              </div>
              <div style={{ margin: "24px" }}>
                Package Excludes – Foreign Trade Name, All Visa Costs,
                Immigration Card of Company, Medical, Emirates ID & Insurance
                Card
              </div>
            </div>
            <div style={{ background: "#eeee" }}>
              <div css={secondmain}>
                <h1>Ajman</h1>
              </div>
              <div css={thirdmain}>
                <h1>ADE 10,500*</h1>
                <span>First Year</span>
              </div>
              {display_rest()}
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="button is-link">Book a Consultation</button>
              </div>
              <div style={{ margin: "24px" }}>
                Package Excludes – Foreign Trade Name, All Visa Costs,
                Immigration Card of Company, Medical, Emirates ID & Insurance
                Card
              </div>
            </div>

            <div style={{ background: "#eeee" }}>
              <div css={secondmain}>
                <h1>Fujairah</h1>
              </div>
              <div css={thirdmain}>
                <h1>ADE 11,500*</h1>
                <span>First Year</span>
              </div>
              {display_rest()}
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="button is-link">Book a Consultation</button>
              </div>
              <div style={{ margin: "24px" }}>
                Package Excludes – Foreign Trade Name, All Visa Costs,
                Immigration Card of Company, Medical, Emirates ID & Insurance
                Card
              </div>
            </div>
          
            <div style={{ background: "#eeee" }}>
              <div css={secondmain}>
                <h1>Umm Al Qwain</h1>
              </div>
              <div css={thirdmain}>
                <h1>ADE 13,500*</h1>
                <span>First Year</span>
              </div>
              {display_rest()}
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="button is-link">Book a Consultation</button>
              </div>
              <div style={{ margin: "24px" }}>
                Package Excludes – Foreign Trade Name, All Visa Costs,
                Immigration Card of Company, Medical, Emirates ID & Insurance
                Card
              </div>
            </div>

            <div style={{ background: "#eeee" }}>
              <div css={secondmain}>
                <h1>Ras Al Khaimah</h1>
              </div>
              <div css={thirdmain}>
                <h1>ADE 10,900*</h1>
                <span>First Year</span>
              </div>
              {display_rest()}
              <br />
              <div style={{ textAlign: "center" }}>
                <button className="button is-link">Book a Consultation</button>
              </div>
              <div style={{ margin: "24px" }}>
                Package Excludes – Foreign Trade Name, All Visa Costs,
                Immigration Card of Company, Medical, Emirates ID & Insurance
                Card
              </div>
            </div>

            
          </div>
          <br />
          <div css={aftercard}>
            <h1>UAE FREEZONE COMPANY SETUP COST</h1>
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
          </div>
          <br />
          <br />
          <div css={aftercard}>
            <h1>
              A generic list of costs for a freezone company setup (may or may
              not apply to some freezones)
            </h1>

            <ul css={list}>
              <li>
                <FaDotCircle /> Freezone company registration fee
              </li>
              <li>
                <FaDotCircle /> Freezone license fee
              </li>
              <li>
                <FaDotCircle /> Rental costs – Smart desk, office units,
                permanent office or warehouses.
              </li>
              <li>
                <FaDotCircle /> Share capital requirements{" "}
              </li>
              <li>
                <FaDotCircle /> Freezone visa fees
              </li>
              <li>
                <FaDotCircle /> Bank guarantee charges
              </li>
              <li>
                <FaDotCircle /> Registered Agent Fees
              </li>
              <li>
                <FaDotCircle /> Name approval charges
              </li>
              <li>
                <FaDotCircle /> Notarization charges
              </li>
              <li>
                <FaDotCircle /> Insurance expenses
              </li>
              <li>
                <FaDotCircle /> Bank account opening fees
              </li>
              <li>
                <FaDotCircle /> Emirates ID card fees
              </li>
              <li>
                <FaDotCircle /> Police clearance costs
              </li>
              <li>
                <FaDotCircle /> Medical check cost
              </li>
              <li>
                <FaDotCircle /> Typing and shipping fees
              </li>
            </ul>
          </div>
          <br />
          <div css={aftercard}>
            <h1>UAE OFFSHORE COMPANY FORMATION COST</h1>
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
          </div>
          <br />
          <br />
          <div css={aftercard}>
            <h1>The costs of offshore company setup in the UAE</h1>

            <ul css={list}>
              <li>
                <FaDotCircle /> Freezone company registration fee
              </li>
              <li>
                <FaDotCircle /> Freezone license fee
              </li>
              <li>
                <FaDotCircle /> Rental costs – Smart desk, office units,
                permanent office or warehouses.
              </li>
              <li>
                <FaDotCircle /> Share capital requirements{" "}
              </li>
              <li>
                <FaDotCircle /> Freezone visa fees
              </li>
              <li>
                <FaDotCircle /> Bank guarantee charges
              </li>
              <li>
                <FaDotCircle /> Registered Agent Fees
              </li>
              <li>
                <FaDotCircle /> Name approval charges
              </li>
            </ul>
          </div>
        </SecondHOC>
      </div>
    </LayoutComponent>
  )
}

export default Allpackages

const list = css`
  svg {
    font-size: 6px;
    padding-top: -5px;
  }
`

const aftercard = css`
  margin: 0px 7%;
  h1 {
    color: black;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.9;
    margin-bottom: 10px;
  }
`

const ABC = css`
  color: red;
`

const landing = css`
  background: url("https://www.shuraa.com/wp-content/uploads/2020/04/Packages-02.jpg");
  height: 370px;
  width: 100%;
  margin-bottom: -3%;
  h1 {
    color: white;
    padding-top: 11.2%;
    font-weight: 700;
    padding-left: 25%;
    letter-spacing: 0.9;
    font-size: 30px;
    line-height: 1.384615384615385em;
  }
  span {
    color: #e9e9e9;
    padding-top: 14%;
    padding-left: 36%;
  }
`
const one = css`
  display: flex;
  padding: 7px;
  border-bottom: 1px solid white;
  :nth-child(10) {
    border-bottom: none;
  }
  svg {
    margin-right: 10px;
    border-radius: 50%;
    border: 1px solid #ffff;
    padding: 2px;
    background: white;
    margin-top: 5px;
  }
`

const fourthmain = css`
  position: absolute;
  background-color: #2a8e98;
  color: #fff;

  h2 {
    top: -557px;
    position: absolute;
    left: 203px;
    box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.8);
    background: blueviolet;
    height: 31px;
    padding: 6px 24px;
    width: 102px;
    right: unset;
    -webkit-transform: rotate(90deg);
    -ms-transform: rotate(90deg);
    transform: rotate(34deg);
  }
`
const secondmain = css`
  position: relative;
  background: #5a7e84;
  padding: 20px 0px;
  text-align: center;
  h1 {
    color: white;
    font-size: 30px;
  }
`

const thirdmain = css`
  text-align: center;
  padding: 20px 0px;
  h1 {
    font-size: 30px;
    font-weight: 600;
  }
  span {
    font-size: 20px;
  }
`

const main = css`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 3fr;
  grid-gap: 40px;
`
