import { Container } from "../container";
import { BarChartIllustration } from "../illustrations/bar-chart";
import { HubSpotLogo } from "../illustrations/hubspot-logo";
import { KeyboardShortcuts } from "../client-scroll";
import { CardsChat } from "../chat-example";

export const UnlikeAnyTool = () => (
  <div className="text-white">
    <Container>
      <div className="text-center">
        <h2 className="mb-4 text-4xl md:mb-7 md:text-7xl">
          Unlike any BizOps
          <br className="hidden md:inline-block" /> employee you've met before.
        </h2>
        <p className="mx-auto mb-12 max-w-[68rem] text-lg text-primary-text md:mb-7 md:text-xl">
          I've engineered financial models with unforgiving precision,
          combining accuracy and speed with high-fidelity and performance. 
        </p>
      </div>
    </Container>
    <div className="h-[48rem] overflow-hidden md:h-auto md:overflow-visible">
      <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-8 pb-12 md:flex-wrap md:overflow-hidden">
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <KeyboardShortcuts />
          <p className="mb-4 text-3xl">Discover new clients</p>
          <p className="text-md text-primary-text">
            I've  <a className = "underline" href="https://docs.google.com/spreadsheets/d/1lAczUu_2sleG91ns2FNP9QeY7wOLLQRNrZUmOpa89r8/edit?usp=sharing" target="_blank" rel="noopener noreferrer">identiifed  &gt;100 ideal fit customers</a>
            &nbsp;for Linear's sales team using public data 
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className=" absolute top-[-9.2rem]">
          <BarChartIllustration/>
          </div>
          <p className="mb-4 text-3xl">Incredibly Precise</p>
          <p className="text-md text-primary-text">
            I've built <a className ="underline" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/1lmNvdc6ncLvChNYP_IXk11G6nXv96WDwMCT5EN2_X50/edit?usp=sharing">forecasts</a> and a <a className="underline" target="_blank" rel="noopener noreferrer" href="https://docs.google.com/spreadsheets/d/101g0H5ol6Q3K2Qfp0OfRNQnn1cMCkr35ipur6rUcHrQ/edit?usp=sharing">models</a> for every size business
          </p>
        </div>
        <div className="group relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-end overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:basis-[calc(33.33%-12px)] md:p-14">
          <div className="pointer-events-none absolute top-[-8rem] w-[130%]">
            <HubSpotLogo />
          </div>
          <p className="mb-4 text-3xl">Expertise in modern Revenue software</p>
          <p className="text-md text-primary-text">
            I've negoiated, launched, and managed tools like Hubspot and Pocus
          </p>
        </div>
        <div className="relative flex min-h-[48rem] w-full shrink-0 snap-center flex-col items-center justify-start overflow-hidden rounded-[4.8rem] border border-transparent-white bg-glass-gradient p-8 text-center md:max-w-[calc(66.66%-12px)] md:basis-[calc(66.66%-12px)] md:p-14">
          <div className="transition-opacity md:[.opened+&]:opacity-0">
            <p className="mb-4 text-3xl">Your Modern RevOps Expert</p>
            <p className="text-md text-primary-text">
              I can complete any request in record time using data + code
            </p>
          </div>
          <CardsChat/>
        </div>
      </div>
    </div>
  </div>
);
