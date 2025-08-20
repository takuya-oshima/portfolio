type Props = {
  pageTitleHead: string;
};

export default function PageTitleHead({ pageTitleHead } : Props) {
  return(
    <h1 className="mb-8 md:mb-16 text-[10vw] md:text-6xl lg:text-[6.25rem] leading-normal tracking-wide">{pageTitleHead}</h1>
  );
}
