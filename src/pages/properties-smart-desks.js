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
      <HigherOrderPropertyComponent main="Smart Desks in UAE">
        <div>
        <h1 style={{ fontSize: "22px", color: "black" }}>Smart Desks in UAE</h1>
        <br/>
        <span>
        UAE a booming emirate in the World, offers new
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
        Sharjah mainland. This makes opening a company in UAE with Sevago,
        even more attractive, as foreign investors can explore and participate
        in different sectors.
        </span>
        </div>
      </HigherOrderPropertyComponent>
      <ContactUsComponent />
    </LayoutComponent>
  )
}

export default PropertiesForRent


