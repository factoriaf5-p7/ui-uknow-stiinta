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

type ModalProps = Partial<Course> & { textButton: string };

function Modal({ textButton, name, content }: ModalProps): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger>
        <Button color="bg-btnClaro" text="text-text" children={textButton} />
      </DialogTrigger>
      <DialogContent>
        <div className="image-section bg-[url('/public/img-course.svg')] bg-no-repeat h-36 bg-cover bg-center  rounded-t-xl relative">

        </div>
        <DialogHeader>
          <DialogTitle>{name}</DialogTitle>
          <DialogDescription>
            <ScrollArea className="h-[200px] w-[auto] rounded-md border p-4">
              {content}
            </ScrollArea>
          </DialogDescription>
          <Button color="bg-btnOscuro" text="text-white" children="Comprar" />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
