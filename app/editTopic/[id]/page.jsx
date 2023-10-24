
import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics?id=${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    const topic = await res.json();
    return topic;
  } catch (error) {
    console.error(error);
    return null; // Return null to indicate an error.
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const topic = await getTopicById(id);

  if (topic) {
    const { title, description } = topic;
    return <EditTopicForm id={id} title={title} description={description} />;
  } else {
    // Handle the case where topic is not found or an error occurred.
    return <div>Topic not found or an error occurred.</div>;
  }
}
