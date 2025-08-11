import styles from "./index.module.css";

type Props = {
  pageTitleSide: string;
};

export default function PageTitleSide({ pageTitleSide } : Props) {
  return(
    <h1 className={`${styles.animationInitialHidden} fixed z-10 top-0 bottom-0 -left-2.5 md:-left-5 writing-mode-vertical-rl text-6xl md:text-title text-center tracking-wide mix-blend-difference invert dark:invert-0`}>{pageTitleSide}</h1>
  );
}
