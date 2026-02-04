import style from './TodoEditor.module.css';

const TodoEditor = () => {
  return (
    <div className={style.todoEditor}>
      <h4>새로운 Todo 작성하기 🖊️</h4>
      <div className={style.todoEditor_input}>
        <input type="text" placeholder="새로운 Todo..." />
        <button>추가</button>
      </div>
    </div>
  );
};

export default TodoEditor;
