import React from "react"
import LayoutComponent from '../components/layout'
import {css} from '@emotion/core'
import TitleComponent from '../components/title'
import ContactUsComponent from '../components/contactus'
import TabsContainerComponent from '../components/tabscontainer'
import Dubaimainland from '../components/companysetup/dubaifreezone'
import Abudhabimainland from '../components/companysetup/abudhabi'
import Sharjaminland from '../components/companysetup/sharjamainland'
import Ajmanmainland from '../components/companysetup/ajman'

const Contactuspage = () => {
  return (
      <LayoutComponent>
         <div style={{marginTop:"6%"}}></div>
        <div style={{textAlign: "center"}}>
        <TitleComponent title="Comapany Setup in UAE Free Zones"/>
        </div>
        <br/>
        <div css={main}>
        <TabsContainerComponent labelone="Dubai Free Zone" contentone={<Dubaimainland/>} contenttwo={<Sharjaminland/>} labeltwo="Sharja Free Zone" labelthree="Abu Dhabi Free Zone" contentthree={<Abudhabimainland/>} labelfour="Ajman Free Zone" contentfour={<Ajmanmainland/>} labelfive="Fujairah Free Zone" contentfive={<Abudhabimainland/>} labelsix="Umm Al Qwain Free Zone" contentsix={<Ajmanmainland/>} labelseven="Ras Al Khaimah Free Zone" contentseven={<Abudhabimainland/>}/>
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



