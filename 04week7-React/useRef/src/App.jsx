import React from "react";
import { useRef } from "react";

export default function App(){
  const inputRef = useRef()
  function focusOnInput(){
    inputRef.current.focus();
  }

  return <div>
    Sing up
    <input ref={inputRef} type="text" />
    <input type="text" />
    <button onClick={focusOnInput}>submit</button>
  </div>
}