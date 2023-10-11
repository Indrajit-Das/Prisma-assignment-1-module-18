import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// create post
export  async function POST(req){
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try {
        const data = req.json();
        const prisma = new PrismaClient()
        const post = await prisma.Post.create({
            data: data
        })
        return NextResponse.json({post})
    }
    catch(error){
        return NextResponse.json({status:"fail",msg:error});
    }
}
// read posts
export  async function GET(){
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const prisma = new PrismaClient();
        const posts =await prisma.Post.findMany();

        return NextResponse.json({status:"success",msg:posts},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error.message},{status:500})
    }
}