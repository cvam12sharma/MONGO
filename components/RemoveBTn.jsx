"use client";
// import { DELETE } from "@/app/api/topics/route";
import { useRouter } from "next/navigation";
import {
    HiOutlineTrash
} from "react-icons/hi";

export default function RemoveBTn({ id }) {
    const router = useRouter();
    const removeTopic = async () => {
        const confirmed = confirm("Are you sure?");

        if (confirmed) {
            const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
                method: "DELETE"
            });
            if (res.ok) {
                router.refresh();
            }
        }
    };

    return (
        <button onClick={removeTopic} className="text-red-800">
            <HiOutlineTrash size={24} />
        </button>
    );
}