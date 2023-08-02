import CardHome from '@/components/CardHome';
import { useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { getCourses } from "@/services/lib/course";
import { Input } from "@/components/ui/input";

function Home() {
   // estados
   const [courses, setCourses] = useState<Course[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
 
   const [search, setSearch] = useState({
     query: '',
     list: []
   })

   const handleSearch = (e) => {
    const results = courses.filter(course => {
      if (e.target.value === '') return courses
      return course.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    setSearch({
      query: e.target.value,
      list: results
    })
  }
   
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
   
    fetchCourses()
    console.log(courses)
  }, []);

  return (
    <div className='md:mt-32'>
      <section className=" bg-background">
        <div className="bg-[url('/header-bg.svg')] bg-no-repeat bg-cover md:bg-none px-4 py-6 rounded-bl-3xl rounded-br-3xl mb-9 ">
          <Input placeholder="Buscar curso" className="max-w-3xl mx-auto my-8" onChange={handleSearch} />
        </div>
        <div className="card-home flex gap-y-7 flex-wrap justify-center max-w-screen-2xl mx-auto  ">
        {courses.map(course => (
          <>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <CardHome {...course} />
            )}
          </>
        ))}
        </div>

      </section>
    </div>
  );
}

export default Home