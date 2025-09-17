import axios from "axios"

export default async function Signup(){
    const response = await axios.get('https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details');
    
   await new Promise(r => setTimeout(r, 5000));

    const data = response.data;
    
    return (
        <div>
        {data.name} <br />
         {data.email}
        </div>
    )
}