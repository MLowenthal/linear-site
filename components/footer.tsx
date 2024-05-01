import Link from "next/link";
import { Container } from "./container";
import { LinkedInIcon } from "./icons/li";

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex flex-wrap md:flex-nowrap items-center justify-between">
      <div className="text-grey mb-4 md:mb-0 pr-4">
        This site was built with <Link className= "underline" href="https://react.dev/">React</Link>, <Link href="https://tailwindcss.com/" className="underline">Tailwind</Link> and&nbsp;
        <Link className="underline" href="https://github.com/frontendfyi/rebuilding-linear.app">open-source</Link> code
      </div>
      <div>
        <LinkedInIcon url="https://www.linkedin.com/in/maxlowenthal/" />
      </div>
    </Container>
  </footer>
);
