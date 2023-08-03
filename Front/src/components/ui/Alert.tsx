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
import useAuth from "@/hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import React from "react";

type AlertProps = Partial<Course> & { textButton: string}

function Alert( { textButton,  _id, name, price }: AlertProps): JSX.Element {
   const [open, setOpen] = React.useState(false);
    const {auth} = useAuth()
  const [buyCourseObject, setBuyCourseOject] = useState<BuyCourse>({
    userId: "",
    courseId: "",
  });

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/home";

  const handleBuyCourse = async () => {
    try {
      const buyCourseObject: BuyCourse = {
        userId: auth?.user?.data._id || "",
        courseId: _id || "" ,
      };
console.log(buyCourseObject.courseId);

      const response: AxiosResponse = await buyCourse(buyCourseObject);
      console.log(response);
      setBuyCourseOject(buyCourseObject); // Mover esta línea aquí
      if(response.data.status=== 200){
        alert(response.data.message)    
        setOpen(false);    
        navigate(from, { replace: true });
      }
    } catch (error) {
      console.error("Error al comprar el curso:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button color="bg-btnOscuro" text="text-white" children={textButton} />
      </DialogTrigger>
      <DialogContent>
        <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-36 bg-cover bg-center  rounded-t-xl relative"></div>
        <DialogHeader>
          <DialogTitle>Confirma su compra</DialogTitle>
          <DialogDescription>
            <h2>Esta seguro de que quiere comprar el curso de <strong>{name}</strong>?</h2>
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

export default Alert;


