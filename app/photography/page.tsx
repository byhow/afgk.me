// import VideoPlayer from "app/components/video";
import type { Metadata } from "next";
import Image from "next/image";
import sunset from "public/images/photos/sunset.webp";
import la from "public/images/photos/la.webp";
import vintage from "public/images/photos/vintage-shop.webp";
import wind from "public/images/photos/wind.webp";
import nest from "public/images/photos/nest.webp";

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
      <p className="prose prose-neutral dark:prose-invert">
        Creating my digital footprints to save the planet.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-80 mb-4">
          <Image
            alt="LA sunset in Wilshire Boulevard"
            src={la}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Sunset in Southern California"
            src={sunset}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Vintage shop in Art District in LA"
            src={vintage}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Wind will blow"
            src={wind}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Very cool art work at the Hammer Museum in LA"
            src={nest}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        {/* TODO: something wrong with Vercel Blob and CSP */}
        {/* <div className="relative h-80 mb-4">
          <VideoPlayer />
        </div> */}
      </div>
    </section>
  );
}
