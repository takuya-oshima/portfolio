type Props = {
  href: string;
  children: React.ReactNode;
};

export default function LinkButton({href, children} : Props) {
  return  (
    <div className="text-xl"><a href={href} className="flex justify-start items-center" target="_blank" rel="noopener">{children}<svg className="ml-4 fill-black dark:fill-white" width="37" height="24" viewBox="0 0 37 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23ZM12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"/><path fillRule="evenodd" clipRule="evenodd" d="M33.1716 8.46447L36.3536 11.6465C36.5488 11.8417 36.5488 12.1583 36.3536 12.3536L33.1716 15.5355C32.9763 15.7308 32.6597 15.7308 32.4645 15.5355C32.2692 15.3403 32.2692 15.0237 32.4645 14.8284L34.7929 12.5H12V11.5L34.7929 11.5L32.4645 9.17158C32.2692 8.97631 32.2692 8.65973 32.4645 8.46447C32.6597 8.26921 32.9763 8.26921 33.1716 8.46447Z"/></svg></a></div>
  );
};
