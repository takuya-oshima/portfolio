import Menu from "../Menu";

export default function Header(){
  return (
    <header className="fixed z-50 w-full py-4 px-custom md:px-4 lg:px-10 flex justify-end">
      <Menu />
    </header>
  )
};
