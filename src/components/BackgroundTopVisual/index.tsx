import Image from "next/image";

export default function BackgroundTopVisual() {
  return (
    <div id="background-top-visual" className="background-top-visual">
      <Image src="/images/img_bg_topvisual.webp" width={1920} height={1080} alt="白い花" priority />
    </div>
  );
};
