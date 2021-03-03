import React, { useState } from "react";
import "./style.css"
import InputTodo from './component/input-todo'
import InCompliteTodos from './component/InCompleteTodos'
import CompleteTodos from "./component/Complete-Todos";


const App = () =>{
  const [todoText,setTodoText] = useState([""])
  const [imCompliteTodos,setIncompleteTodos] = useState([]);
  const[completeTodos,setCompleteTodos] = useState([]);
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = ()=>{
    if (todoText === "") return;
    const newTodos = [...imCompliteTodos, todoText]
    setIncompleteTodos(newTodos);

    setTodoText('')
  };

  const onClickDelete = (index)=>{
    const newTodos =[...imCompliteTodos];
    newTodos.splice(index,1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index)=>{
    const newInCompleteTodos =[...imCompliteTodos];
    newInCompleteTodos.splice(index,1);

    const newCompleteTodos =[...completeTodos,imCompliteTodos[index]];
    setIncompleteTodos(newInCompleteTodos)
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = (index) =>{
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index,1);

    const newimCompliteTodos = [...imCompliteTodos,completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newimCompliteTodos);
  };

  return(
    <React.Fragment>
      <InputTodo  
      todoText={todoText} 
      onChange={onChangeTodoText} 
      onClick={onClickAdd}
      disabled={imCompliteTodos.length >= 5}/>

      {imCompliteTodos.length >= 5 && (<p className='textColor'>登録できるtodoは5個までです。消化してください</p>) }

      <InCompliteTodos 
      todos = {imCompliteTodos} 
      onClickComplete = {onClickComplete} 
      onClickDelete={onClickDelete} />

      <CompleteTodos  
      todos={completeTodos} 
      onClickBack={onClickBack}/>
      
    </React.Fragment>
  );
};

export default App;
