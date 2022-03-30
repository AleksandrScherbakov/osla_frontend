import React, {useContext} from "react";

import clip from '../assets/clip.svg'
import triangle from '../assets/triangle.svg'
import {DropdownContext} from "../Dropdown";

const Trigger2: React.FC = () => {
    const {open} = useContext(DropdownContext)
    return (
        <div className={'trigger2'}>
            <img src={clip} alt="📎"/>
            <span>Ещё 5</span>
            <img src={triangle} alt="🔺" className={open ? '' : 'triangleUp'}/>
        </div>
    )
}

export default Trigger2;