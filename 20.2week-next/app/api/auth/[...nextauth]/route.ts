import NextAuth from "next-auth";
import  CredentialsProvider  from "next-auth/providers/credentials";


const handler = NextAuth({
    providers: [
        CredentialsProvider({
              name: "Email",
              credentials: {
                username: {label: "Username", type: "text", placeholder: "Smith"},
                password: {label: "Password", type: "password"}
              },

              async authorize(credentials, req){
                return{
                    username: "harkirat",
                    id: "1",
                    email: "harkirat@gmail.comd"
                }
              }
        })
    ]
})

export const GET = handler;
export const POST = handler;