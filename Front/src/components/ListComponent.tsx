import Button from "./ui/Button";

interface ListProps {
  title: string;
   type: "bought" | "created";


}

function ListComponent( {title, type }: ListProps) {
  return (
    <article className="container bg-white rounded-2xl p-6 flex flex-row justify-start gap-4 items-center ">
    
        <img
          className="rounded-full object-cover h-10 w-10"
          src="../../public/img-course.svg"
          alt="image course"
        />
        <div className="flex-1 cursor-default">
          <h2 className="text-title2 font-semibold text-lg">{title}</h2>
               </div>
        <div>

        {type === "bought" ? (
          <Button children="Ir al curso" text="text-dark" color="bg-purple" />
        ) : (
          <img className="cursor-pointer" src="../../public/icon-trash.svg" alt="icon trash" />
        )}

     
        </div>
     
    </article>
  );
}

export default ListComponent;
