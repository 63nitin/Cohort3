import { useEffect, useRef, useState } from "react";

export default function App() {


  const [Message, setMesssage] = useState(["hii there!", "Hello"]);
  const wsRef = useRef();
  

  useEffect(() =>{
  const ws = new WebSocket("ws://localhost:8080");
  ws.onmessage = (event) =>{
    setMesssage(m => [...m, event.data]);
  }
  wsRef.current = ws;
  ws.onopen = () => {
    ws.send(JSON.stringify({
      type: "join",
      payload: {
        roomId: "red"
      }
    }))
  }
  }, [])
  return (
    <div className="h-screen bg-black flex flex-col">
      {/* Chat area */}
      <div className="flex-2 m-8 p-4">
        {/* Messages will go here */}
          
          {Message.map(message =>  <div className="m-10">
            <span className="bg-green-800 text-white rounded p-4  font-semibold">
              {message}
            </span>
          </div>)}
          
       
      </div>

      {/* Input area */}
      <div className="flex gap-2 items-center p-4 bg-gray-900">
        <input 
          id="message"
          className="flex p-2 rounded bg-white text-black w-1/3 outline-none"
          type="text"
          placeholder="Type your message..."
        />
        <button onClick={ () =>{
          const message = document.getElementById("message")?.value;
          wsRef.current.send(JSON.stringify({

            type: "chat",
            payload: {
              message: message
            }

          }))
        }
           
        } className="bg-green-300 px-4 py-2 rounded font-semibold">
          Submit
        </button>
      </div>
    </div>
  )
}
