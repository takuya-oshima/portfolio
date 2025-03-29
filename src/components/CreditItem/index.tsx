type Props = {
  creditTitle: string;
  creditData: React.ReactNode;
}

export default function CreditItem({creditTitle, creditData} : Props) {
  return(
    <dl className="grid grid-cols-2 font-roboto text-base md:text-lg leading-relaxed">
      <dt className="pr-6 md:pr-10 text-[#999999] text-right">{creditTitle}</dt>
      <dd>{creditData}</dd>
    </dl>
  );
};
