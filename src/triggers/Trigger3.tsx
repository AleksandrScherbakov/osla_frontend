import React, {useContext} from "react";
import {DropdownContext} from "../Dropdown";

const Trigger3: React.FC = () => {
    const {open} = useContext(DropdownContext)
    return (
        <span>{open ? "Закрыть" : "Открыть"} рот</span>
    )
}

export default Trigger3;