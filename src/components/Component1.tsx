import React, {useContext} from "react";
import {DropdownContext} from "../Dropdown";

const Component1: React.FC = () => {
    const {setOpen} = useContext(DropdownContext)
    return (
       <div className={'customComponent'}>
           <h3>Подсветка значений</h3>
           <div>
               <input type="checkbox" id={'positiveValues'}/>
               <label htmlFor="positiveValues">Значения в плюс</label>
           </div>
           <div>
               <input type="checkbox" id={'negativeValues'}/>
               <label htmlFor="negativeValues">Значения в минус</label>
           </div>
           <hr/>
           <div className={'customComponent__controls'}>
               <button className={'button button-secondary'}>Очистить все</button>
               <button onClick={() => setOpen(false)} className={'button button-primary'}>Применить</button>
           </div>
       </div>
    )
}

export default Component1;