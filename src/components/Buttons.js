import React from "react";

function Buttons(props) {
    return (
        <div className="levels" onClick={() => props.difficulty(props.name)}>
            <div className="btnGroup">
                <div id="btnInd">
                    <h4 className="btnName">{props.name}<br/></h4>
                </div>
            </div>
        </div>
    );
}

export default Buttons;



