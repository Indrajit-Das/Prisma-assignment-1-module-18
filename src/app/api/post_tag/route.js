import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// serialize problem solution
BigInt.prototype.toJSON = function(){
    return this.toString();
}
// create
export async function POST(request) {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const data = await request.json();
        const prisma = new PrismaClient();
        const post_tag = await prisma.Post_Tag.create({
            data:data
        });
        return NextResponse.json({status:"success",post_tag},{status:201});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error})
    }
}
// read 
export async function GET() {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const prisma = new PrismaClient();
        const post_tag =await prisma.Post_Tag.findMany();

        return NextResponse.json({status:"success",msg:post_tag},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error.message},{status:500})
    }
}
