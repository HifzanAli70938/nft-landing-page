import React from 'react'
import "./css/footer.css";
import Card from './Team_card';
import TwitterIcon from '@mui/icons-material/Twitter';
import discord from '../components/assests/discord2.png'
const Footer = () => {
  return (
    <>
    <div className="footer_parent">
<div className="footer_section">
  <div className="footer_upper"></div>
  <div className="footer_lower">
<Card heading="fomo charlie (poem)" sub_heading="Artist/cofounder" para="lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Is"/>
<Card heading="stubby" sub_heading="Creative/Director" para="lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Is"/>
<Card heading="evothecurator" sub_heading="Project cordinator" para="lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Is"/>
<Card heading="0xStudio" sub_heading="web3 Enabler team" para="lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Is"/>
  </div>
  <div id="wrapper">
    <div id="test">
    </div>
</div>

</div>
<footer>
  <div className="left"><p>@2022 FOMO Charlie</p>
  <p>All Right Reserverd</p>
  </div>
  <div className="right">
    <div className="twitter">
    <TwitterIcon/>
    </div>

    <div className="img_discord">
    <img src={discord} alt="discord" />
    </div>
  
    </div>
</footer>
</div>
</>
  )
}

export default Footer