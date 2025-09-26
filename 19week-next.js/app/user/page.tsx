import axios from "axios"

export default async function Signup(){
    const response = await axios.get('http://localhost:3000/api/v1/user/detail');

    const data = response.data;
    
    return (
        <div>
        {data.name} <br />
         {data.email}
        </div>
    )
}