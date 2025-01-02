import { useContext, useMemo, useState } from 'react'
import './List.css'
import TodoItem from './Todoitem'
import { TodoStateContext } from '../App'

const List = () => {
    const todos = useContext(TodoStateContext);
    
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

    const {totalCount, doneCount, notDoneCount} = useMemo(() => {
        const totalCount = todos.length;
        const doneCount = todos.filter((todo) => todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount, doneCount, notDoneCount
        }
    }, [todos]);

    return (
        <div className="List">
            <h4>Todo List 🎄</h4>
            <div>
                <div>total: {totalCount}</div>
                <div>done: {doneCount}</div>
                <div>notDone: {notDoneCount}</div>
            </div>
            <input type="text" placeholder="검색어를 입력학세요"
            value={search} onChange={onChangeSearch} />
            <div className='todos_wrapper'>
                {filteredTodos.map((todo) => {
                    return <TodoItem key={todo.id} {...todo} />
                })}
            </div>
        </div>
    )
}

export default List