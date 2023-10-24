import connectMangoDB from "@/libs/mongodb";
import { connect } from "mongoose";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
    const{title, description} = await request.json();
    await connectMangoDB();
  await Topic.create({title,description});
  return NextResponse.json({message: "Topic Created"}, {status:201})
}


export async function GET(){
    await connectMangoDB();
    const topics = await Topic.find();
    return NextResponse.json({topics});
}

export async function DELETE(request){
    const id= request.nextUrl.searchParams.get("id");
    await connectMangoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({message:"topic deleted "},{status:200});
}

