import React from "react"
import EnquiryForm from '../components/enquiryform2';
import {css} from '@emotion/core'
import TitleComponent from '../components/title'

const Contactuspage = () => {
  return (
       <div css={main}>
    
        
       <EnquiryForm/>
         
      </div>
  )
}

export default Contactuspage;

const main = css`
 display:block;;
`


