import {useState} from "react";

//  스테이트를 변경할 때 무조건 전체적으로 랜더 된다
function App() {
  const [counter, setValue] = useState(0);

  const onClick = () => {
    //console.log(`counter : ${counter}`)
    setValue( (prev) => prev+1 )
  }
  console.log(`render`)

  return (
    <div>
      <h1>{counter}</h1>
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
