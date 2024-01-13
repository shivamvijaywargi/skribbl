import HamburgerMenu from "@/components/hamburger-menu";
import Menu from "@/components/menu";

export default function Home() {
  return (
    <main className="pt-4 flex justify-between items-center w-full">
      <HamburgerMenu />
      <div className="grid place-items-center w-full">
        <Menu />
      </div>
    </main>
  );
}
