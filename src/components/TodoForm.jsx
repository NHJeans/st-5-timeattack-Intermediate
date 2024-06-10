import { useState } from "react";
import { addTodo } from "../redux/slices/todoSlice";
import { useDispatch } from "react-redux";

export default function TodoForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === "" || content === "") {
      alert("제목과 내용을 입력해주세요.");
      return;
    }
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      content,
      isDone: false,
    };
    dispatch(addTodo(newTodo));
    setTitle("");
    setContent("");
    console.log(title, content);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>제목: </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <label>내용: </label>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">추가</button>
    </form>
  );
}
