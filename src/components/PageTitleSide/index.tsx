type Props = {
  pageTitleSide: string;
};

export default function PageTitleSide({ pageTitleSide } : Props) {
  return(
    <h1 className="animation-initial-hidden fixed z-10 inset-y-0 -left-2.5 md:-left-5 writing-mode-vertical-rl text-6xl md:text-title text-center tracking-wide mix-blend-difference invert dark:invert-0"
    >{pageTitleSide}</h1>
  );
}
