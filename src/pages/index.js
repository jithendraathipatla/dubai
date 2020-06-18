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
      
      </div>
      <div>
      
      </div>
    </div>
    </div>
  </Layout>
)

export default IndexPage

const whydoi = css`

`