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
    <div className="flex flex-wrap justify-around gap-x-6 gap-y-8 [&_svg]:max-w-[16rem] [&_svg]:basis-[calc(50%-12px)] md:[&_svg]:basis-[calc(16.66%-20px)]">
      <LinkedInLogo url="https://linkedin.com" />
      <FNDLogo url="https://foundation.app" />
      <GDLogo url="https://www.glassdoor.com/index.htm" />
      <CSLogo url="https://www.youtube.com/@ColinandSamir" />
    </div>


  </>
);

