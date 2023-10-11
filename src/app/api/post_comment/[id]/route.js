import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// update category
export async function PUT(request,{params}) {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const id = params.id;
        const data =await request.json();
        const prisma = new PrismaClient();
        const post_comment =await prisma.Post_Comment.update({
            where:{id:id},
            data:data
        });

        return NextResponse.json({status:"success",msg:post_comment},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error},{status:500})
    }
}
// delete a category
export async function DELETE(req,{params}) {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const id = params.id;
        const prisma = new PrismaClient();
        const post_comment =await prisma.Post_Comment.delete({
            where:{id:id}
        });

        return NextResponse.json({status:"success",msg:post_comment},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error.message},{status:500})
    }
}

// single category
export async function GET(req,{params}) {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }
    try{
        const id = params.id;
        const prisma = new PrismaClient();
        const post_comment =await prisma.Post_Comment.findUnique({
            where:{id:id}
        });

        return NextResponse.json({status:"success",msg:post_comment},{status:200});
    }catch(error){
        return NextResponse.json({status:"fail",msg:error.message},{status:500})
    }
}