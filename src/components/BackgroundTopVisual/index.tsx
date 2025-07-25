import Image from "next/image";

export default function BackgroundTopVisual() {
  return (
    <div id="background-top-visual" className="background-top-visual">
      <Image className="md:w-[45rem] mx-auto" src="/images/img_bg_topvisual.webp" width={1920} height={1080} alt="白い花" priority />
    </div>
  );
};
