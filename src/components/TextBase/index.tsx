type Props = {
  children: React.ReactNode;
};

export default function TextBase({ children }: Props){
  return (
    <p className="text-base leading-loose mb-8 md:mb-14">{children}</p>
  );
};
