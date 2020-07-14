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
      <HigherOrderPropertyComponent main="Properties For Rent  In UAE">
        <div>
          <h1 style={{ fontSize: "22px", color: "black" }}>
            Properties For Rent In UAE
          </h1>
          <br />
          <span>
            This site is to help you to find the perfect home. Be able to search
            thousands of available options for properties for rent at UAE. Find
            all Properties for rent or searching in UAE. Search through a wide
            range of Properties for rent in UAE The UAE earlier has different
            Zones to offer for Property Rentals, and is an emerging gateway to
            the Middle-East, Africa and South Asia, offering a diversified
            market to the world. Company formation in Dubai South Free Zone
            comes with an integrated urban ecosystem enabling business personnel
            to develop substantial cost-effective business formulations and time
            management in dealings. Business setup in Dubai South Freezone
            delivers entrepreneurs with the propinquity to enjoy the recompenses
            of the Dubai Al Maktoum International Airport and the Jebel Ali
            Port. The freezone jurisdiction Dubai South or DS free zone also
            offers a logistics corridor for the world with prominent
            connectivity of land, sea and air.
            <br/>
            <br/>
            <h1 style={{ fontSize: "22px", color: "black" }}>Advantages:</h1>
            <br />
            <span>Here are some advantages of Property Sale in UAE</span>
            <br />
            <br />
            <ul css={list}>
              <li>
                <FaDotCircle /> This has reduced the operational costs and made
                a significant impact on the proceeding of transportation.
              </li>
              <li>
                <FaDotCircle /> The Dubai South is widespread city over 145
                square kilometers.
              </li>
              <li>
                <FaDotCircle /> The most popular areas for buying a property for
                sale in Abu Dhabi is Al Reem Island.
              </li>
              <li>
                <FaDotCircle /> LLC formation in UAE has the least taxes levied
                on businesses.
              </li>
              <li>
                <FaDotCircle /> Company registration in UAE is easy, quick, and
                efficient with SEVAGO.
              </li>
            </ul>
            <br />
            <br />
            The arrangement provides suitable place for sectors such as aviation
            sector, retail industry, hospitality ventures, food and beverage,
            information technology enterprises as well as education institutes.
            The companies in the region include, Clariant Gulf, Megachem Middle
            East, Consolidated Shipping Logistics, Overseas Material Supply,
            Dune Corporation, Utility Services, BMC Gulf and others. The most
            popular areas for buying a property for sale in Abu Dhabi is Al Reem
            Island. Since Al Reem Island is a free hold areas in Abu Dhabi,
            where an expect can buy any property for sale in Al Reem island and
            hold it for his lifetime. Al Reem island is popular for the villa
            and apartment with beautiful sea view and park, offering the best
            park in abu dhabi, Al Reem island comprises with shops, mall and the
            biggest ever mall in Abu Dhabi is on its way of construction.
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
    font-size: 11px;
    padding-top: -5px;
  }
`
