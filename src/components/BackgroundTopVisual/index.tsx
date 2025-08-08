import Image from "next/image";
import styles from "./index.module.css";

export default function BackgroundTopVisual() {
  return (
    <div id="background-top-visual" className={styles.backgroundTopVisual}>
      <Image src="/images/img_bg_topvisual.webp" width={1920} height={1080} alt="白い花" priority />
    </div>
  );
};
