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
    <ContactComponent/>
  </Layout>
)

export default IndexPage



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