import React from "react";

function Nav() {
  return (
    
    <nav>
        <div className="game-name">
            Clicky Game
        </div>
        <div className="directions">
            Click on an image to begin!
            <span className="subDirections">These are subs</span>
        </div>
        <div className="game-info-container game-info">
                Score <span id="score">0</span> &nbsp;&nbsp;&nbsp;&nbsp;||&nbsp;&nbsp;&nbsp;&nbsp;
                Top Score <span id="top-score">0</span>
        </div>
    </nav>
    
  );
}

export default Nav;