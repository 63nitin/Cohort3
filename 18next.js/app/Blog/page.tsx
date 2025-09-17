  import axios from "axios";
import { todo } from "node:test";

  async function  getBlogs(){
        
     const respose = await axios.post("https://jsonplaceholder.typicode.com/todos/");

     return respose.data;
    }

  export default function Blog(){
    const blogs = getBlogs();
    return(
        <div>
           {
            blogs.map((todo:Itodo) =>{
                <todos title = {blogs.title} done = {blogs.compeleted} />
            })
           }
        </div>
    )
  }

   interface Itodo{
    title: string,
    done: boolean
   }

  function todos({title, done}: Itodo){
    <div>
        {title} 
        {done ? " ✅": "❌"}
    </div>
  }