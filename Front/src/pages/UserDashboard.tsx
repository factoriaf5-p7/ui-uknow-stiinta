import Button from "@/components/ui/Button";
import useAuth from "@/hooks/useAuth";

function UserDashboard() {
  const { auth } = useAuth();

  return ( 

    <section className="container md:mt-28 ">
      <div className=" max-w-lg mx-auto ">
        <h1 className="text-dark text-xl font-semibold w-2/3 my-4 ">
          Hello<br></br> {auth?.user?.data.name}
        </h1>

        <article className=" relative">
          <div className="bg-btnOscuro p-5 rounded-sm h-[150px]">
            <h3 className="text-white font-normal w-2/3 my-4">
              50% off take any courses
            </h3>
            <Button children="Buy Now" color="bg-orange" text="text-white" />
            <img
              className="absolute bg-transparent top-[-31px] right-0 "
              src="girl-image.svg"
              alt="girl image"
            />
          </div>
        </article>

        <h2 className="my-4 font-semibold">Cursos</h2>

        <article className="flex gap-3 ">
          <div className="flex-1 rounded-sm bg-blueLight p-6 grid place-content-center cursor-pointer  transition-transform transform hover:scale-105">
            <img
              className="m-auto"
              src="../../public/icon-search.svg"
              alt="icon search"
            />
            <h5 className="font-semibold text-center">
              {auth?.user?.data.created_courses.length}
            </h5>
            <p className="text-center  text-xs">My content</p>
          </div>
          <div className="flex-1">
            <div className="rounded-sm bg-purple p-6 mb-3 text-center cursor-pointer   transition-transform transform hover:scale-105">
              <h5 className="font-semibold text-center cursor-pointer">
                {auth?.user?.data.bought_courses.length}
              </h5>
              cursos comprados
            </div>
            <div className="rounded-sm bg-orangeLight p-6 text-center cursor-pointer   transition-transform transform hover:scale-105">
              <h3 className="font-bold text-2xl ">+</h3>
              <p>Crear Curso</p>
            </div>
          </div>
        </article>
      </div>
      <div className="max-w-lg mx-auto ">
        <h2 className="my-4 font-semibold">Cursos recientes</h2>
        <article>listado de cursos recientes</article>
      </div>
    </section>
  );
}

export default UserDashboard;
