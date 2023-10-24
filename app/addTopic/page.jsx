"use client"
import { useState } from "react";
import { useRouter } from "next/navigation"; // Use "next/router" instead of "next/navigation"

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handelSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description) {
      alert("Title and description are required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
      
        body: JSON.stringify({ title, description }),
      });

      if (response.ok) { // Changed "res" to "response"
        router.push("/");
      } else {
        throw new Error("Failed to create new topic");
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <form onSubmit={handelSubmit} className="flex flex-col gap-4">
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />

      <input
        onChange={(e) => setDescription(e.target.value)}
        value={description}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Description"
      />

      <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">
        Add Topic
      </button>
    </form>
  );
}
