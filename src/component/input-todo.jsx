import React from 'react';

const InputTodo = (props)=>{
  const {todoText,onChange,onClick,disabled} = props;
  return(
    <div className="inputArea">
        <input disabled={disabled} placeholder="TODOを入力" 
        value={todoText}
         onChange = {onChange} />
        <button disabled={disabled} onClick={onClick}>追加</button>
      </div>
  );
};

export default InputTodo;
