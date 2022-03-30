import React from "react";
import gear from "../assets/gear.svg";

const Trigger1: React.FC = () => {
    return(
        <button className={'iconButton'}>
            <img src={gear} alt="⚙️"/>
        </button>
    )
}

export default Trigger1