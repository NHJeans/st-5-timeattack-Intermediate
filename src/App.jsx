import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useState } from "react";
import { decrement, increment } from "./redux/slices/calculatorSlice";

// TODO: 계산결과를 redux를 이용한 전역상태로 관리해 보세요.
function App() {
  const [result, setResult] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(increment(Number(result)));
  };
  const handleSubtract = () => {
    dispatch(decrement(Number(result)));
  };

  return (
    <div className="App">
      <h1>덧셈과 뺄셈이 가능한 앱 만들기</h1>
      <div>
        <input
          type="number"
          value={result}
          onChange={(e) => {
            setResult(e.target.value);
          }}
        />{" "}
        만큼을 <button onClick={handleAdd}>더할게요</button>{" "}
        <button onClick={handleSubtract}>뺄게요</button>
      </div>
      <hr />
      <div>
        <h3>결과</h3>
        <p>{count}</p>
      </div>
    </div>
  );
}

export default App;
