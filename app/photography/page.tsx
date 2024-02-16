// import VideoPlayer from "app/components/video";
import type { Metadata } from "next";
import Image from "next/image";
import sunset from "public/images/photos/sunset.webp";
import la from "public/images/photos/la.webp";
import vintage from "public/images/photos/vintage-shop.webp";
import wind from "public/images/photos/wind.webp";
import nest from "public/images/photos/nest.webp";
import beach from "public/images/photos/beach.webp";
import branches from "public/images/photos/branches.webp";
import couple from "public/images/photos/couple.webp";
import crescent from "public/images/photos/crescent.webp";
import evening from "public/images/photos/evening.webp";
import house from "public/images/photos/house.webp";
import people from "public/images/photos/people.webp";
import sea from "public/images/photos/sea.webp";
import volley from "public/images/photos/volley.webp";
import bizarre from "public/images/bizarre.webp";

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
        <div className="relative h-80 mb-4">
          <Image
            alt="Chill afternoon in Laguna Beach"
            src={beach}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Lonely branches by the beach"
            src={branches}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="sunset at Laguna"
            src={couple}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="The moon slowly fading away"
            src={crescent}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Evening sunset next to the highway"
            src={evening}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Sneak peek outside of a parking lot in Laguna Beach"
            src={house}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Crowds walking alongside the beach"
            src={people}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Crowds walking alongside the beach in the other direction"
            src={sea}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="Volleyball field by the sea"
            src={volley}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4">
          <Image
            alt="THE BIZARRE"
            src={bizarre}
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
