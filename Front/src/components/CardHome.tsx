import Average from "./ui/Average";
import Button from "../components/ui/Button";
import TagDifficulty from "../components/ui/TagDifficulty";
import { getCourses } from "@/services/lib/course";
import { Course } from "@/types/course.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";

function CardHome() {
  // estados
  const [courses, setCourses] = useState<Course[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

   
  useEffect(() => {
    // Definir una función asincrónica dentro del useEffect para poder usar 'await'
    const fetchCourses = async () => {
      try {
        const response: AxiosResponse = await getCourses();
        // console.log(response.data.data);
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCourses(); // Llama a la función asincrónica para obtener los cursos
  }, []);

  return (
    <section className=" bg-background">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-home flex gap-5 flex-wrap justify-center">
          {courses.map((course, index ) => (
            <div key={index} className="sm:w-full md:w-1/3 lg:w-1/4 p-4">
              <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-36 bg-cover bg-center  rounded-t-xl relative">
                <TagDifficulty
                  color={
                    course.difficulty as "Beginner" | "Medium" | "Advanced"
                  }
                  children={course.difficulty}
                />
                <Average avg={course.average} />
              </div>
              <div className="contain-section py-4 px-6 bg-white rounded-xl">
                <h3 className="text-title font-bold mb-3">{course.name}</h3>
                {/* <p className="text-text mb-3">
                  {truncateDescription(content, 15)}
                </p> */}
                <div className="tags flex gap-2 mb-4 flex-wrap">
                  {course.tags.map((tag, index) => (
                    <h3 key={index} className="tag bg-gray-100 rounded-md px-1.5 py-1 text-text text-sm">
                      {tag}
                    </h3>
                  ))}
                </div>
                <div className="buttons-card flex gap-3 justify-between">
                  <div className="flex gap-3">
                   
                   <Modal textButton="Ver mas" name={course.name} content={course.content} />

                    <Button
                      color="bg-btnOscuro"
                      text="text-white"
                      children="Comprar"
                    />
                  </div>

                  <p className=" text-slate-400">
                    <strong className="text-black text-lg">
                      {course.price}
                    </strong>
                    /kwl
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default CardHome;
