"use client";

const row1 = ["Python", "C++", "Java", "TypeScript", "SQL"];
const row2 = ["TensorFlow", "PyTorch", "Next.js", "Docker", "AWS", "LangChain"];

function MarqueeRow({ items, direction }: { items: string[]; direction: "left" | "right" }) {
  const duplicated = [...items, ...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap py-8">
      <div
        className="flex gap-12 animate-marquee"
        style={{
          animationDirection: direction === "right" ? "reverse" : "normal",
        }}
      >
        {duplicated.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="text-4xl font-bold opacity-20 hover:opacity-100 hover:text-accent-primary transition-all duration-300 cursor-default mx-6"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsMarquee() {
  return (
    <section className="py-16 relative z-10">
      <MarqueeRow items={row1} direction="left" />
      <MarqueeRow items={row2} direction="right" />
    </section>
  );
}

