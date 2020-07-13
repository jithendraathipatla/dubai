import React from "react"
import LayoutComponent from "../components/layout"
import TitleComponent from "../components/title"
import { css } from "@emotion/core"
import ContactUsComponent from "../components/contactus"
import HigherOrderPropertyComponent from "../components/HOC/properties-setup"

const PropertiesForRent = () => {
  return (
    <LayoutComponent>
      <div style={{ marginTop: "2%" }}></div>
      <br />
      <HigherOrderPropertyComponent main="Properties For Sale UAE">
        <div>
        <h1 style={{ fontSize: "22px", color: "black" }}>Properties For Sale UAE</h1>
        <br/>
        <span>
        The UAE earlier has different Zones to offer for Property Sales, and is
        an emerging gateway to the Middle-East, Africa and South Asia,
        offering a diversified market to the world. Over the past few years, Abu Dhabi has transformed itself into one of
        the fastest-growing economies in the world. With strong support from the
        government.
        
        Business
        setup in Dubai South Freezone delivers entrepreneurs with the
        propinquity to enjoy the recompenses of the Dubai Al Maktoum
        International Airport and the Jebel Ali Port. The freezone
        jurisdiction Dubai South or DS free zone also offers a logistics
        corridor for the world with prominent connectivity of land, sea and
        air. This has reduced the operational costs and made a significant
        impact on the proceeding of transportation. The Dubai South is
        widespread city over 145 square kilometers, with pre-built office,
        extensive warehouse, shell & core outlets, customized office space,
        industrial facilities and more. The arrangement provides suitable
        place for sectors such as aviation sector, retail industry,
        hospitality ventures, food and beverage, information technology
        enterprises as well as education institutes. The companies in the
        region include, Clariant Gulf, Megachem Middle East, Consolidated
        Shipping Logistics, Overseas Material Supply, Dune Corporation,
        Utility Services, BMC Gulf and others.
        </span>
        </div>
      </HigherOrderPropertyComponent>
      <ContactUsComponent />
    </LayoutComponent>
  )
}

export default PropertiesForRent


