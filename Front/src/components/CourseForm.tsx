import { createCourse } from "@/services/lib/course";
import { AxiosResponse } from "axios";
import  { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";
import Select from "./Select";
import Button from "./ui/Button";
import ReactMarkdown from "react-markdown";

function CourseForm() {
  const [name, setName] = useState("");
  const [topic, setTopic] = useState(""); 
  const [difficulty, setLevel] = useState(""); 
  const [tags, setTags] = useState<string[]>([]);
  const [content, setContent] = useState("");
  const { auth } = useAuth();


  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = {
      name,
      topic,
      difficulty,
      tags:tags[0].split(","),
      content,
    };
console.log(courseData)


    try {
      const userId = auth?.user?.data._id
      console.log(userId)
      const response: AxiosResponse = await createCourse(userId,courseData,{
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
      })
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
  }, []);
  return (
    <div className="bg-background min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  text-dark">
      <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col ">
          <label htmlFor="name">Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <Select
            label="Topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            options={["Web Development", "Backend", "Frontend"]}
          />
        </div>

        <div>
          <Select
            label="Difficulty"
            value={difficulty}
            onChange={(e) => setLevel(e.target.value)}
            options={["Beginner", "Medium", "Advanced"]}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="tags">Tags</label>
          <input type="text" value={tags} onChange={(e) => setTags([e.target.value])} />
        </div>

        <div className="flex flex-col">
  <label htmlFor="content">Content</label>
  <textarea value={content} onChange={(e) => setContent(e.target.value)}
   style={{ overflowWrap: 'break-word' }}
   wrap="hard"
   rows={5}></textarea>
  <div className="markdown-preview mt-2 p-3 bg-white border rounded-lg">
    <ReactMarkdown>{content}</ReactMarkdown>
  </div>
</div>
            <div className='flex w-full'>
             <Button color="bg-btnOscuro" text="text-white">
              Create
            </Button>
            </div>
      </form>
    </div>
  );
}

export default CourseForm;
