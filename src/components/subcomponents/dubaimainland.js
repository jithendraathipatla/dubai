import React from 'react';
import TitleComponent from '../title';
import {css} from '@emotion/core'

const Dubaimainland = () => {
    const data = [
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        },
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        },
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        },
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        },
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        },
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        },
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        },
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        },
        {
            img:"Image 1",
            paragraph: "sdfh dsjfh i am from the apartment"
        }
    ]

    const display = () => {
        return data.map((item,i)=>{
            return(
                <div key={i} css={card}>
              <span>{item.img}</span>
             <span>{item.paragraph}</span>
              <br/>
              <button className="button is-link">More..</button>
            </div>
            )
           
        })
    }
    return (
        <div>
            <div css={main}>
             <TitleComponent title="Company Spaces from dubai Main land"/>
            </div>

            <div css={sty}>
             {display()}
            
            </div>
        </div>
    );
};

export default Dubaimainland;

const main = css`
  background: black;
`


const sty = css`
 display: grid;
 grid-template-columns: 3fr 3fr 3fr 3fr;
 grid-gap:30px;
`
const card = css`
 border: 1px solid #eeee;
 border-radius:2px;
`

const sub = css`

`