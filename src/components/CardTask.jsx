import style from './CardTask.module.css';
import { Trash, Check } from '@phosphor-icons/react';
import { useState } from 'react';

export function CardTask({ task, setTaskDone, removeTask }){
    const [checked, setChecked] = useState(false);

    const handleChangeStateCheckedInput = e => {
        setChecked(!checked);
        setTaskDone(task)
    }

    const classLabelCheckbox = checked 
        ? style['classCheckboxChecked']
        : style['classCheckboxUnchecked'] 

    const classParagraphChecked = checked 
        ? style['paragraphChecked'] 
        : ''
        
    return (
        <div className={style.cardTask}>
            <label className={`${classLabelCheckbox}`} htmlFor="checkbox" onClick={handleChangeStateCheckedInput}>
                <input readOnly type="checkbox" checked={checked}/>
                <span className={style.contentCheckBox}> 
                    {checked && <Check size={12}/> }
                </span>
            </label>   
            <div className={style.containerTextTask}> 
                <span className={`${style.paragraph} ${classParagraphChecked}`}> 
                    {task.nome_tarefa} 
                </span>
            </div>
            <button className={style.buttonDelete} onClick={e => removeTask(task)}> 
                <Trash size={16} />
            </button>
        </div>
    )
}