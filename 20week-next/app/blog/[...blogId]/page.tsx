import axios from "axios"
import { json } from "stream/consumers";


export default async function  Blog({params}: any){
 const blogId = (await params).blogId

 return <div>
    id - {JSON.stringify(blogId)};

 </div>
}