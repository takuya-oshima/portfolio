type Props = {
  className?: string;
}

export default function IconFacebook({className}: Props) {
  return (
    <a href="https://www.facebook.com/takuya.oshima.52/" aria-label="Facebook" target="_blank" rel="noopener"><svg className={`fill-primary-light dark:fill-primary-dark ico-link ${className}`} width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd"><path d="M20 10C20 4.4772 15.5228 0 10 0C4.4772 0 0 4.4772 0 10C0 14.6896 3.2288 18.6248 7.5844 19.7056V13.056H5.5224V10H7.5844V8.6832C7.5844 5.2796 9.1248 3.702 12.4664 3.702C13.1 3.702 14.1932 3.8264 14.6404 3.9504V6.7204C14.4044 6.6956 13.9944 6.6832 13.4852 6.6832C11.8456 6.6832 11.212 7.3044 11.212 8.9192V10H14.4784L13.9172 13.056H11.212V19.9268C16.1636 19.3288 20.0004 15.1128 20.0004 10H20Z"/></svg></a>
  );
};
