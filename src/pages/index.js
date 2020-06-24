import React from "react"
import Howitworkscomponent from "../components/howitworks"
import Titlecomponent from '../components/title';
import Layout from "../components/layout"
import {css} from '@emotion/core'
import SEO from "../components/seo"
import Slidercomponent from "../components/slider"
import MentorsCOmponent from '../components/image'
import IndustriesandSpecializationcomponent from '../components/specilizationindustries'
import ContactComponent from '../components/contactus'
import TitleComponent from '../components/title'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slidercomponent />
    <br />
    <br />
    <hr/>
    <IndustriesandSpecializationcomponent/>
    <hr/>
    <Howitworkscomponent />
    <hr/>
    <div style={{margin:"0px 4%"}}>
    <div style={{textAlign:"center"}}>
    <Titlecomponent title="Who’s a Mentor and Why Do You Need One?"/>
    </div>
    <div css={whydoi}>
      <div>
         <img src="https://d329jirxh7znrd.cloudfront.net/app/wp-content/uploads/sites/281/2019/08/home-illustration02.png" style={{width:"600px"}}/>
      </div>
      <div style={{textAlign:"justify"}}>
       <span>A Mentor is a defined as a Person who guides another to Greater Success.
        <br/>
       Mentoring is a brain to pick, an ear to listen, and a push in the right direction." Source: John Crosby.
       <br/>
       A mentor is a navigator partnering with you on your business journey.
       <br/>
       Having a right mentor helps an entrepreneur maneuver the business in the right direction and moving towards accomplishing business goals.
       <br/>
       A mentor also assists in sharpening your learning curve, evaluating new ideas and possibilities, exploring ways to implement the same and grow your business.
       <br/>
       A mentor also assists in sharpening your learning curve, evaluating new ideas and possibilities, exploring ways to implement the same and grow your business.
       <br/>
       A mentor also assists in sharpening your learning curve, evaluating new ideas and possibilities, exploring ways to implement the same and grow your business.
       <br/>
       …… Which is why you need a Mentor</span>
      </div>
    </div>
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
    </div>
    <br/>
    <hr style={{marginTop:"0px"}}/>
    <ContactComponent/>
      
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
 background: linear-gradient(to right,black,#C8AF28);
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