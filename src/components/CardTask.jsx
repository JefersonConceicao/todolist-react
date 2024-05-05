import style from './CardTask.module.css';
import { Trash } from '@phosphor-icons/react';
import { useState } from 'react';

export function CardTask({ task }){
    const [checked, setChecked] = useState(false);

    const handleChangeStateCheckedInput = e => {
        setChecked(!checked);
    }

    return (
        <div className={style.cardTask}>
            <label>
                <input 
                type="checkbox" 
                checked={checked} 
                onChange={handleChangeStateCheckedInput}   
                />
            </label>   
            <div className={style.containerTextTask}> 
                <span> Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer. </span>
            </div>
            <button className={style.buttonDelete}> 
                <Trash size={16} />
            </button>
        </div>
    )
}