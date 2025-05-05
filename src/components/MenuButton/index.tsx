"use client";

//型の定義
type Props = {
  isOpen: boolean; //真偽値の型
  setIsOpen: (open: boolean) => void; //boolean型（true/false）の引数を1つ受け取って、何も返さない関数の型
}

export default function MenuButton({ isOpen, setIsOpen }: Props){
  //メニューの状態を関数で定義
  const menuButtonFunction = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-12 h-12 flex items-center">
      <button onClick={menuButtonFunction} className={`${ isOpen ? "oepn" : "close" } relative w-12 h-12 m-auto flex justify-center items-center gap-x-2 cursor-pointer border border-[#111] dark:border-white hover:border-[#999] dark:hover:border-[#999] rounded-full origin-center menubtn`}>
        <span className="inline-block shrink-0 w-1 h-1 rounded-full bg-black dark:bg-white"></span>
        <span className="inline-block w-1 h-1 rounded-full bg-black dark:bg-white"></span>
        <span className="inline-block shrink-0 w-1 h-1 rounded-full bg-black dark:bg-white"></span>
        </button>
    </div>
  )
};

