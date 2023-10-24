'use client';
import Link from "next/link";
import RemoveBTn from "./RemoveBTn";
import { HiPencilAlt } from "react-icons/hi";
import { useEffect } from "react";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch the data");
    }
   return res.json();
  } catch (error) {
    console.error("Error loading topics", error);
    throw error;
  }
};


export default async function TopicList() {

  const { topics} = await getTopics();
   
  return (
    <>
    {topics.map(t =>(
      <div className="p-4  border
             border-slate-300 my-3 flex justify-between gap-5 items-start">

        <div>
          <h2 className=" font-bold text-2xl">{t.title}</h2>
          <div>{t.description} </div>
        </div>
        <div className="flex gap-2" >
          <RemoveBTn id ={t._id} />
          <Link href={`/editTopic/${t._id  }`}>
            <HiPencilAlt size={24}></HiPencilAlt>

          </Link>

        </div>


      </div>
     ) )  }
    </>
  )
} 