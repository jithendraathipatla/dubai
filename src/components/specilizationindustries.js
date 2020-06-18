import React, { useState } from "react"
import { css } from "@emotion/core"

const Specilizationindustries = () => {
  const [state, setstate] = useState(false)

  const handelSpecilization = () => {
    setstate(false)
  }

  const handelIndustries = () => {
    setstate(true)
  }

  const displayingIndustries = () => {
    return (
      <div>
        <h1>I am from the displayingIndustries</h1>
      </div>
    )
  }

  const displayingSpecilization = () => {
    return (
      <div>
        <h1>I am from the displayingSpecilization</h1>
      </div>
    )
  }

  const display = () => (
    <div>
      {state === false ? displayingIndustries() : displayingSpecilization()}
    </div>
  )

  return (
    <div style={{textAlign:"center"}}>
    <br/>
      <button onClick={handelSpecilization}>
        <p>Specilizations</p>
      </button>
      <button onClick={handelIndustries}>
        <p>Industries</p>
      </button>
      {display()}
    </div>
  )
}

export default Specilizationindustries
