'use client'

import axios from "axios"
import { useState } from "react"

export default function Signin(){
    const [username, setUsername] = useState('');
    const [password, setPassowrd] = useState('');

    return(
        <div className=" flex h-screen w-screen items-center justify-center">
         <div className="p-2 flex flex-col">
            <input type="text" 
             onChange={(e) =>{
                setUsername(e.target.value);
             }}
            className="border p-2 rounded-md" placeholder="name" />
            <br />
            <input type="text" 
            onChange={(e) =>{
                setPassowrd(e.target.value);
            }}
            className="border p-2 rounded-md" placeholder="email" />
            <br />

          
            <button className="bg-blue-500 p-1 rounded-md flex items-center justify-center cursor-pointer" onClick={() =>{
            axios.post('http://localhost:3000/api/v1/user/detail/',{
                username,
                password
            })
            }}>Signin</button>

         </div>
        </div>
    )
}