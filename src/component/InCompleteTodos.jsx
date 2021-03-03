import React from 'react'

const InCompleteTodos = (props)=>{
  const {todos,onClickComplete,onClickDelete} = props;
  return(
    <div className="inCompliteArea">
        <p className ="title">未完了のTODO</p>
        <ul>
          {todos.map((todo, index)=>{
            return(
              <div key = {todo} className="listRow">
                <li>{todo}</li>
                <button onClick = {()=>onClickComplete(index)}>完了</button>
                <button onClick = {()=>onClickDelete(index)}>削除</button>
              </div>
          );
        })}
        </ul>
        </div>
  );
};

export default InCompleteTodos;