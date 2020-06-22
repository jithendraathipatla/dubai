import React from "react"
import EnquiryForm from '../components/enquryform';
import {css} from '@emotion/core'
import TitleComponent from '../components/title'

const Contactuspage = () => {
  return (
       <div css={main}>
       <div css={one}>
          <div style={{textAlign:"center"}}>
          <TitleComponent title="Location"/>  
          </div>
         
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62146.281621654336!2d79.07129425682794!3d13.216362367994353!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad5c1a6cca26a1%3A0xaaadf018b7f72797!2sChittoor%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1592382863652!5m2!1sen!2sin" width="100%" height="530" frameborder="0" tabindex="0"></iframe>
       </div>
       <div  css={two}>
         <div style={{textAlign:"center"}}>
         <TitleComponent title="Intrested in Getting in touch?"/>
         </div>
       <EnquiryForm/>
       </div>
      
      </div>
  )
}

export default Contactuspage;

const main = css`
 display: flex;
`
const one= css`
 flex: 7;
`
const two = css`
  flex: 3;
`


