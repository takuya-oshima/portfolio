type Props = {
  children: React.ReactNode;
};

export default function textLarge({ children } : Props ) {
  return (
    <p className="mb-2 text-2xl leading-relaxed">{children}</p>
  );
};
