import { useState } from 'react';

import { Header } from './components/Header';
import { Input } from './components/Input';
import { Button } from './components/Button';
import { CardTask } from './components/CardTask';

import { PlusCircle, ListChecks } from '@phosphor-icons/react'

import clipboardImage from './assets/Clipboard.svg';
import style from  './App.module.css'
import './globals.css';

function App() {
  const [form, setForm] = useState({
    nome_tarefa: ''
  });

  const [tarefas, setTarefas] = useState([]);

  const handleChangeInput = (state, value ) => {
    setForm({...form, [state]: value})
  }

  const handleSubmit = e => {
    e.preventDefault();
    setTarefas([...tarefas, {nome_tarefa: form.nome_tarefa, done:false}])
    setForm({nome_tarefa: ""})
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
                Tarefas Criadas <label> 0</label>
              </span>
              <span className={style.tarefasConcluidas}> 
                Concluídas <label> 0</label>
              </span>
          </header>
        
          <main className={style.tarefasBodyContainer}> 
              {!!tarefas.length ? tarefas.map((item, key) => (
                <CardTask task={item} key={key} />
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
