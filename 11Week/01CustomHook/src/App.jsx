import React, { useState, useEffect } from "react";
import useFetch from "./Hooks/FetchHook";
import UsePrevHook from "./Hooks/usePrev";
import Debouncing from "./Hooks/Debouncing";

function useCounter(){
   const [count, setCount] = useState(0);

   function increaseCount(){
    setCount(count+1);
   }

   return{
    count: count,
    increaseCount: increaseCount
   }
}


export default  function App(){
   const{count, increaseCount} = useCounter();
   const [currentPost, sertCurrentPost] = useState(1);
   const {finalData, loading} = useFetch("https://dummyjson.com/posts/"+ currentPost);


   if(loading){
    return <div>
      Loading....
    </div>
   }

  return  <div>
    {/* <button onClick={() => sertCurrentPost(2)}>Post2</button>
    <button onClick={() => sertCurrentPost(3)}>Post3</button>
    <button onClick={() => sertCurrentPost(4)}>Post4</button>
    {JSON.stringify(finalData)} */}

    {/* <UsePrevHook/> */}

    <Debouncing/>


  </div>
  
}


