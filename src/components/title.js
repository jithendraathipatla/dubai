import React from 'react';
import {css} from '@emotion/core'

const Title = (props) => {
    return(
        <div style={{marginBottom:"10px",}}>
         <span css={title}>{props.title}</span>
        </div>
    )
}

export default Title;

const title= css`
color: #099bd7;
font-size: 20px;
font-weight: 500;
letter-spacing: 1.3px;
`