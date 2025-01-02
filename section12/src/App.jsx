import './App.css'
import Home from './pages/Home'
import Diary from './pages/Diary'
import New from './pages/New'
import NotFound from './pages/NotFound'
import Edit from './pages/Edit'
import { Link, Route, Routes, useNavigate } from 'react-router-dom'
import { createContext, useReducer, useRef } from 'react'

const mockData = [
  {
    id:1,
    createdDate: new Date("2025-01-24").getTime(),
    emotionId: 1,
    content: "1번 일기 내용ㅇㅇㅇ"
  },
  {
    id:2,
    createdDate: new Date("2024-12-23").getTime(),
    emotionId: 2,
    content: "2번 일기 내용ㅇㅇㅇ"
  },
  {
    id:3,
    createdDate: new Date("2024-11-11").getTime(),
    emotionId: 1,
    content: "BBAEBBAERO DAY~~"
  },
]

function reducer (state, action) {
  switch(action.type) {
    case "CREATE": return [action.data, ...state];
    case "UPDATE": return state.map((item) => String(item.id) === String(action.data.id) ? action.data : item)
    case "DELETE": return state.filter((item) => String(item.id) !== String(action.id))
    default: return state
  }
}

export const DiaryStateContext = createContext();
export const DiaryDispatchContext = createContext();

function App() {
  const [data, dispatch] = useReducer(reducer, mockData)
  const idRef = useRef(4);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onUpdate = (id ,createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content
      }
    })
  }

  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id
    })
  }

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{onCreate, onUpdate, onDelete}}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/new' element={<New />} />
            <Route path='/diary/:id' element={<Diary />} />
            <Route path='/edit/:id' element={<Edit />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  )
}

export default App
