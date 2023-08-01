import Average from "./ui/Average";
import Button from "../components/ui/Button";
import TagDifficulty from "../components/ui/TagDifficulty";
import { buyCourse, getCourses } from "@/services/lib/course";
import { Course } from "@/types/course.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { Badge } from "@/components/ui/badge"
import { BuyCourse } from "@/types/buyCourse.types";

function CardHome() {
  // estados
  const [courses, setCourses] = useState<Course[]>([]);
  const [buyCourseObject, setBuyCourseOject] = useState<BuyCourse>({ courseId: "", userId: ""});
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

    const handleBuyCourse: React.MouseEventHandler<HTMLButtonElement> = () => {

      
      const buyedCourse = async () => {
        try {
          const response: AxiosResponse = await buyCourse(buyCourseObject   );
          // console.log(response.data.data);
          setCourses(response.data.data);
        } catch (error) {
          console.error("Error al obtener los cursos:", error);
        } finally {
          setIsLoading(false);
        }
      };
      buyedCourse();
    }

  return (
    <section className=" bg-background">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="card-home flex gap-y-7 flex-wrap justify-center max-w-screen-2xl mx-auto  ">
          {courses.map((course, index ) => (
            <div key={index} className="rounded-2xl w-full sm:w-min-[80vw] md:w-1/3 lg:w-1/5 flex flex-col card-content-container transition-shadow transform hover:shadow-md hover:scale-105 hover:transition-all duration-300 ease-in-out mx-5">
              <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-40 bg-cover bg-center  rounded-t-xl relative flex-none">
                <TagDifficulty
                  color={
                    course.difficulty as "Beginner" | "Medium" | "Advanced"
                  }
                  children={course.difficulty}
                />
                <Average avg={course.average} />
              </div>
              <div className="contain-section flex flex-col py-4 px-6 bg-white rounded-2xl flex-auto">
                <h3 className="text-title font-bold mb-3">{course.name}</h3>
                <div className="tags flex gap-2 mb-4 flex-wrap">
                  {course.tags.map((tag, index) => (
                    // <h3 key={index} className="tag bg-gray-100 rounded-2xl px-1.5 py-1 text-text text-sm">
                      <Badge className="text-sm " key={index} variant="outline">{tag}</Badge>
                      
                    // </h3>
                  ))}
                </div>
                <div className="buttons-card mt-auto flex gap-3 justify-between">
                  <div className="flex gap-3">
                   
                   <Modal textButton="Ver mas" {...course} />

                    <Button action={handleBuyCourse}
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
