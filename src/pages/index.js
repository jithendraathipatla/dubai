import React from "react"
import Howitworkscomponent from "../components/howitworks"
import Titlecomponent from '../components/title';
import Layout from "../components/layout"
import {css} from '@emotion/core'
import SEO from "../components/seo"
import Slidercomponent from "../components/slider"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slidercomponent />
    <br />
    <br />
    <Howitworkscomponent />
    <br/>
    <div style={{margin:"0px 4%"}}>
    <div style={{textAlign:"center"}}>
    <Titlecomponent title="Who’s a Mentor and Why Do You Need One?"/>
    </div>
    <div css={whydoi}>
      <div>
         <img src="https://jbm4u.com/assets/who_we_are.svg" style={{width:"500px"}}/>
      </div>
      <div>
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
       …… Which is why you need a Mentor</span>
      </div>
    </div>
    <hr/>
    </div>
  </Layout>
)

export default IndexPage

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