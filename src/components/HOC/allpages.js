import React from "react"
import TitleComponent from '../title';
import LocationComponent from '../contactus'

const Contactuspage = (props) => {
  return (
      <div>
      <div style={{textAlign:"center", marginTop:"5%"}}>
      <TitleComponent title={props.title}/>
      </div>
      <div style={{margin:"0px 3%", textAlign:"justify"}}>
      {props.children}
      </div>
      <LocationComponent/>
      </div>
  )
}

export default Contactuspage;




