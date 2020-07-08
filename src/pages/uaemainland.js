import React from "react"
import LayoutComponent from '../components/layout'
import {css} from '@emotion/core'
import TitleComponent from '../components/title'
import ContactUsComponent from '../components/contactus'
import TabsContainerComponent from '../components/tabscontainer'
import Dubaimainland from '../components/companysetup/dubaimainland'
import Abudhabimainland from '../components/companysetup/abudhabi'
import Sharjaminland from '../components/companysetup/sharjamainland'
import Ajmanmainland from '../components/companysetup/ajman'

const Contactuspage = () => {
  return (
      <LayoutComponent>
         <div style={{marginTop:"6%"}}></div>
        <div style={{textAlign: "center"}}>
        <TitleComponent title="Comapany Setup in UAE Main Land"/>
        </div>
        <br/>
        <div css={main}>
        <TabsContainerComponent labelone="Dubai Main Land" contentone={<Dubaimainland/>} contenttwo={<Sharjaminland/>} labeltwo="Sharjah Main Land" labelthree="Abu Dhabi Mainland" contentthree={<Abudhabimainland/>} labelfour="Ajman Mainland" contentfour={<Ajmanmainland/>} labelfive="Fujairah Mainland" contentfive={<Abudhabimainland/>} labelsix="Umm Al Qwain Mainland" contentsix={<Ajmanmainland/>} labelseven="Ras Al Khaimah Mainland" contentseven={<Abudhabimainland/>}/>
        </div>
        <ContactUsComponent/>
      </LayoutComponent>
  )
}

export default Contactuspage;

const main = css`
 margin:2px 5%;
`



