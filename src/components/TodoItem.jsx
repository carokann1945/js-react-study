import style from './TodoItem.module.css';

const TodoItem = ({ id, isDone, content, createdDate }) => {
  const date = new Date(createdDate).toLocaleDateString();

  return (
    <div className={style.todoItem}>
      <input type="checkbox" checked={isDone} />
      <span className={style.todoItem_content}>{content}</span>
      <span className={style.todoItem_date}>{date}</span>
      <button>삭제</button>
    </div>
  );
};

export default TodoItem;
