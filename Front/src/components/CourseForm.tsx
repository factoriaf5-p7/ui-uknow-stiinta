import { createCourse } from "@/services/lib/course";
import { AxiosResponse } from "axios";
import React, { useEffect, useState } from "react";
import useAuth from "@/hooks/useAuth";

function CourseForm() {
const[name,setName]= useState("")
const[topic,setTopic]= useState("")
const[level,setLevel]= useState("")
const[tags,setTags]= useState("") 
const[content,setContent]= useState("")
const {auth} = useAuth()

/* const courseData = {
name,
topic,
level,
tags,
content
}

useEffect(() => {
const pushCourse = async () => {
  try{

    const response : AxiosResponse = await createCourse(auth?.user?.data._id)
    console.log(response)
  }catch(error){

  }

} */
  
//})

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="topic">Topic:</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="difficulty">Difficulty:</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="tags">Tags:</label>
          <input type="text" />
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <textarea></textarea>
        </div>

      </form>
    </div>
  );
}

export default CourseForm;
