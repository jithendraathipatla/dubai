import React from "react"
import LayoutComponent from "../components/layout"
import { FaDotCircle } from "react-icons/fa"
import { css } from "@emotion/core"
import ContactUsComponent from "../components/contactus"
import HigherOrderPropertyComponent from "../components/HOC/properties-setup"

const PropertiesForRent = () => {
  return (
    <LayoutComponent>
      <div style={{ marginTop: "2%" }}></div>
      <br />
      <HigherOrderPropertyComponent main="Properties For Sale In UAE">
        <div>
          <h1 style={{ fontSize: "22px", color: "black" }}>
            Properties For Sale In UAE
          </h1>
          <br />
          <span>
            Looking for properties to buy in United Arab Emirates or Searching
            for property for sale in UAE and buy luxurious yet affordable
            property in UAE from the leading property developer in UAE. The UAE
            earlier has different Zones to offer for Property Sales, and is an
            emerging gateway to the Middle-East, Africa and South Asia, offering
            a diversified market to the world. Over the past few years, Abu
            Dhabi has transformed itself into one of the fastest-growing
            economies in the world. Buy Property in UAE: Find best Properties
            for Sale in UAE, we aim to provide a huge range of Residential
            properties for Sale in UAE. With strong support from the government.
            Business setup in Dubai South Free zone delivers entrepreneurs with
            the propinquity to enjoy the recompenses of the Dubai Al Maktoum
            International Airport and the Jebel Ali Port. The free zone
            jurisdiction Dubai South or DS free zone also offers a logistics
            corridor for the world with prominent connectivity of land, sea and
            air. 
            <br/>
            <br/>
            <h1 style={{ fontSize: "22px", color: "black" }}>Advantages:</h1>
            <br />
            <span>Here are some advantages of Property Sale in UAE</span>
            <br />
            <br />
            <ul css={list}>
              <li>
                <FaDotCircle /> Consolidated Shipping Logistics
              </li>
              <li>
                <FaDotCircle /> Overseas Material Supply
              </li>
              <li>
                <FaDotCircle /> Dune Corporation
              </li>
              <li>
                <FaDotCircle /> Utility Services and
              </li>
              <li>
                <FaDotCircle /> BMC Gulf
              </li>
            </ul>
            <br />
            <br />
            This has reduced the operational costs and made a significant impact
            on the proceeding of transportation. The Dubai South is widespread
            city over 145 square kilometers, with pre-built office, extensive
            warehouse, shell & core outlets, customized office space, industrial
            facilities and more. Rental for residential or commercial properties
            in UAE is one of the major sectors have always been and likely to
            boom further having significant upside potential . The arrangement
            provides suitable place for sectors such as aviation sector, retail
            industry, hospitality ventures, food and beverage, information
            technology enterprises as well as education institutes. The
            companies in the region include, Clariant Gulf, Megachem Middle
            East, Consolidated Shipping Logistics, Overseas Material Supply,
            Dune Corporation, Utility Services, BMC Gulf and others. And Find
            Properties for rent in United Arab Emirates. Here you can find the
            latest listings of United Arab Emirates Property for rent. For More
            details Contact Us
          </span>
        </div>
      </HigherOrderPropertyComponent>
      <br/>
      <ContactUsComponent />
    </LayoutComponent>
  )
}

export default PropertiesForRent

const list = css`
  svg {
    font-size: 6px;
    padding-top: -5px;
  }
`
