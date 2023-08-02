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

type ModalProps = Partial<Course> & { textButton: string };


function Modal({ textButton, name, content, difficulty, average, price }: ModalProps): JSX.Element {
  // Obtener las 15 primeras palabras de la descripción
  const truncateDescription = (str: string, numWords: number) => {
    const words: string[] = str.split(" ");
    const truncated: string = words.slice(0, numWords).join(" ");

    if (words.length > numWords) {
      return `${truncated}...`;
    }

    return truncated;
  };

  const courseContent = content !== undefined ? content : "Descripción del curso";



  return (
    <Dialog>
      <DialogTrigger>
        <Button color="bg-btnClaro" text="text-text" children={textButton} />
      </DialogTrigger>
      <DialogContent>
        <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-36 bg-cover bg-center  rounded-t-xl relative">
        <TagDifficulty
                  color={
                    difficulty as "Beginner" | "Medium" | "Advanced"
                  }
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
          <p className=" text-slate-400">
                    <strong className="text-black text-lg">
                      {price}
                    </strong>
                    /kwl
                  </p>
          
          <Button color="bg-btnOscuro" text="text-white" children="Comprar" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
