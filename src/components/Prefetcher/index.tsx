import NextLink from "next/link";

type PrefetcherProps = {
  href: string;
};

export default function Prefetcher({ href }: PrefetcherProps) {
  return (
    <NextLink
      href={href}
      prefetch
      aria-hidden="true"
      tabIndex={-1} style={{
        position: "absolute",
        width: 0,
        height: 0,
        overflow: "hidden",
        opacity: 0,
        pointerEvents: "none"
      }}
    />
  );
}
