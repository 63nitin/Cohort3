import React, { useEffect, useState } from "react";

export default function App(){
  let [count, setCount] = useState(0);
  
  function increase(){
    setCount(function(){
      return count = count +1;
    });
  }

  function decrease(){
    setCount(function(){
      return count = count -1;
    })
  }

  return <div>
    <h1>Counter</h1>
    {count}
    <Counter count = {count}/>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Reduce</button>
  </div>
}

function Counter(props){

  useEffect(function(){
    console.log("mount");
  },[]);

  useEffect(()=>{
    console.log("Count has changed!");

  }, [props.count])

  return function(){
    console.log("unmounted");
  }
}