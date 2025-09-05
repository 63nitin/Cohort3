import { useEffect, useRef, useState } from "react"


export default function App(){

const [socket, setSocket] = useState();
const inputRef = useRef();

  function sendMessage(){
   if(!socket){
    return;
   }

   const message = inputRef.current.value;
   socket.send(message)
  }

  useEffect(() =>{
   const ws = new WebSocket("ws://localhost:8080");
   setSocket(ws);
   
   ws.onmessage = (ev) =>{
      alert(ev.data);
   }

   ws.onerror = () => {

   }
  ws.close = () => {

  }

  ws.onopen = () =>{

  }

  }, [])
  return(
    <div>
      <input ref={inputRef} type="text" placeholder="message" />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}