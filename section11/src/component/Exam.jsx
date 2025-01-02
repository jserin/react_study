import { useReducer } from "react"

function reducer(state, action){
    if(action.type === 'INCREASE'){
        return state + action.data;
    } else if (action.type === 'DECREASE') {
        return state - action.data;
    }
}

const Exam = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    const onClickPlus = () => {
        dispatch({ // 액션 객체
            type: "INCREASE",
            data: 1,
        })
    }

    const onClickminus = () => {
        dispatch({ // 액션 객체
            type: "DECREASE",
            data: 1,
        })
    }

    return (
        <div>
            <h1>{state}</h1>
            <button onClick={onClickPlus}>+</button>
            <button onClick={onClickminus}>-</button>
        </div>
    )
}

export default Exam