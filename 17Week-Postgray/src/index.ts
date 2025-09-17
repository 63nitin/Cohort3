import { Client } from "pg";
import  express  from "express";

const app = express();

app.use(express.json());




const pgClient = new Client('postgresql://neondb_owner:npg_sc68FHOgtJAN@ep-sparkling-lab-ad3te1zi-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require');

pgClient.connect();

async function main(){
   
    const response = await pgClient.query("SELECT * FROM users;")
    console.log(response.rows);
    const addresses = await pgClient.query("SELECT * FROM addresses");
    console.log(addresses.rows);
}

app.get("/", (req, res) =>{
  res.json({
    message: "app working fine"
  })
})


app.post("/signup",async (req, res) =>{
  const username = req.body.username;
  const password = req.body.password;
  const email = req.body.email;

  const city = req.body.city;
  const country = req.body.country;
  const pincode = req.body.country;

  const insertQuery = "INSERT INTO users (username, emailid, password) VALUES ($1, $2, $3) RETURNING id;";
  const insertAddresQuery = "INSERT INTO addresses (user_id, city, country, pinconde) VALUES ($1, $2, $3, $4)";

const response = await pgClient.query(insertQuery, [username, email, password]);

const userId = await response.rows[0].id;

  await pgClient.query(insertAddresQuery, [userId, city, country, pincode]);
 

  res.json({
    message: "User inserted sucessfully"
  })
  
  main();
})

app.get("/metadata", async (req, res) => {
  const id = req.query.id;

  const query1 = `SELECT username, emailid, id FROM users WHERE id = $1`;
  const query2 = `SELECT * FROM addresses WHERE user_id=$1`;

  const respose1 = await pgClient.query(query1, [Number(id)]);
  const response2 = await pgClient.query(query2, [Number(id)]);

  res.json({
     users: respose1.rows[0],
     addreses: response2.rows
  })

})


app.listen(3000, ()=>{
  console.log("Running on localhost 3000");
});
