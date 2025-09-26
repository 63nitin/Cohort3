'use client'

import axios from "axios"
import { useRef } from "react"

export default function Signup(){
    const usrnameRef = useRef('');
    const passowrdRef = useRef('');
    return(
        <div className=" flex h-screen w-screen items-center justify-center">
         <div className="p-2 flex flex-col">
            <input ref={usrnameRef} type="text" className="border p-2 rounded-md" placeholder="name" />
            <br />
            <input ref={passowrdRef} type="text" className="border p-2 rounded-md" placeholder="email" />
            <br />

          

            <button className="bg-blue-500 p-1 rounded-md flex items-center justify-center cursor-pointer" onClick={() =>{
                  let username = usrnameRef.current.value;
                  let passowrd = passowrdRef.current.value;
            axios.post('http://localhost:3000/api/v1/signup',{
                username,
                passowrd
            })
            }}>Submit</button>

         </div>
        </div>
    )
}