import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

// update
export async function PUT(req, { params }) {
    BigInt.prototype.toJSON = function(){
        return this.toString();
    }

    const data = await req.json();
    const id = params.id;
  
    try {
        const prisma = new PrismaClient();
        const post = await prisma.Post.update({
            where: {id: id,},
            data: data,
        });
  
      return NextResponse.json({ status: "success", data: post });
    }catch (error) {
      return NextResponse.json({ status: "fail", data: error });
    }
  }
  // delete
export async function DELETE(req, { params }) {
    const id = params.id;
    try {
        const prisma = new PrismaClient();
      const data = await prisma.Post.delete({
        where: {id: id}
      });
  
      return NextResponse.json({ status: "success", data: data });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ status: "fail", data: error });
    }
  }
  // Single  post
export async function GET(req, { params }) {
    const id = params.id;
  
    try {
        const prisma = new PrismaClient();
      const data = await prisma.Post.findUnique({
        where: { id: id }
      });
  
      return NextResponse.json({ status: "success", data });
    } catch (error) {
      console.log(error);
      return NextResponse.json({ status: "fail", data: error });
    }
  }