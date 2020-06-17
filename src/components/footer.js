import React from 'react';
import {css} from '@emotion/core'
import { Link } from 'gatsby';
import {FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa';
import TitleComponent from '../components/title';


const footer = () => {
    return(
        <div>
        <div css={main}>
           
             <div>
             <TitleComponent title="Quick Links"/>
               <ul>
                <li>lkdjf</li>
                <li>lkdjf</li>
                <li>lkdjf</li>
                <li>lkdjf</li>
               </ul>
             </div>
             <div>
             <TitleComponent title="Quick Links"/>
             <ul>
             <li>lkdjf</li>
             <li>lkdjf</li>
             <li>lkdjf</li>
             <li>lkdjf</li>
            </ul>
             </div>
             <div>
             <TitleComponent title="Quick Links"/>
             <ul>
             <li>lkdjf</li>
             <li>lkdjf</li>
             <li>lkdjf</li>
             <li>lkdjf</li>
            </ul>
            </div>
             <div css={last}>
             <span><TitleComponent title="Follow us on:"/></span>
             <br/>
           
             <FaFacebook/>
             <FaInstagram/>
             <FaTwitter/>
             <FaYoutube/>
             </div>
        </div>
        <div css={lastl}>
        Copyright © {new Date().getFullYear()} New Business Mentors. All rights reserved 
        Privacy Policy
        Terms and Condition. 
        </div>
        </div>

    )
}

export default footer;

const lastl = css`
 color: white;
 text-align: center;
 background: #111;
 padding: 10px;
 span{
     display: block;
 }
`

const last = css`
display:flex;
svg{
     color: white;
     font-size: 30px;
     padding-right:10px;
 }
`

const  main = css`
 display: grid;
 grid-template-columns: 3fr 3fr 3fr 3fr;
 background: no-repeat padding-box #1e1e1e;
 color: #B6B6B6;
 grid-gap: 30px;
 padding: 10px 40px;
`