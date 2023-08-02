import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "./Button";
import { buyCourse } from "@/services/lib/course";
import { AxiosResponse } from "axios";
import { useState } from "react";
import { BuyCourse } from "@/types/buyCourse.types";
import { Course } from "@/types/course.type";

type AlertProps = Partial<Course> & { textButton: string}

function Alert( { textButton,  _id }: AlertProps): JSX.Element {
  const [buyCourseObject, setBuyCourseOject] = useState<BuyCourse>({
    userId: "",
    courseId: "",
  });

  const handleBuyCourse = async () => {
    try {
      const buyCourseObject: BuyCourse = {
        userId: localStorage.getItem("userId") || "",
        courseId: _id || "" ,
      };
console.log(buyCourseObject.courseId);

      const response: AxiosResponse = await buyCourse(buyCourseObject);
      console.log(response.data.data);
      setBuyCourseOject(buyCourseObject); // Mover esta línea aquí
    } catch (error) {
      console.error("Error al comprar el curso:", error);
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button color="bg-btnOscuro" text="text-white" children={textButton} />
      </DialogTrigger>
      <DialogContent>
        <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-36 bg-cover bg-center  rounded-t-xl relative"></div>
        <DialogHeader>
          <DialogTitle>Nombre de curso</DialogTitle>
          <DialogDescription>
            <p>Esta seguro de que quiere comprar el curso?</p>
          </DialogDescription>
          <h5 className=" text-slate-400">
            <strong className="text-black text-lg">50</strong>
            /kwl
          </h5>

          <Button
            action={handleBuyCourse}
            color="bg-btnOscuro"
            text="text-white"
            children="Comprar"
          />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Alert;

// function setIsLoading(arg0: boolean) {
//     throw new Error("Function not implemented.");
// }
