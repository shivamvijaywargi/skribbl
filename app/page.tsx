import CanvasBoard from "@/components/canvas-board";
import HamburgerMenu from "@/components/hamburger-menu";
import Menu from "@/components/menu";
import Toolbar from "@/components/toolbar";

export default function Home() {
  return (
    <main>
      <nav className="flex justify-between items-center w-full">
        <HamburgerMenu />
        <div className="grid place-items-center w-full">
          <Menu />
        </div>
      </nav>
      <div>
        <Toolbar />
      </div>
      <CanvasBoard />
    </main>
  );
}
