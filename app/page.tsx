import { DotField } from "./components/DotField";
import { Magnetic } from "./components/Magnetic";
import TextReveal from "./components/Text-Reveal";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 items-center justify-center font-inter tracking-tighter relative">
      <DotField />

      <TextReveal>
        <h1 className="text-[clamp(2.5rem,5vw,4rem)] font-bold leading-tight lg:leading-none">
          Magpie Services
        </h1>
      </TextReveal>

      <h3 className="text-[clamp(1.5rem,3vw,4rem)] italic font-medium text-transparent bg-linear-to-br from-neutral-100 to-neutral-500 bg-clip-text">
        Coming Soon
      </h3>

      <div className="mt-10">
        <ul className="flex items-center justify-center gap-2 flex-wrap text-sm font-medium tracking-tight text-neutral-400">
          <li className="*:border *:border-neutral-600 *:px-2 *:py-1 *:rounded-lg">
            <Magnetic className="">Creative Ads</Magnetic>
          </li>
          <li className="*:border *:border-neutral-600 *:px-2 *:py-1 *:rounded-lg">
            <Magnetic>Brand Shoots</Magnetic>
          </li>
          <li className="*:border *:border-neutral-600 *:px-2 *:py-1 *:rounded-lg">
            <Magnetic>Photoshoots</Magnetic>
          </li>
          <li className="*:border *:border-neutral-600 *:px-2 *:py-1 *:rounded-lg">
            <Magnetic>Graphic Designing</Magnetic>
          </li>
        </ul>
      </div>
    </main>
  );
}
