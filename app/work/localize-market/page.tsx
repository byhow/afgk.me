"use client";
import Link from "next/link";
import dynamic from "next/dynamic";

const WorkSampleComponent = dynamic(
  () => import("../../components/work-sample"),
  { ssr: false }
);

export default function Page() {
  return (
    <section>
      <Link href={"/work"}>{"< Back"}</Link>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        <br />
        LOCALIZING MARKET
      </h1>
      <WorkSampleComponent path="/pdf/localize-market.pdf" />
    </section>
  );
}
