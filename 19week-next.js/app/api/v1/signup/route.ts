

import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prismaClient = new PrismaClient();

export async function POST(req: NextRequest){
    const data = await req.json();

    console.log(data);

 const row =  await prismaClient.user.create({
        data : {
            
        username: data.username,
        passowrd: data.passowrd
        }
    });
    console.log(row);
    return NextResponse.json({
        message: "YOU have been signed up"
    })
}