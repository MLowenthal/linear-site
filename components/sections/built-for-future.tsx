"use client";
import { Hero, HeroTitle } from "../hero";
import { Button, Highlight } from "../button";
import { ChevronIcon } from "../icons/chevron";
import { Container } from "../container";

export const ContactFuture = () => (
    <Hero>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
      Helping Linear's future. <br/>
      Available today.
      <br className="hidden md:block" /> 
    </HeroTitle>
    <Button
          className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms] mb-12" // Added mb-8 for bottom margin
          href="mailto:lowenthal.maxwell@gmail.com"
    variant="primary"
    size="large"
  >
    <span>Contact Me</span>
    <Highlight>
      <ChevronIcon />
    </Highlight>
  </Button>
  </Hero>

);