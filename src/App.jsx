import { useState } from 'react';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { CardTask } from './components/CardTask';

import { 
  PlusCircle,  
} from '@phosphor-icons/react'

import clipboardImage from './assets/Clipboard.svg';
import style from  './App.module.css'
import './globals.css';

function App() {
  
  const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36);
  }

  const [form, setForm] = useState({
    nome_tarefa: ''
  });

  const [tarefas, setTarefas] = useState([]);

  const tasksDones = tarefas.reduce((prevValue, currentTask) => {
    if(currentTask.done){
      return prevValue + 1
    }

    return prevValue
  }, 0);

  const handleChangeInput = (state, value ) => {
    setForm({...form, [state]: value})
  }

  const handleSubmit = e => {
    e.preventDefault();

    if(form.nome_tarefa.trim() == ""){
      return;
    }

    setTarefas([...tarefas, {id: uid(), nome_tarefa: form.nome_tarefa, done:false}])
    setForm({nome_tarefa: ""})
  } 

  const setTaskDone = task => {
    let tarefasState = tarefas.map(taskState => {
      if(taskState.id == task.id){
          return {...taskState, done: !task.done}
      } 

      return {...taskState }

    });

    setTarefas(tarefasState);
  }

  const removeTask = task => {
    setTarefas([...tarefas.filter(taskState => taskState.id != task.id)])
  }

  return (  
    <>
      <Header/>
      <main className={style.container}>
        <form onSubmit={handleSubmit}>
          <section className={style.formTarefa}>
            <Input 
              placeholder="Adicionar uma nova tarefa" 
              value={form.nome_tarefa} 
              onChange={e => handleChangeInput("nome_tarefa", e.target.value )}
            />

            <Button type="submit"> 
              <span> Criar </span>{" "}
              <PlusCircle size={16} />
            </Button> 
          </section>
        </form>

        <section className={style.containerTarefas}>
          <header className={style.tarefasHeader}>
              <span className={style.tarefasCriadas}> 
                Tarefas Criadas <label> {tarefas.length} </label>
              </span>
              <span className={style.tarefasConcluidas}> 
                Concluídas <label> {tarefas.length > 0 ? `${tasksDones} de ${tarefas.length}` : 0 } </label>
              </span>
          </header>
        
          <main className={style.tarefasBodyContainer}> 
              {!!tarefas.length ? tarefas.map((task, key) => (
                <CardTask 
                  setTaskDone={setTaskDone} 
                  task={task} 
                  key={key} 
                  removeTask={removeTask}
                />
              )) : 
                <div className={style.containerVazio}>
                  <img src={clipboardImage} alt="Icone imagem vazio"/>
                  <strong>Você ainda não tem tarefas cadastradas </strong> 
                  <span> Crie tarefas e organize sues itens fazer </span>
                </div>
              }
          </main>
        </section>
      </main>
    </>
  )
}

export default App
