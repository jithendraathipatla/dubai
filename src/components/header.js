import React from "react"
import {css} from '@emotion/core';
import {Link} from 'gatsby'

const Header = () => {
  return(
    <div css={abx}>
    <div>
     <h1>logo</h1>
     </div>
     <div css={two}>
     <span><Link to='/'>home</Link></span>
     <span><Link to='/contact'>Contact</Link></span>
    

     </div>
    </div>
  )
}

export default Header

const two = css`
 span{
   a{
    margin-left: 34px;
    font-size: 22px;
    letter-spacing: 0.5px;
   }
 }
`


const abx = css`
position: fixed;
padding: 25px 1%;
margin: 0px 1%;
z-index: 99;
width: 97.7%;
background: white;
border-bottom-right-radius: 25px;
border-bottom-left-radius: 25px;
 box-shadow:0px 0px 8px 3px rgba(0,0,0,0.2);
 display:flex;
 justify-content: space-between;
 margin-bottom:3%;
`
