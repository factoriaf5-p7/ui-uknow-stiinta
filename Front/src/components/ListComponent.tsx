import Button from "./ui/Button";

function ListComponent() {
  return (
    <article className="container bg-white flex justify-around rounded-lg p-4">
    
        <img
          className="rounded-full object-cover h-10 w-10"
          src="../../public/img-course.svg"
          alt="image course"
        />
        <div>
          <h2>Titulo curso</h2>
          <p>difficulty</p>
        </div>
        <div>

        <Button children="Ir al curso" text="text-dark" color="bg-purple" />
        </div>
     
    </article>
  );
}

export default ListComponent;
