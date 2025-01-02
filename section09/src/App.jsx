import Header from './component/Header'
import Editor from './component/Editor'
import List from './component/List'
import Exam from './component/Exam'
import './App.css'
import { useReducer, useRef, useState } from 'react'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "study",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "study2222",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "study3333333333",
    date: new Date().getTime(),
  },
]

function reducer(state, action) {
  switch(action.type) {
    case 'CREATE': return [action.data, ...state];
    case 'UPDATE': return state.map((todo) => todo.id === action.targetId ? {...todo, isDone: !todo.isDone} : todo)
    case 'DELETE': return state.filter((todo) => todo.id !== action.targetId);
    default: return state;
  }

}

function App() {
  const [todos, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef(3);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++, 
      isDone: false,
      content: content,
      date: new Date().getTime(),
      }
    })
  };

  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId
    })
  };

  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId
    })
  }

  return (
    <div className='App'>
    {/* <Exam /> */}
    <Header />
    <Editor onCreate={onCreate}/>
    <List todos={todos} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  )
}

export default App
