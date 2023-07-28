import Average from "@/UI/Average";
import TagDifficulty from "@/UI/TagDifficulty"
import { getCourses } from "@/services/lib/course"
import { Course } from "@/types/course.type";
import { AxiosResponse } from "axios";
import { useEffect, useState } from "react"



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
            setCourses(response.data.data)           
          } catch (error) {
            console.error('Error al obtener los cursos:', error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchCourses(); // Llama a la función asincrónica para obtener los cursos
      }, []);

  return (
    <section>
        {isLoading ? (
            <div>Loading...</div>
            ):( 
          <div className="card-home flex gap-5 flex-wrap m-auton justify-center">
            {courses.map((course) => (
              <div key={course._id} className="sm:w-full md:w-1/3 lg:w-1/4 p-4" >
                    <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-36 bg-cover bg-center rounded-t-xl relative">
            
            <TagDifficulty 
                color={course.difficulty as "Beginner" | "Medium" | "Advanced"}
                children={course.difficulty}
                />
             <Average avg={course.average} />
        </div>
        <div className="contain-section">
            <h3 className="text-title">{course.name}</h3>
            <p>Explore all the most exciting job roles based on your interest and study major.</p>
            <div className="tags">
                {course.tags}
            </div>
            <div className="buttons-card">
                <button>Ver más</button>
                <button>Comprar</button>
                <p>{course.price}/kwl</p>
                </div>
            </div>
          </div>
        ))}
        </div>

    )}
  </section>
    )
}

export default CardHome