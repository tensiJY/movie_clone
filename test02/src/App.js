import {useState, useEffect} from "react";


// celanup function 이란?
//  componenet가 destory 될 때 실행됨
function Hello(){

  useEffect(()=>{
    console.log("created Hello ")
    //  component가 destory될 때 실행 됨
    return () => console.log(`destroyed :(`)
    
  }, [] )

  return(
    <h3>Hello World !!!!</h3>
  )

}

function Hi(){

  function byFn(){
    console.log("bye ")
  }

  function hiFn(){
    console.log('hi ')

    //  컴포넌트가 종료될때 함수를 실행시킴
    return byFn;
  }

  //  useEffect의 []은 한번만 실행됨
  useEffect(hiFn, []);

  return(
    <h3>hi</h3>
  )
}


function App() {
  const [showing, setShowing] = useState(false);

  const onClick = ()=>{
    setShowing( (prev)=>{
      //console.log(`prev : ${prev}, next : ${!prev}`)
      return !prev;
    } )
  }
 
  return (
    <div>
        {showing ? <Hello/> : <Hi /> }
        <button onClick={onClick}>{showing ? "hide" : "show"}</button>
    </div>
  );
}

export default App;
