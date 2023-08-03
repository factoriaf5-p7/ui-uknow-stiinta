import Button from "./ui/Button";

function ListComponent() {
  return (
    <article className="container bg-white rounded-2xl p-6 flex flex-row justify-start gap-4 items-center ">
    
        <img
          className="rounded-full object-cover h-10 w-10"
          src="../../public/img-course.svg"
          alt="image course"
        />
        <div className="flex-1">
          <h2 className="text-title2 font-semibold text-lg">Titulo curso</h2>
          <small>Frontend</small>
        </div>
        <div>

        <Button children="Ir al curso" text="text-dark" color="bg-purple" />
        </div>
     
    </article>
  );
}

export default ListComponent;
