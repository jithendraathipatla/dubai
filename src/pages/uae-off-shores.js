import React from "react"
import LayoutComponent from "../components/layout"
import { css } from "@emotion/core"
import TitleComponent from "../components/title"
import ContactUsComponent from "../components/contactus"
import TabsContainerComponent from "../components/tabscontainer"
import Dubaioffshore from "../components/companysetup/dubaioffshore"
import Abudhabioffshore from "../components/companysetup/abudhabioffshore"
import Sharjoffshore from "../components/companysetup/sharjaoffshore"
import Ajmanoffshore from "../components/companysetup/ajmanoffshore"
import Fujairahoffshore from '../components/companysetup/fujairahoffshore'
import Rasalkaimahoffshore from '../components/companysetup/rasalkaimahoffshore'
import Ummalqwainoffshore from '../components/companysetup/ummalqwainoffshore'

const Contactuspage = () => {
  return (
    <LayoutComponent>
      <div style={{ marginTop: "6%" }}></div>
      <div style={{ textAlign: "center" }}>
        <TitleComponent title="Comapany Setup in UAE Off Shore" />
      </div>
      <br />
      <div css={main}>
        <TabsContainerComponent
          labelone="Dubai Off Shore"
          contentone={<Dubaioffshore />}
          contenttwo={<Sharjoffshore />}
          labeltwo="Sharja Off Shore"
          labelthree="Abu Dhabi Off Shore"
          contentthree={<Abudhabioffshore />}
          labelfour="Ajman Off Shore"
          contentfour={<Ajmanoffshore />}
          labelfive="Fujairah Off Shore"
          contentfive={<Fujairahoffshore />}
          labelsix="Umm Al Qwain Off Shore"
          contentsix={<Ummalqwainoffshore />}
          labelseven="Ras Al Khaimah Off Shore"
          contentseven={<Rasalkaimahoffshore />}
        />
      </div>
      <ContactUsComponent />
    </LayoutComponent>
  )
}

export default Contactuspage

const main = css`
  margin: 2px 5%;
`
