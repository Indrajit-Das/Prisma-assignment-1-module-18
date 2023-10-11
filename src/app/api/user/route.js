import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
// crud via user model
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
        const newUser = await prisma.User.create({
            data:data
        });
        return NextResponse.json({status:"success",newUser},{status:201});
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
        const users =await prisma.User.findMany();

        return NextResponse.json({status:"success",msg:users},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error.message},{status:500})
    }
}
