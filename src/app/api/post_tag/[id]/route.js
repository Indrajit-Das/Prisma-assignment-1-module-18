import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// update 
export async function PUT(request,{params}) {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const id = params.id;
        const data =await request.json();
        const prisma = new PrismaClient();
        const post_tag =await prisma.Post_Tag.update({
            where:{id:id},
            data:data
        });

        return NextResponse.json({status:"success",msg:post_tag},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error},{status:500})
    }
}
// delete 
export async function DELETE(req,{params}) {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const id = params.id;
        const prisma = new PrismaClient();
        const post_tag =await prisma.Post_Tag.delete({
            where:{id:id}
        });

        return NextResponse.json({status:"success",msg:post_tag},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error.message},{status:500})
    }
}

// single 
export async function GET(req,{params}) {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const id = params.id;
        const prisma = new PrismaClient();
        const post_tag =await prisma.Post_Tag.findUnique({
            where:{id:id}
        });

        return NextResponse.json({status:"success",msg:post_tag},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error.message},{status:500})
    }
}