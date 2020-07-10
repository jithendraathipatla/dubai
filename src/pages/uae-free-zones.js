import React from "react"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import TitleComponent from "../components/title"
import ContactUsComponent from "../components/contactus"
import TabsContainerComponent from "../components/tabscontainer"
import Dubaifreezone from "../components/companysetup/dubaifreezone"
import Abudhabifreezone from "../components/companysetup/abudhabifreezone"
import Sharjafreezone from "../components/companysetup/sharjafreezone"
import Ajmanfreezone from "../components/companysetup/ajmanfreezone"
import Fujairahfreezone from '../components/companysetup/fujairahfreezone';
import Ummalqwainfreezone from '../components/companysetup/ummalqwainfreezone';
import RasalkaimahfreeZone from '../components/companysetup/rasalkaimahfreezone';

const Contactuspage = () => {
  return (
    <LayoutComponent>
      <div style={{ marginTop: "6%" }}></div>
      <div style={{ textAlign: "center" }}>
        <TitleComponent title="Comapany Setup in UAE Free Zones" />
      </div>
      <br />
      <div css={main}>
        <TabsContainerComponent
          labelone="Dubai Free Zone"
          contentone={<Dubaifreezone />}
          contenttwo={<Sharjafreezone />}
          labeltwo="Sharja Free Zone"
          labelthree="Abu Dhabi Free Zone"
          contentthree={<Abudhabifreezone />}
          labelfour="Ajman Free Zone"
          contentfour={<Ajmanfreezone />}
          labelfive="Fujairah Free Zone"
          contentfive={<Fujairahfreezone />}
          labelsix="Umm Al Qwain Free Zone"
          contentsix={<Ummalqwainfreezone />}
          labelseven="Ras Al Khaimah Free Zone"
          contentseven={<RasalkaimahfreeZone />}
        />
      </div>
      <hr />
      <ContactUsComponent />
    </LayoutComponent>
  )
}

export default Contactuspage

const main = css`
  margin: 2px 5%;
`
