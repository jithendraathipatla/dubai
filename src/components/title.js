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
 font-size:20px;
 color: orange;
`