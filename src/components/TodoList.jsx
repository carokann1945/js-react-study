import style from './TodoList.module.css';

const TodoList = () => {
  return (
    <div className={style.todoList}>
      <h4>Todo List 🌱</h4>
      <input type="text" placeholder="검색어를 입력하세요" />
    </div>
  );
};

export default TodoList;
