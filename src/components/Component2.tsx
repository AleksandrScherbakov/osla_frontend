import React, {useContext} from "react";
import {DropdownContext} from "../Dropdown";

const Component2: React.FC = () => {
    const {setOpen} = useContext(DropdownContext);
    return (
        <div className={'customComponent'}>
            <div className={'customComponent__message'}>
                Платёжное поручение от 20.08.21.pdf
            </div>
            <div className={'customComponent__message'}>
                Платёжное поручение от 22.08.21.pdf
            </div>
            <div className={'customComponent__message'}>
                Платёжное поручение от 21.08.21.pdf
            </div>
            <div className={'customComponent__message'}>
                Счёт от 20.08.21.pdf
            </div>
            <div className={'customComponent__controls'}>
                <button className={'button button-secondary'}>Отменить</button>
                <button onClick={() => setOpen(false)} className={'button button-primary'}>Выгрузить все</button>
            </div>
        </div>
    )
}

export default Component2;