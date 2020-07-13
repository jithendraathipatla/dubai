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
      <HigherOrderPropertyComponent main="Business Centers in UAE">
        <div>
        <h1 style={{ fontSize: "22px", color: "black" }}>Business Centers in UAE</h1>
        <br/>
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
        </div>
      </HigherOrderPropertyComponent>
      <ContactUsComponent />
    </LayoutComponent>
  )
}

export default PropertiesForRent


