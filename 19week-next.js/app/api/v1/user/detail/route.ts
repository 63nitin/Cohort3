import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prismaClient = new PrismaClient();



export async function Post(req: NextRequest, res: NextResponse){

    const data = await req.json();
    console.log(data);

    await prismaClient.user.create({
        data : {
            username: data.username,
            passowrd: data.passowrd
        }
    });
    res.send.json({
        message: "Success"
    })
}


export  function GET(){
    return NextResponse.json({
        name: "Nitin",
        email: "nitin@gmail.com"
    })
}