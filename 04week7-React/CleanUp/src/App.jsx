import React from "react";
import { use } from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function App(){
 
  const [showTimer, setShowTimer] = useState(true);

  useEffect(() => {
    setInterval(function(){
      setShowTimer(curr => !curr);
    }, 5000);
  }, [])

  return <div>
   {showTimer && <Timer/>}
  </div>

 
}

function Timer(){
   const [count, setCount] = useState(0);
 function increase(){
    setCount(curr => curr+1);
  }

  useEffect(function(){
   const clock = setInterval(function(){
    console.log("From inside the Clock..");
    increase()
   }, 1000);

   return function(){
    clearInterval(clock);
   }
  }, [])

  return <div>
 <h1>{count}</h1>
  </div>
}