import { LinkedInLogo } from "../logos/linkedin";
import { FNDLogo } from "../logos/foundation";
import { GDLogo } from "../logos/glassdoor";
import { CSLogo } from "../logos/cs";

export const Clients = () => (
  <>
    <p className="mb-12 text-center text-lg text-white md:text-xl">
      <span className="text-primary-text">
        I've worked with some of the world's best revenue teams.
      </span>
      <br className="hidden md:block" /> From startups to established enterprises.
      <br className="hidden md:block" /> Across gaming, SaaS, and media.
    </p>

    {/* Desktop version: Unchanged, logos in a row */}
    <div className="hidden md:flex md:flex-wrap md:justify-around md:gap-x-6 md:gap-y-8 [&_svg]:md:max-w-[16rem] [&_svg]:md:basis-[calc(25%-12px)]">
      <LinkedInLogo url="https://linkedin.com" />
      <FNDLogo url="https://foundation.app" />
      <GDLogo url="https://www.glassdoor.com/index.htm" />
      <CSLogo url="https://www.youtube.com/@ColinandSamir" />
    </div>

    {/* Mobile version: Adjusted to make logos in a 2x2 grid and take up full space available */}
    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 md:hidden [&_svg]:w-1/2 [&_svg]:flex [&_svg]:items-center [&_svg]:justify-center">
      <LinkedInLogo url="https://linkedin.com" />
      <FNDLogo url="https://foundation.app" />
      <GDLogo url="https://www.glassdoor.com/index.htm" />
      <CSLogo url="https://www.youtube.com/@ColinandSamir" />
    </div>
  </>
);
