import style from './TodoList.module.css';
import TodoItem from './TodoItem';

const TodoList = ({ todo }) => {
  return (
    <div className={style.todoList}>
      <h4>Todo List 🌱</h4>
      <input type="text" placeholder="검색어를 입력하세요" />
      {todo.map(it => (
        <TodoItem key={it.id} {...it} />
      ))}
    </div>
  );
};

export default TodoList;
