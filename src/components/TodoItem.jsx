import style from './TodoItem.module.css';

const TodoItem = () => {
  return (
    <div className={style.todoItem}>
      <input type="checkbox" />
      <span className={style.todoItem_content}>React 공부하기</span>
      <span className={style.todoItem_date}>2026. 2. 5</span>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
