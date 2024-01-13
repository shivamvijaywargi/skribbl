import { Download, Eraser, PencilLine, RedoDot, UndoDot } from "lucide-react";
import IconButton from "./icon-button";

const Menu = () => {
  return (
    <div className="flex justify-center align-center gap-1 shadow-md border dark:bg-secondary px-1.5 py-1 rounded-xl">
      <IconButton>
        <span title="Draw">
          <PencilLine size={20} />
        </span>
      </IconButton>
      <IconButton>
        <span title="Eraser">
          <Eraser size={20} />
        </span>
      </IconButton>
      <IconButton>
        <span title="Undo">
          <UndoDot size={20} />
        </span>
      </IconButton>
      <IconButton>
        <span title="Redo">
          <RedoDot size={20} />
        </span>
      </IconButton>
      <IconButton>
        <span title="Download">
          <Download size={20} />
        </span>
      </IconButton>
    </div>
  );
};

export default Menu;
