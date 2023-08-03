// import CardHome from '@/components/CardHome';
import React, { useEffect, useState, Suspense } from "react";
import { AxiosResponse } from "axios";
import { getCourses } from "@/services/lib/course";
import Search from '@/components/Search';
import useAuth from '@/hooks/useAuth';
import { Skeleton } from '@/components/ui/skeleton';


const CardHome = React.lazy(() => import('@/components/CardHome'))

function Home() {
   // estados
   const [courses, setCourses] = useState<Course[]>([]);
   const [isLoading, setIsLoading] = useState<boolean>(true);
  const { auth } = useAuth()
 
   const [search, setSearch] = useState('')

   const handleSearch = (e) => {
    setSearch(e.target.value)
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
    console.log(courses, auth)
  }, []);

  return (
    <div className='md:mt-32'>
      <section className=" bg-background">
       <Search onChange={handleSearch} />
      
        <div className="card-home flex gap-y-7 flex-wrap justify-center max-w-screen-2xl mx-auto  ">
        {courses
        .filter((el) => 
          el.name.toLowerCase().includes(search.toLowerCase()) || 
          el.content.toLowerCase().includes(search.toLowerCase())
        )
        .map(course => (
          <>
            {isLoading ? (
              <div>Loading...</div>
            ) : (
              <Suspense fallback={<div className="card-home flex gap-y-7 flex-wrap justify-center max-w-screen-2xl mx-auto  "><Skeleton className="h-52 w-48" /></div>}>
              <CardHome {...course} />
              </Suspense>
            )}
          </>
        ))}
        </div>

      </section>
    </div>
  );
}

export default Home