import ListComponent from "@/components/ListComponent";
import { useState, useEffect } from "react";
import Search from "@/components/Search";
import useAuth from "@/hooks/useAuth";
import { getBought } from "@/services/lib/course";
import { Course } from "@/types/course.type";
import { AxiosResponse } from "axios";

function BoughtCourses() {
  const [courses, setCourses] = useState<Course[]>([]);

  const { auth } = useAuth();
  console.log(auth?.user?.data._id);

  useEffect(() => {
    // Definir una función asincrónica dentro del useEffect para poder usar 'await'
    const fetchCourses = async () => {
      try {
        const response: AxiosResponse = await getBought(auth?.user?.data._id);
        console.log(response);
        setCourses(response.data.data);
      } catch (error) {
        console.error("Error al obtener los cursos:", error);
      }
    };

    fetchCourses();
    console.log(courses, auth);
  }, [auth]);

  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="md:mt-28">
        <Search onChange={handleSearch} />
      </div>
      <section className="container max-w-lg mx-auto md:mt-28 flex flex-col gap-4">
        <h1 className="mb-4 font-semibold text-title">Cursos comprados</h1>
        {courses
          .filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
          .map((course) => (
            <ListComponent title={course.name} type="bought" />
          ))}
      </section>
    </>
  );
}

export default BoughtCourses;
