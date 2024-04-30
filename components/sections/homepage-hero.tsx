import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Hi. I'm Max.
      <br className="hidden md:block" /> 
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      I'm the best candidate to help launch your Revenue Operations teams. 
      <br className="hidden md:block" /> I have managed vendors, forecasted revenue, and grown companies. 
    </HeroSubtitle>
    <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="/"
      variant="primary"
      size="large"
    >
      <span>Learn More About Me </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button>
    <HeroImage />
  </Hero>
);
