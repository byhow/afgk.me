import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Photography",
  description: "Here's some of my photography works.",
};

export default function UsesPage() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        photography
      </h1>
    </section>
  );
}
