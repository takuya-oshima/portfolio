type Props = {
  children: React.ReactNode;
};

export default function PageLead({children}: Props) {
  return (
    <p className="[&:not(:last-child)]:mb-2 text-base md:text-xl leading-relaxed">{children}</p>
  );
}
