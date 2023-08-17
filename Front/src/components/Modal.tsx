import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "./ui/Button";
import { Course } from "@/types/course.type";
import { ScrollArea } from "@/components/ui/scroll-area";
import TagDifficulty from "@/components/ui/TagDifficulty";
import Average from "@/components/ui/Average";
import { BuyCourse } from "@/types/buyCourse.types";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { AxiosResponse } from "axios";
import { buyCourse } from "@/services/lib/course";
import React from "react";

type ModalProps = Partial<Course> & { textButton: string };

function Modal({
  textButton,
  name,
  content,
  difficulty,
  average,
  price,
  _id,
}: ModalProps): JSX.Element {
  const [open, setOpen] = React.useState(false);
  const { auth } = useAuth();
  const [buyCourseObject, setBuyCourseOject] = useState<BuyCourse>({
    userId: "",
    courseId: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";
  const from2 = location.state?.form?.pathname || "/login";
  // Obtener las 15 primeras palabras de la descripción
  const truncateDescription = (str: string, numWords: number) => {
    const words: string[] = str.split(" ");
    const truncated: string = words.slice(0, numWords).join(" ");

    if (words.length > numWords) {
      return `${truncated}...`;
    }

    return truncated;
  };

  const courseContent =
    content !== undefined ? content : "Descripción del curso";

  const handleBuyCourse = async () => {
    try {
      const buyCourseObject: BuyCourse = {
        userId: auth?.user?.data._id || "",
        courseId: _id || "",
      };
      console.log(buyCourseObject.courseId);

      const response: AxiosResponse = await buyCourse(buyCourseObject);
      console.log(response);
      setBuyCourseOject(buyCourseObject); // Mover esta línea aquí
      if (response.data.status === 200) {
        alert(response.data.message);
        setOpen(false);
        navigate(from, { replace: true });
      }
      if (response.data.status === 400) {
        alert("Debe loguearse para comprar el curso");
        setOpen(false);
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Error al comprar el curso:", error);
      alert("Debe loguearse para comprar el curso")
      setOpen(false);
        navigate(from2, { replace: true });
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button color="bg-btnClaro" text="text-text" children={textButton} />
      </DialogTrigger>
      <DialogContent>
        <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-36 bg-cover bg-center  rounded-t-xl relative">
          <TagDifficulty
            color={difficulty as "Beginner" | "Medium" | "Advanced"}
            children={difficulty}
          />
          <Average avg={average} />
        </div>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            <ScrollArea className="h-[200px] w-[auto] rounded-md border p-4">
              {truncateDescription(courseContent, 15)}
            </ScrollArea>
          </DialogDescription>
          <h5 className=" text-slate-400">
            <strong className="text-black text-lg">{price}</strong>
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

export default Modal;
