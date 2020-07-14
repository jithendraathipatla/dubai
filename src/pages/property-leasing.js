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
      <HigherOrderPropertyComponent main="Property Leasing in UAE">
        <div>
          <h1 style={{ fontSize: "22px", color: "black" }}>
            Property Leasing in UAE
          </h1>
          <br />
          <span>
            UAE, a booming emirate in the United Arab Emirates, offers new
            avenues of progress implemented regularly by its government.
            Business setup in UAE mainland is ideal for service-oriented sectors
            as well as industrial sectors. UAE is valued as a strategic location
            that connects major trading zones and is a cost-effective way to
            commercialise your business activity. The location stimulates the
            marine and shipping sector of the country. Hence, company formation
            in UAE is a good option. Company formation in UAE mainland with
            Sevago Business Setup is economical and has the least administrative
            procedures. Our business setup consultants in UAE sort everything
            out for you, which makes starting a business in UAE extremely simple
            and convenient. At Sevago, we assist multinational companies as well
            as small and medium enterprises (SME) with getting their business
            licenses in UAE. We offer excellent startup deals on setting up a
            company in UAE mainland. This makes opening a company in UAE, with
            Sevago, even more attractive, as foreign investors can explore and
            participate in different sectors.
            <br />
            <br />
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
            connectivity of land, sea and air. This has reduced the operational
            costs and made a significant impact on the proceeding of
            transportation. The Dubai South is widespread city over 145 square
            kilometers, with pre-built office, extensive warehouse, shell & core
            outlets, customized office space, industrial facilities and more.
            Rental for residential or commercial properties in UAE is one of the
            major sectors have always been and likely to boom further having
            significant upside potential . The arrangement provides suitable
            place for sectors such as aviation sector, retail industry,
            hospitality ventures, food and beverage, information technology
            enterprises as well as education institutes. The companies in the
            region include, Clariant Gulf, Megachem Middle East, Consolidated
            Shipping Logistics, Overseas Material Supply, Dune Corporation,
            Utility Services, BMC Gulf and others. And Find Properties for rent
            in United Arab Emirates. Here you can find the latest listings of
            United Arab Emirates Property for rent. For More details Contact Us
          </span>
        </div>
      </HigherOrderPropertyComponent>
      <br/>
      <ContactUsComponent />
    </LayoutComponent>
  )
}

export default PropertiesForRent
