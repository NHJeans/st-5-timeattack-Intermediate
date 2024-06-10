// Hint: TodoItem 컴포넌트는 props 를 받습니다.
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/slices/todoSlice";

export default function TodoItem({ todoId }) {
  const dispatch = useDispatch();
  const todo = useSelector((state) =>
    state.todos.find((todo) => todo.id === todoId)
  );

  return (
    <li
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        border: "1px solid black",
        width: "500px",
        height: "150px",
      }}
    >
      <section>
        <p>제목: {todo.title}</p>
        <p>내용: {todo.content}</p>
      </section>
      <section>
        <button onClick={() => dispatch(toggleTodo(todo.id))}>완료</button>
        {todo.isDone ? "취소" : "완료"}
        <button onClick={() => dispatch(deleteTodo(todo.id))}>삭제</button>
      </section>
    </li>
  );
}
