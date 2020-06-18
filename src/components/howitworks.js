import React from 'react';
import {css} from '@emotion/core'
import Titlecomponent from '../components/title'
import {GiTeamIdea, } from 'react-icons/gi'
import {BsPersonCheckFill} from 'react-icons/bs'
import {GrPersonalComputer} from 'react-icons/gr'


const HowitWorks = () => {
    return(
        <>
          <div style={{textAlign:"center"}}>
           <Titlecomponent title="How it Works ?"/>
          </div>
         <div css={content}>
          <div>
           <GiTeamIdea/>
          </div>
          <div>
           <BsPersonCheckFill/>
          </div>
          <div>
           <GrPersonalComputer/>
          </div>
         </div>
        </>
    )
}

export default HowitWorks;

const content = css`
  margin: 0px 3%;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;

`