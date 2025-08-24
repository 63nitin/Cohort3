import React from "react";



export default function Debouncing(){
    let currentClock;
    
    function deboundingBackend(){
    clearInterval(currentClock);
    currentClock = setTimeout(searchBackend, 30);
}

function searchBackend(){
    console.log("request set to backend");
}

deboundingBackend();
deboundingBackend();
deboundingBackend();
deboundingBackend();
deboundingBackend()
  return(
    <div>
    <h1>Debouncing Work Here</h1>
    </div>
  )
}

