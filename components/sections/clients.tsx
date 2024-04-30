import { LinkedInLogo } from "../logos/linkedin";
import { FNDLogo } from "../logos/foundation";
import { GDLogo } from "../logos/glassdoor";
import { CSLogo } from "../logos/cs";
import { NaavikLogo } from "../logos/naavik";
import Link from "next/link";

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-primary-text">
        I've worked with some of the world's best revenue teams.
      </span>
      <br className="hidden md:block" /> From startups to established enterprises.
      <br className="hidden md:block" /> Across gaming, SaaS, and media. 
    </p>

    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(25%-12px)]">
      <LinkedInLogo url="https://linkedin.com" className="basis-1/2 md:basis-auto" />
      <FNDLogo url="https://foundation.app" className="basis-1/2 md:basis-auto" />
      <GDLogo url="https://www.glassdoor.com/index.htm" className="basis-1/2 md:basis-auto" />
      <CSLogo url="https://www.youtube.com/@ColinandSamir" className="basis-1/2 md:basis-auto" />
    </div>
  </>
);
