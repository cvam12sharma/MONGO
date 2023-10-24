import connectMangoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async  function PUT(request ,{params}){
const{id}= params;
const{ newTitle:title, newDescription: description}= await request.json();
await connectMangoDB();
await Topic.findByIdAndUpdate(id, {title,description});
return NextResponse.json({message:"topic updated"},{status:200});n 
}

export async function GET(request,{params}){
const {id} = params;
await connectMangoDB();
    const topic = await Topic.findOne({_id: id});
return NextResponse.json({topic},{status:200});

}