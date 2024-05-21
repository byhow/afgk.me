import Image from "next/image";
// individual image imports
import nyc from "public/images/nyc-night.webp";
import giphy from "public/images/giphy.gif";
import taiwan from "public/images/taiwan.webp";
import roadtrip from "public/images/road-trip.webp";
import nest from "public/images/photos/nest.webp";
import voice from "public/images/photos/voice.webp";
// back button icon
import ArrowIcon from "./components/arrow-icon";

export default function Page() {
  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        Hey, this is Jules 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        I'm a cross between a leaf, a cloud, and a heavy peace of machinery.
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Very cool art work at the Hammer Museum in LA"
            src={nest}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Vintage bookstore in Taipei, trip during December 2023"
            src={taiwan}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Skyline in New York city, a trip in May 2023"
            src={nyc}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Cute Giphy animal avatars that I like"
            src={giphy}
            // fill
            sizes="(max-width: 768px) 213px, 33vw"
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="Powerful writing on a bench in a New York City park"
            src={voice}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Me taking a picture at the sunset by a beach in LA"
            src={roadtrip}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>you can find me from these links.</p>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/shiqiliu67"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">Linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://theglobeisalwaysbizarreby67.montaigne.io"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">中文博客</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
