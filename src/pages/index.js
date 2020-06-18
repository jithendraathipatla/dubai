import React from "react"
import Howitworkscomponent from '../components/howitworks';

import Layout from "../components/layout"

import SEO from "../components/seo"
import Slidercomponent from '../components/slider'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Slidercomponent/>
    <br/>
    <br/>
    <hr/>
    <Howitworkscomponent/>
  </Layout>
)

export default IndexPage
