import { memo, useContext } from 'react';
import './TodoItem.css'
import { TodoDispatchContext } from '../App';

const TodoItem = ({id, isDone, content, date}) => {
    const {onUpdate, onDelete} = useContext(TodoDispatchContext);

    const onChangeCheckbox = () => {
        onUpdate(id);
    }

    const onClickDeleteButton = () => {
        onDelete(id);
    }

    return (
        <div className="TodoItem">
            <input checked={isDone} type="checkbox" onChange={onChangeCheckbox} />
            <div className='content'>{content}</div>
            <div  className='date'>{new Date(date).toLocaleDateString()}</div>
            <button onClick={onClickDeleteButton}>삭제</button>
        </div>
    )
}

// useCallback 사용 후
export default memo(TodoItem)

// useCallback 사용 전
// export default memo(TodoItem, (prev, next) => {
//     if(prev.id !== next.id) return false;
//     if(prev.isDone !== next.isDone) return false;
//     if(prev.content !== next.content) return false;
//     if(prev.date !== next.date) return false;
//     return true;
// });