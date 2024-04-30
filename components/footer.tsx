import Link from "next/link";
import { Container } from "./container";
import { LinkedInIcon } from "./icons/li";

export const Footer = () => (
  <footer className="mt-12 border-t border-transparent-white py-[5.6rem] text-sm">
    <Container className="flex items-center justify-between">
      <div className="text-grey">
        This site was built with React, Tailwind and&nbsp;
        <Link className="underline" href="https://github.com/frontendfyi/rebuilding-linear.app">code from Github</Link>
      </div>
      <div>
        <LinkedInIcon url="https://www.linkedin.com/in/maxlowenthal/" />
      </div>
    </Container>
  </footer>
);
