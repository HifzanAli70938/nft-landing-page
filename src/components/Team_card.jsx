import React from 'react'
import "./css/footer.css";
const Team_card = ({heading,sub_heading,para}) => {
  return (
      <>
      <div className="card_parent">
<div className="card_main">
 <h3>{heading}</h3>
 <h5>{sub_heading}</h5>
 <p>{para}</p>
  </div>
  <div class="hexagon-part">
    <div class='hexagon-shape'></div>
</div> 

      </div>
      </>

  )
}

export default Team_card