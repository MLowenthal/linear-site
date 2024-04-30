import { LinkedInLogo } from "../logos/linkedin";
import { FNDLogo } from "../logos/foundation";
import { GDLogo } from "../logos/glassdoor";
import { CSLogo } from "../logos/cs";
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

    {/* Main div for logos, maintaining desktop styles */}
    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(25%-12px)]">
      {/* Mobile styling: each logo takes half width of the viewport to form two columns */}
      <div className="w-1/2 md:w-auto">
        <LinkedInLogo url="https://linkedin.com" />
      </div>
      <div className="w-1/2 md:w-auto">
        <FNDLogo url="https://foundation.app" />
      </div>
      <div className="w-1/2 md:w-auto">
        <GDLogo url="https://www.glassdoor.com/index.htm" />
      </div>
      <div className="w-1/2 md:w-auto">
        <CSLogo url="https://www.youtube.com/@ColinandSamir" />
      </div>
    </div>
  </>
);
