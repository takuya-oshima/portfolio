"use client";

type Props = {
  text: string;
  className?: string;
  direction?: "left" | "right";
  fontClassName?: string;
  repeat?: number;
};

export default function MarqueeText({
  text,
  className = "",
  direction = "left",
  fontClassName = "",
  repeat = 6,
}: Props) {

  const items = Array(repeat).fill(text);

  return (
    <div className={`full-width my-4 whitespace-nowrap overflow-hidden flex justify-start tracking-wide opacity-50 ${className}`}>
      {[0, 1].map((_, i) => (
        <ul key={i} className={direction === "right" ? "animation-marquee-right" : "animation-marquee-left"}>
          {items.map((item, index) => (
            <li key={index} className={`inline-block mx-10 md:mx-24 ${fontClassName}`}>{item}</li>
          ))}
        </ul>
      ))}
    </div>
  );
}
