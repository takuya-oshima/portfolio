type Props = {
  blockTitle: string;
};

export default function BlockTitle({blockTitle} : Props) {
  return (
    <h2 className="mb-8 md:mb-14 text-[2.5rem] md:text-5xl 2xl:text-7xl leading-relaxed tracking-wide">{blockTitle}</h2>
  );
}
