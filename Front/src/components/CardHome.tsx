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
            console.log(response.data);
            setCourses(response.data)
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
            <div className="card-home w-4/5 flex-col m-auto">
        <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-36 bg-cover bg-center rounded-t-xl relative">
            
            <TagDifficulty 
                color="Advanced"
                children="Advanced" 
             />
            <div>4.3 stars</div>
            {/* componente valoracion */}
        </div>
        <div className="contain-section">
            <h3>Curso Nest.js</h3>
            <p>Explore all the most exciting job roles based on your interest and study major.</p>
            <div className="tags">
                componente tags
            </div>
            <div className="buttons-card">
                <button>Ver más</button>
                <button>Comprar</button>
                <p>50/kwl</p>
            </div>
        </div>

    </div>

        )
    }
    
    </section>
    )
}

export default CardHome