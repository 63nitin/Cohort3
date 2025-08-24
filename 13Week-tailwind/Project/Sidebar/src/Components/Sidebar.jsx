import React from "react"

export default function Sidebar(){
  return(
    <div className="flex">
      <div className="transition-all ease-in-out absolute delay-100 duration-500 bg-red-200 h-screen  md:translate-x-0 -translate-x-96 text-2xl">
        Sidebar
        <button className="transform-all duration-1000 bg-red-400 hover:bg-green-500 p-3 hover:p-8">Active</button>
      </div>
      <div className=" w-full h-screen text-2xl">
      <MainContent/>
      </div>
    
    </div>
  )
}


function MainContent(){
  return <div className="w-full">
    <div className="h-72 bg-black hidden md:block"></div>
    <div className="grid grid-cols-11 gap-8 p-8">
      <div className="h-96 rounded-2xl shadow md:col-span-2 bg-red-300 -translate-y-24"></div>
       <div className="h-96 rounded-2xl bg-green-200 md:col-span-6 shadow-lg"></div>
       <div className=" h-96 rounded-2xl bg-yellow-200 md:col-span-3 shadow-lg"></div>
    </div>

   
      
    
  </div>
}