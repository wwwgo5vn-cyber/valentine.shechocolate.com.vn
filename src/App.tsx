import { useEffect } from "react";
import { Closing } from "./components/Closing";
import { Contents } from "./components/Contents";
import { Dock } from "./components/Dock";
import { Faq } from "./components/Faq";
import { Hero } from "./components/Hero";
import { OrderDesk } from "./components/OrderDesk";
import { Puzzle } from "./components/Puzzle";
import { SiteFooter } from "./components/SiteFooter";
import { SiteHeader } from "./components/SiteHeader";
import { Story } from "./components/Story";
import { Week } from "./components/Week";
import { labels } from "./constants/labels";

export default function App() {
  useEffect(() => {
    document.title = labels.meta.title;
  }, []);

  return (
    <div className="page">
      <a className="skip" href="#dat-hang">
        {labels.a11y.skip}
      </a>
      <a className="announce" href="#dat-hang">
        {labels.announce}
      </a>
      <SiteHeader />
      <main>
        <Hero />
        <Story />
        <Week />
        <Puzzle />
        <Contents />
        <OrderDesk />
        <Faq />
        <Closing />
      </main>
      <SiteFooter />
      <Dock />
    </div>
  );
}
