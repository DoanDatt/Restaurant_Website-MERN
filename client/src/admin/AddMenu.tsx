import { Button } from "@/components/ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
// import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import { useState } from "react";

const AddMenu = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex justify-between">
        <h1 className="font-bold md:font-extrabold text-lg md:text-2xl">
          Available Menus
        </h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="bg-[--orange] hover:bg-[--hoverOrange]">
              <Plus className="mr-2 h-4 w-4" />
              Add Menus
            </Button>
          </DialogTrigger>
        </Dialog>
      </div>
    </div>
  );
};

export default AddMenu;
