import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Button from "./ui/Button";

interface ModalProps {
  textButton: string;
}

function Modal({ textButton }: ModalProps): JSX.Element {
  return (
    <Dialog>
      <DialogTrigger>
        <Button color="bg-btnClaro" text="text-text" children={textButton} />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
