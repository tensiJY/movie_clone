import {useState, useEffect} from "react";

//  스테이트를 변경할 때 무조건 전체적으로 랜더 된다 > useState
//  한번만 실행할 때 > useEffect
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setValue( (prev) => prev+1 )
  }

  const onChange = (event) => { 
      setKeyword( ()=>{
        console.log(`prev : ${keyword}, next : ${event.target.value}`);
      return event.target.value;
    }) 
  }

  console.log(`i run all the time`);

  //  한번만 실행 할 때
  //  첫번째 인자로 함수, 두번째 인자로 빈배열
  useEffect(()=>{
    console.log("i run only once.")
  }, [])

  //  원하는 값의 상태가 변할 때마다 실행
  //  첫번째 자로 함수, 두번째 인자로 state의 값
  //  counter값이 변한다 해도 다시 실행하지 않음, keyword가 변하면 실행이 됨
  useEffect(()=>{
    if(keyword !== "" && keyword.length > 5) console.log(`search for ... ${keyword}`);
  }, [keyword])


  return (
    <div>
      <h1>{counter}</h1>
      <input
        value={keyword}
        onChange={onChange}
        placeholder={"search for.."}
        type="text"
      />
      <button onClick={onClick}>click me</button>
    </div>
  );
}

export default App;
