import { useState } from 'react'
import './List.css'
import TodoItem from './Todoitem'

const List = ({todos, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("")

    const onChangeSearch = (e) => {
        setSearch(e.target.value)
    }

    const getFilteredData = () => {
        if(search === "") {
            return todos;
        }
        return todos.filter((todo) => todo.content.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredTodos = getFilteredData();

    return (
        <div className="List">
            <h4>Todo List 🎄</h4>
            <input type="text" placeholder="검색어를 입력학세요"
            value={search} onChange={onChangeSearch} />
            <div className='todos_wrapper'>
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete} />
                })}
            </div>
        </div>
    )
}

export default List