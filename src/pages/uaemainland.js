import React from "react"
import LayoutComponent from '../components/layout'
import {css} from '@emotion/core'
import TitleComponent from '../components/title'
import ContactUsComponent from '../components/contactus'
import TabsContainerComponent from '../components/tabscontainer'

const Contactuspage = () => {
  return (
      <LayoutComponent>
        <div style={{textAlign: "center"}}>
        <TitleComponent title="Comapany Setup in UAE Main Land"/>
        </div>
        <TabsContainerComponent labelone="Dubai Main Land" labeltwo="Sharja Main Lan" labelthree="Abu Dhabi Mainland" labelfour="Ajman Mainland"/>
       <ContactUsComponent/>
      </LayoutComponent>
  )
}

export default Contactuspage;




