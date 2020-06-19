import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import TitleComponent from "../components/title"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import Slider from "react-slick"
import "../../node_modules/slick-carousel/slick/slick.css"
import "../../node_modules/slick-carousel/slick/slick-theme.css"
import "../components/layout.css"

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      Image1: file(relativePath: { eq: "mentorone.png" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image2: file(relativePath: { eq: "mentortwo.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image3: file(relativePath: { eq: "mentorthree.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image4: file(relativePath: { eq: "mentorfour.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image5: file(relativePath: { eq: "mentorfive.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image6: file(relativePath: { eq: "mentorsix.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image7: file(relativePath: { eq: "mentorseven.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image8: file(relativePath: { eq: "mentoreight.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image9: file(relativePath: { eq: "mentornine.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image10: file(relativePath: { eq: "mentorten.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image11: file(relativePath: { eq: "mentor11.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image12: file(relativePath: { eq: "mentor12.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image13: file(relativePath: { eq: "mentor13.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      Image14: file(relativePath: { eq: "mentor14.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 340, maxHeight: 250) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const fadeImages = [
    {
      img: data.Image2.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image3.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image4.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image5.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image6.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image9.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image10.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image11.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image12.childImageSharp.fluid,
      name: "Abcd",
    },
    {
      img: data.Image13.childImageSharp.fluid,
      name: "Abcd",
    },
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  }

  const slides = () => {
    return fadeImages.map((item, i) => {
      return (
        <div key={i} css={images}>
          <Img fluid={item.img} />
          <div
            style={{
              textAlign: "center",
              background: "#eeee",
              margin: "0px 10px",
              padding: "10px",
              marginRight: "0px",
            }}
          >
            <span>{item.name}</span>
          </div>
        </div>
      )
    })
  }

  const Slideshow = () => {
    return (
      <>
        <Slider {...settings}>{slides()}</Slider>
      </>
    )
  }

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <TitleComponent title="Meet our expert mentors" />
      </div>

      {Slideshow()}
    </>
  )
}

export default Image

const images = css`
  img {
    object-fit: cover !important;
    margin: 10px;
  }
`
