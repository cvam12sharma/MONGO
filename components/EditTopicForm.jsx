
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicform({ id, title, description }) {
  const [newtitle, setnewtitle] = useState(title);
  const [newdescription, setnewdescription] = useState(description);


  const handlesumit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PUT",
        body: JSON.stringify({ newtitle, newdescription }),
      });

      if (!res.ok) {
        throw new Error("failed to update topic ")
      }
      Router.push("/");

    } catch (error) {
      console.log(error);


    }



  }




  return (
    <form onSubmit={handlesumit} className=" flex flex-col gap-4 ">
      <input

        onChange={(e) => setnewtitle(e.target.value)}
        value={newtitle}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />


      <input
        onChange={(e) => setnewdescription(e.target.value)}
        value={newdescription}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic description"

      />

      <button className=" bg-green-600 font-bold text-white py-3 px-6 w-fit">
        update    Topic
      </button>
    </form>

  )
}