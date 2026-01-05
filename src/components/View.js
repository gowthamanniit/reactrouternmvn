import React from 'react'
import { useNavigate } from 'react-router-dom'
const View = () => {
  const navigate=useNavigate()
  return (
    <div>
        <h1>This is view components</h1>
        <input type="button" onClick={()=>navigate(-1)} value="Back"></input>
    </div>
  )
}

export default View
