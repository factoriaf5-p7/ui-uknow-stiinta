import Average from "./ui/Average";
import TagDifficulty from "../components/ui/TagDifficulty";
import { Course } from "@/types/course.type";
import Modal from "./Modal";
import { Badge } from "@/components/ui/badge"
import Alert from "./ui/Alert";

function CardHome(course: Course) {
  return (
    <>
      <div key={'ss'} className="rounded-2xl w-full sm:w-min-[80vw] md:w-1/3 lg:w-1/5 flex flex-col card-content-container transition-shadow transform hover:shadow-md hover:scale-105 hover:transition-all duration-300 ease-in-out mx-5">
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
              <Badge className="text-sm " key={index} variant="outline">{tag}</Badge>
            ))}
          </div>
          <div className="buttons-card mt-auto flex gap-3 justify-between">
            <div className="flex gap-3">

              <Modal textButton="Ver mas" {...course} />

              <Alert textButton="Comprar" {...course} />
            </div>

            <h5 className=" text-slate-400">
              <strong className="text-black text-lg">
                {course.price}
              </strong>
              /kwl
            </h5>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardHome;
