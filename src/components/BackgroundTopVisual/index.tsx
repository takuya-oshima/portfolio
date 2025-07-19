import Image from "next/image";

export default function BackgroundTopVisual() {
  return (
    <div id="background-top-visual" className="background-top-visual">
      <Image className="md:w-[45rem] mx-auto" src="/images/img_bg_topvisual.webp" alt="白い花" fill ssizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1980px" priority />
    </div>
  );
};
