import React from 'react'
import "./css/header.css";

const Card = ({text,para}) => {
  
  return (
    <div className="service_card">
<>
<h1>{text}</h1>
<p>{para}</p>
</>
    </div>
  )
}

export default Card