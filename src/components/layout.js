import React,{useState, useEffect} from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import FooterComponent from '../components/footer'
import Header from "./header"
import "./layout.css"
import animateScrollTo from "animated-scroll-to"
import './globalstyles.scss'
import { FiChevronUp } from "react-icons/fi";
import {css} from '@emotion/core'


const Layout = ({ children }) => {

  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop)
  }, [showScroll])

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200) {
      setShowScroll(false)
    }
  }

  const scrollTop = () => {
    animateScrollTo(0)
  }

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
      >
        <main style={{paddingTop:"2%"}}>{children}</main>

        <FiChevronUp
          css={scrollicon}
          className="scrollTop"
          onClick={scrollTop}
          style={{ height: 43, display: showScroll ? "flex" : "none" }}
        />
        <FooterComponent/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout;

const scrollicon = css`
  position: fixed;
  bottom: 60px;
  right: 20px;
  cursor: pointer;
  background: #3273dc;
  color: #fff;
  width: 43px;
  height: 43px;
  border-radius: 50%;
  display: none;
  z-index: 8;
  overflow: hidden;
  transform: translate3d(0, 0, 0);
  padding: initial;
  line-height: initial;
  text-align: center;
  transition: opacity 0.4s;
  opacity: 1;
  :hover {
    opacity: 0.8;
  }
`