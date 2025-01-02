import { useContext, useRef, useState } from 'react';
import './Editor.css'
import { TodoDispatchContext } from '../App';

const Editor = () => {
    const {onCreate} = useContext(TodoDispatchContext);

    const [content, setContent] = useState("");
    const contentRef = useRef()

    const onChangeContet = (e) => {
        setContent(e.target.value)
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }

    const onSubmit = () => {
        if(content == "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    return (
        <div className="Editor">
            <input type="text" placeholder="새로운 Todo..." onKeyDown={onKeyDown}
            ref={contentRef} value={content} onChange={onChangeContet} />
            <button onClick={onSubmit}>추가</button>
        </div>
    )
}

export default Editor