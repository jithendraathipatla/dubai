import React from "react";
import Slider from "react-slick";
import {css} from '@emotion/core';
import TitleComponent from '../components/title';

const SlickDemo = () => {
    const data = [
        {
            name:"Akash",
            message:"The professionals at Shuraa Management and Consultancy really take the time to understand our unique business needs and have undoubtedly provided the critical support we require to efficiently manage processes in support of preparing our company for future business endeavors. We really appreciate the time they dedicate to helping our company constantly move forward. They are very professional and friendly. Mr. Jashvant deserves a special appreciation as he handles all the queries very efficiently and promptly. I would have no hesitation in recommending Shuraa Management and Consultancy as they have always exceeded the expectations. I wholeheartedly endorse the Shuraa team and recommend working with them to set up your business for success."
        },

        {
            name:"Bhuvan",
            message:"The professionals at Shuraa Management and Consultancy really take the time to understand our unique business needs and have undoubtedly provided the critical support we require to efficiently manage processes in support of preparing our company for future business endeavors. We really appreciate the time they dedicate to helping our company constantly move forward. They are very professional and friendly. Mr. Jashvant deserves a special appreciation as he handles all the queries very efficiently and promptly. I would have no hesitation in recommending Shuraa Management and Consultancy as they have always exceeded the expectations. I wholeheartedly endorse the Shuraa team and recommend working with them to set up your business for success."

        },
        {
           name:"Gorge",
           message:"The professionals at Shuraa Management and Consultancy really take the time to understand our unique business needs and have undoubtedly provided the critical support we require to efficiently manage processes in support of preparing our company for future business endeavors. We really appreciate the time they dedicate to helping our company constantly move forward. They are very professional and friendly. Mr. Jashvant deserves a special appreciation as he handles all the queries very efficiently and promptly. I would have no hesitation in recommending Shuraa Management and Consultancy as they have always exceeded the expectations. I wholeheartedly endorse the Shuraa team and recommend working with them to set up your business for success."
        },
        {
            name:"Peter Pan",
            message:"The professionals at Shuraa Management and Consultancy really take the time to understand our unique business needs and have undoubtedly provided the critical support we require to efficiently manage processes in support of preparing our company for future business endeavors. We really appreciate the time they dedicate to helping our company constantly move forward. They are very professional and friendly. Mr. Jashvant deserves a special appreciation as he handles all the queries very efficiently and promptly. I would have no hesitation in recommending Shuraa Management and Consultancy as they have always exceeded the expectations. I wholeheartedly endorse the Shuraa team and recommend working with them to set up your business for success."

        }
    ]

    function display(){
        return data.map((item,i)=>{
            return(
                <div key={i} css={message}>
                 <span>{item.message}</span>
                 <h1>{item.name}</h1>
                </div>
            )
        })
    }
    
    var settings = {
        dots: true
      };
      return (
        <div css={container}>
           <div style={{textAlign:"center"}}>
            <h1 style={{fontSize:"20px", color: "white", fontWeight:"500", letterSpacing:"1.3px"}}>Client Testimonilas</h1>
           </div>
           <br/>
          <Slider {...settings}>
            {display()}
          </Slider>
        </div>
      );
}

 
export default SlickDemo;

const container = css`
  padding: 40px;
  background: #419be0;
`

const message= css`
 padding:0px 10%;
 color: white;
 h1{
     text-align: center;
     margin-top:30px;
     margin-bottom:15px;
     font-size:18px;
 }
`