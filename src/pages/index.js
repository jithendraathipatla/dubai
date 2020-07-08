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
import ClientTestimonials from '../components/slickslider';

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
    <ClientTestimonials/>
    <ContactComponent/>
  </Layout>
)

export default IndexPage




