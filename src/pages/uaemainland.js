import React from "react"
import LayoutComponent from '../components/layout'
import {css} from '@emotion/core'
import TitleComponent from '../components/title'
import ContactUsComponent from '../components/contactus'
import TabsContainerComponent from '../components/tabscontainer'
import Dubaimainland from '../components/subcomponents/dubaimainland'

const Contactuspage = () => {
  return (
      <LayoutComponent>
         <div style={{marginTop:"6%"}}></div>
        <div style={{textAlign: "center"}}>
        <TitleComponent title="Comapany Setup in UAE Main Land"/>
        </div>
        <br/>
        <div css={main}>
        <TabsContainerComponent labelone="Dubai Main Land" contentone={<Dubaimainland/>} labeltwo="Sharja Main Lan" labelthree="Abu Dhabi Mainland" labelfour="Ajman Mainland"/>
        </div>
        <hr/>
        <ContactUsComponent/>
      </LayoutComponent>
  )
}

export default Contactuspage;

const main = css`
 margin:2px 5%;
`



