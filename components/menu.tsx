import { Download, Eraser, PencilLine, RedoDot, UndoDot } from "lucide-react";
import IconButton from "./icon-button";
import { Separator } from "./ui/separator";

const Menu = () => {
  return (
    <div className="h-full flex justify-center align-center gap-1 shadow-md border dark:bg-secondary px-1.5 py-1 rounded-xl">
      <IconButton title="Draw">
        <PencilLine size={20} />
      </IconButton>
      <IconButton title="Eraser">
        <Eraser size={20} />
      </IconButton>
      <IconButton title="Undo">
        <UndoDot size={20} />
      </IconButton>
      <IconButton title="Redo">
        <RedoDot size={20} />
      </IconButton>
      <Separator orientation="vertical" className="bg-muted" />
      <IconButton title="Download">
        <Download size={20} />
      </IconButton>
    </div>
  );
};

export default Menu;
