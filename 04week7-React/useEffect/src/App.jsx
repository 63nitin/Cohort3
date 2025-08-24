import { set } from "mongoose";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export default function App(){
  const [currentTab, setCurrentTab] = useState(1);
  const [loader, setLoader] = useState(true);
  const [tabData, setTabData] = useState({});

  useEffect(() =>{
    setLoader(true);
     fetch('https://jsonplaceholder.typicode.com/todos/'+  currentTab)
     .then(async res => {
      const data = await res.json();
      setTabData(data);
      setLoader(false)
     })
   
  }, [currentTab])


  return <div>
    <button onClick={function(){
      setCurrentTab(1)
    }} style={{color: currentTab === 1 ? "red": "black"}}>Tab#1</button>
    <button onClick={function(){
      setCurrentTab(2)
    }} style={{color: currentTab === 2 ? "red": "black"}}>Tab#2</button>
    <button onClick={function(){
      setCurrentTab(3)
    }} style={{color: currentTab === 3 ? "red": "black"}}>tab#3</button>
    <button onClick={function(){
      setCurrentTab(4)
    }} style={{color: currentTab === 4 ? "red": "black"}}>Tab#4</button>

    <br />
    <br />
    {loader ? "Loading..." : tabData.title}
  </div>
 
}