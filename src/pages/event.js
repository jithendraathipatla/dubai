import React from "react"
import EnquiryForm from '../components/enquryform';
import LayoutComponent from '../components/layout'
import {css} from '@emotion/core'
import TitleComponent from '../components/title'
import ComingSooncomponent from '../components/underconstruction';

const Contactuspage = () => {
  return (
      <LayoutComponent>
      <br/>
      <ComingSooncomponent/>
       <div css={main}>
       <div css={one}>
          <div style={{textAlign:"center"}}>
          <TitleComponent title="Location"/>  
          </div>
         
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d317718.69319292053!2d-0.3817765050863085!3d51.528307984912544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon%2C%20UK!5e0!3m2!1sen!2sin!4v1592900207891!5m2!1sen!2sin" width="100%" height="530" frameborder="0" tabindex="0"></iframe>
       </div>
       <div  css={two}>
         <div style={{textAlign:"center"}}>
         <TitleComponent title="Intrested in Getting in touch?"/>
         </div>
       <EnquiryForm/>
       </div>
      
      </div>
      
      </LayoutComponent>
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


