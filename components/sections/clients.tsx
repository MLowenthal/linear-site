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
      <br className="" /> From startups to established enterprises.
      <br className="" /> Across gaming, SaaS, and media.
    </p>

    {/* Desktop version: Unchanged, logos in a row */}
    <div className="hidden md:flex md:flex-wrap md:justify-around md:gap-x-6 md:gap-y-8 [&_svg]:md:max-w-[16rem] [&_svg]:md:basis-[calc(25%-12px)]">
      <LinkedInLogo url="https://linkedin.com" />
      <FNDLogo url="https://foundation.app" />
      <GDLogo url="https://www.glassdoor.com/index.htm" />
      <CSLogo url="https://www.youtube.com/@ColinandSamir" />
    </div>

    {/* Mobile version: Logos in a 2x2 grid */}
    <div className="grid grid-cols-2 gap-6 px-4 py-4 md:hidden [&_svg]:max-w-full [&_svg]:basis-1/2">
      <div>
        <LinkedInLogo url="https://linkedin.com" />
      </div>
      <div>
        <FNDLogo url="https://foundation.app" />
      </div>
      <div>
        <GDLogo url="https://www.glassdoor.com/index.htm" />
      </div>
      <div>
        <CSLogo url="https://www.youtube.com/@ColinandSamir" />
      </div>
    </div>
  </>
);

