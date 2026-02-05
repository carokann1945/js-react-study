import { useState, useRef } from 'react';
import style from './TodoEditor.module.css';

const TodoEditor = ({ onCreate }) => {
  const inputRef = useRef();
  const [content, setContent] = useState('');

  const onChange = e => {
    setContent(e.target.value);
  };

  const onSubmit = () => {
    if (!inputRef.current.value) {
      inputRef.current.focus();
    } else {
      onCreate(content);
      setContent('');
    }
  };

  return (
    <div className={style.todoEditor}>
      <h4>새로운 Todo 작성하기 🖊️</h4>
      <div className={style.todoEditor_input}>
        <input ref={inputRef} type="text" placeholder="새로운 Todo..." onChange={onChange} value={content} />
        <button onClick={() => onSubmit()}>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
