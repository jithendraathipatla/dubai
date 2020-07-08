import React from "react"
import LayoutComponent from '../components/layout'
import {css} from '@emotion/core'
import TitleComponent from '../components/title'
import ContactUsComponent from '../components/contactus'
import TabsContainerComponent from '../components/tabscontainer'
import Dubaimainland from '../components/subcomponents/dubaimainland'
import Abudhabimainland from '../components/subcomponents/abudhabi'
import Sharjaminland from '../components/subcomponents/sharjamainland'
import Ajmanmainland from '../components/subcomponents/ajman'

const Contactuspage = () => {
  return (
      <LayoutComponent>
         <div style={{marginTop:"6%"}}></div>
        <div style={{textAlign: "center"}}>
        <TitleComponent title="Comapany Setup in UAE Off Shore"/>
        </div>
        <br/>
        <div css={main}>
        <TabsContainerComponent labelone="Dubai Off Shore" contentone={<Dubaimainland/>} contenttwo={<Sharjaminland/>} labeltwo="Sharja Off Shore" labelthree="Abu Dhabi Off Shore" contentthree={<Abudhabimainland/>} labelfour="Ajman Off Shore" contentfour={<Ajmanmainland/>}labelfive="Fujairah Off Shore" contentfive={<Abudhabimainland/>} labelsix="Umm Al Qwain Off Shore" contentsix={<Ajmanmainland/>} labelseven="Ras Al Khaimah Off Shore" contentseven={<Abudhabimainland/>}/>
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



