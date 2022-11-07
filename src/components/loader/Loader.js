import React from 'react'
import "./loader.css"

const Loader = () => {
    var full=false;

    const fill = () => {
        full=!full;
        document.getElementById("logocontainer").style.backgroundColor=full?"#3ebffa":"transparent";
    }
  return (
    <body>
    <div id="background"></div>
    <div id="logocontainer" onclick={fill}>
      <div id="pelogo">NS</div>
      <div className="loader" 
           style={{right:0, top:'0vh', width:'0.7vh', height:0, animation:'slide2 1s linear forwards infinite', animationDelay: '0.5s'}}>
      </div>
      <div className="loader" 
           style={{right:'0vh', bottom:0, height:'0.7vh', width:0, animation:'slide3 1s linear forwards infinite'}}>
      </div>
      <div className="loader" 
           style={{left:'0vh', top:0, height:'0.7vh', width:0, animation:'slide1 1s linear forwards infinite'}}>
      </div>
      <div className="loader" 
           style={{left:0, bottom:'0vh', width:'0.7vh', height:0, animation:'slide4 1s linear forwards infinite', animationDelay:'0.5s'}}>
      </div>
    </div>
  </body>
  )
}

export default Loader