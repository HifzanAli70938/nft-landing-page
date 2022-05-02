import React from "react";
import "./css/header.css";
import Eye from "./assests/Eye.png";
import Card from './Card';
const Header = () => {
  return (
    <>
    <div className="header_main">


      <section>
        <div class="curve">
          <div className="navBar">
            <div className="nav_left">
              <div className="nav_logo">
                <div className="image">
                  <img src={Eye} alt="FOMO Charlie" />
                </div>
              </div>
              <div className="nav_elem">
                <ul>
                  <span>
                    <li>Discord</li>
                  </span>
                  <li>Twitter</li>
                  <li>Opensea</li>
                  <li>Looksrare</li>
                  <li>Medium</li>
                </ul>
              </div>
            </div>
            <div className="nav_right">
              <div className="nav_btn">
                <h4>install metamask</h4>
              </div>
            </div>
          </div>
<div className="home_section">
  <div className="heading"><h1>FOMO Charlie</h1></div>
  <div className="para"><p>We are the dreamers</p> </div>

</div>
        </div>
      </section>
  
<Card text="who we are ?" para="lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos lore Ipsa laudantium molestias eos" />
</div>
    </>
  );
};

export default Header;
