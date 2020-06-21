import React from "react"
import Howitworkscomponent from "../components/howitworks"
import Titlecomponent from '../components/title';
import Layout from "../components/layout"
import {css} from '@emotion/core'
import SEO from "../components/seo"
import Slidercomponent from "../components/slider"
import MentorsCOmponent from '../components/image'
import IndustriesandSpecializationcomponent from '../components/specilizationindustries'
import EnquiryForm from '../components/enquryform'
import TitleComponent from '../components/title'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slidercomponent />
    <br />
    <br />
    <hr/>
    <Howitworkscomponent />
    <br/>
    <hr/>
    <div style={{margin:"0px 4%"}}>
    <div style={{textAlign:"center"}}>
    <Titlecomponent title="Who’s a Mentor and Why Do You Need One?"/>
    </div>
    <div css={whydoi}>
      <div>
         <img src="https://d329jirxh7znrd.cloudfront.net/app/wp-content/uploads/sites/281/2019/08/home-illustration02.png" style={{width:"600px"}}/>
      </div>

      <div>
      <br/>
       <span>A Mentor is a defined as a Person who guides another to Greater Success.
        <br/>
       "Mentoring is a brain to pick, an ear to listen, and a push in the right direction." Source: John Crosby.
       <br/>
       A mentor is a navigator partnering with you on your business journey.
       <br/>
       Having a right mentor helps an entrepreneur maneuver the business in the right direction and moving towards accomplishing business goals.
       <br/>
       A mentor also assists in sharpening your learning curve, evaluating new ideas and possibilities, exploring ways to implement the same and grow your business.
       <br/>
       A mentor also assists in sharpening your learning curve, evaluating new ideas and possibilities, exploring ways to implement the same and grow your business.
       …… Which is why you need a Mentor</span>
      </div>
    </div>
    <br/>
    <hr/>
    <div style={{textAlign:"center"}}>
    <TitleComponent title="Our Work"/>
    </div>
    <div css={lastbefore}>
    
     <div css={main}>
      <div>
        <span>250 +</span>
        <h1>Expert Mentors</h1>
      </div>
      <div>
      <span>400 +</span>
      <h1>Sessions Conducted</h1>
      </div>
      <div>
      <span>50 +</span>
      <h1>Services</h1>
      </div>
      <div>
      <span>50 +</span>
      <h1>Mentees</h1>
      </div>
     </div>
     <div css={mainbefore}>
     <img src="https://d329jirxh7znrd.cloudfront.net/app/wp-content/uploads/sites/281/2019/08/home-review.png"/>
     </div>
     
    </div>
    <br/>
    <hr/>
    <MentorsCOmponent/>
    <br/>
    <hr/>
    <IndustriesandSpecializationcomponent/>
    </div>
    <br/>
    <hr style={{marginTop:"0px"}}/>
    <div css={main1}>
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
      
  </Layout>
)

export default IndexPage

const main1 = css`
 display: flex;
`
const one= css`
 flex: 7;
`
const two = css`
  flex: 3;
`

const main = css`
 display: block;
 flex:auto;
 background: linear-gradient(to left, orange, #0c2be9);
 text-align:center;
 padding:35px 10px;
 justify-content: space-around;
 color: white;
 font-size: 40px;
 h1{
  font-size: 16px;
  margin-top: 7px;
  letter-spacing: 0.5px;
  margin-bottom:30px;
 }
`
const mainbefore = css`
 flex:5;
`

const lastbefore = css`
 display:flex;
 justify-content: space-between;
`

const whydoi = css`
 display: flex;
 justify-content: space-between;
 div :nth-child(2){
  margin-left:30px;
  line-height: 30px;
  font-size: 17px;
  color:black;
  letter-spacing: 0.3px;
 }
`