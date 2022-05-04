import React from "react";
import "./css/header.css";
import Eye from "./assests/Eye.png";
import Card from './Card';
const Header = () => {
  let para=`Space FOMO Charlie is your first venture into the galaxy to discover joy. It’s the first, small step in unveiling our universe to collectors with dozens of spacecrafts design.

  What is your FOMO Charlie in search of? Where is it going? How many other FOMO Charlie are near you? Your FOMO Charlie is the key to answering these questions in our first step of revealing the universe.
  
  All FOMO Charlie can claim their Space FOMO Charlie for free and receive its own unique appearance and competencies within their personal spacecraft. Stats like “bladder management” and “piloting ability” define a FOMO Charlie competency in Space
  `
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
  
<Card text="who we are ?" para={para} />
</div>
    </>
  );
};

export default Header;
