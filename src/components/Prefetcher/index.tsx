"use client";
import NextLink from "next/link";

type PrefetcherProps = {
  href: string;
};

export default function Prefetcher({ href }: PrefetcherProps) {
  return (
    <NextLink href={href} prefetch={true} style={{ display: "none" }} />
  );
}
