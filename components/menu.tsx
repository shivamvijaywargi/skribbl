import { Download, Eraser, PencilLine, RedoDot, UndoDot } from "lucide-react";

const Menu = () => {
  return (
    <div className="flex justify-center align-center gap-1 shadow-md dark:bg-gray-800 p-1.5 rounded-xl">
      <div className="hover:bg-gray-100 hover:dark:bg-gray-700 p-2 rounded transition cursor-pointer">
        <PencilLine />
      </div>
      <div className="hover:bg-gray-100 hover:dark:bg-gray-700 p-2 rounded transition cursor-pointer">
        <Eraser />
      </div>
      <div className="hover:bg-gray-100 hover:dark:bg-gray-700 p-2 rounded transition cursor-pointer">
        <UndoDot />
      </div>
      <div className="hover:bg-gray-100 hover:dark:bg-gray-700 p-2 rounded transition cursor-pointer">
        <RedoDot />
      </div>
      <div className="hover:bg-gray-100 hover:dark:bg-gray-700 p-2 rounded transition cursor-pointer">
        <Download />
      </div>
    </div>
  );
};

export default Menu;
