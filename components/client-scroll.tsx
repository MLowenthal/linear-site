"use client";
import { Button } from "./button";

const shortcuts = [
  { text: "Abstract", url: "http://abstract.com" },
  { text: "Appcues", url: "http://appcues.com" },
  { text: "AppOnboard", url: "http://apponboard.com" },
  { text: "Atmos", url: "http://buildatmos.com" },
  { text: "Automata", url: "http://automata.tech" },
  { text: "Bandpage", url: "http://bandpage.com" },
  { text: "BitGo", url: "http://bitgo.com" },
  { text: "BoostUp.ai", url: "http://boostup.ai" },
  { text: "Bright Money", url: "http://brightmoney.co" },
  { text: "Builder.io", url: "http://builder.io" },
  { text: "Canopy", url: "http://getcanopy.com" },
  { text: "Cardless", url: "http://cardless.com" },
  { text: "Catio", url: "http://catio.tech" },
  { text: "Check", url: "http://checkhq.com" },
  { text: "Chime", url: "http://chime.com" },
  { text: "CoinList", url: "http://coinlist.co" },
  { text: "CybelAngel", url: "http://cybelangel.com" },
  { text: "Dataguard", url: "http://dataguard.com" },
  { text: "dYdX", url: "http://dydx.exchange" },
  { text: "Earnin", url: "http://earnin.com" },
  { text: "Eleven Labs", url: "http://elevenlabs.io" },
  { text: "Empower", url: "http://www.empower.me" },
  { text: "Esusu", url: "https://esusurent.com" },
  { text: "Everlane", url: "http://everlane.com" },
  { text: "Expensify", url: "https://www.expensify.com" },
  { text: "Fauna", url: "http://fauna.com" },
  { text: "Fitbod", url: "http://fitbod.me" },
  { text: "Flashpoint", url: "http://flashpoint.io" },
  { text: "Forethought", url: "http://forethought.ai" },
  { text: "Framer", url: "http://framer.com" },
  { text: "GGWP", url: "http://ggwp.com" },
  { text: "Gladly", url: "http://gladly.com" },
  { text: "Grailed", url: "http://grailed.com" },
  { text: "Grain", url: "http://trygrain.com" },
  { text: "Hex", url: "http://hex.tech" },
  { text: "Hightouch", url: "http://hightouch.com" },
  { text: "Honeycomb", url: "http://joinhoneycomb.com" },
  { text: "Immersive Labs", url: "http://immersivelabs.com" },
  { text: "Jasper", url: "http://jasper.ai" },
  { text: "Joy", url: "http://joy.co" },
  { text: "Kong", url: "http://konghq.com" },
  { text: "Ladder", url: "http://ladderlife.com" },
  { text:"LambdaTest", url: "http://lambdatest.com" },
  { text: "Linktree", url: "http://linktr.ee" },
  { text: "Lob", url: "http://lob.com" },
  { text: "Magic", url: "http://magic.link" },
  { text: "Metafy", url: "http://metafy.gg" },
  { text: "Modern Milkman", url: "http://themodernmilkman.co.uk" },
  { text: "Mutiny", url: "http://mutinyhq.com" },
  { text: "Mux", url: "http://mux.com" },
  { text: "Nate", url: "http://nate.tech" },
  { text: "NoRedInk", url: "http://noredink.com" },
  { text: "Nova Credit", url: "http://novacredit.com" },
  { text: "Origin", url: "http://useorigin.com" },
  { text: "Oura", url: "http://ouraring.com" },
  { text: "Peek", url: "http://peek.com" },
  { text: "People.ai", url: "http://people.ai" },
  { text: "Perelego", url: "http://perlego.com" },
  { text: "Phantom", url: "http://phantom.app" },
  { text: "Pilot", url: "http://pilot.com" },
  { text: "Plasmic", url: "http://plasmic.app" },
  { text: "Plume", url: "http://getplume.co" },
  { text: "Promise", url: "http://promise-pay.com" },
  { text: "Quizlet", url: "http://quizlet.com" },
  { text: "Radar", url: "http://radar.io" },
  { text: "Red Canary", url: "http://redcanary.com" },
  { text: "Reloadly", url: "http://reloadly.com" },
  { text: "Replicated", url: "http://replicated.com" },
  { text: "RevenueCat", url: "http://revenuecat.com" },
  { text: "ROOM", url: "http://room.com" },
  { text: "Runway Financial", url: "http://runway.com" },
  { text: "Scale AI", url: "http://scale.com" },
  { text: "Sentry", url: "http://sentry.io" },
  { text: "Shelf Engine", url: "http://shelfengine.com" },
  { text: "Short Story", url: "http://shortstorybox.com" },
  { text: "Signicat", url: "http://signicat.com" },
  { text: "Skycell", url: "http://skycell.ch" },
  { text: "Slope", url: "http://slopepay.com" },
  { text: "Socket.dev", url: "http://socket.dev" },
  { text: "Spectrum Labs", url: "https://www.spectrumlabsai.com" },
  { text: "Split Software", url: "http://split.io" },
  { text: "Stockpile", url: "http://stockpile.com" },
  { text: "Superblocks", url: "http://superblocks.com" },
  { text: "Sweep", url: "http://sweep.net" },
  { text: "Synapse", url: "http://synapsefi.com" },
  { text: "Synctera", url: "http://synctera.com" },
  { text: "Synapse", url: "http://synapsefi.com" },
  { text: "Talos", url: "http://talos.com" },
  { text: "Tenderly", url: "http://tenderly.co" },
  { text: "Tetrate", url: "http://tetrate.io" },
  { text: "The Graph", url: "http://thegraph.com" },
  { text: "Tines", url: "http://tines.com" },
  { text: "Transfix", url: "http://transfix.io" },
  { text: "Treasury Prime", url: "http://treasuryprime.com" },
  { text: "Tropic", url: "http://tropicapp.io" },
  { text: "Uniswap", url: "http://uniswap.org" },
  { text: "Vantage", url: "http://vantage.sh" },
  { text: "Viz", url: "http://viz.ai" },
  { text: "Warmly", url: "http://warmly.ai" },
  { text: "Weaveworks", url: "http://weave.works" },
];

const chunkArray = (array: { text: string; url: string }[], chunkSize: number): { text: string; url: string }[][] => {
  let result = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const ROW_SIZE = 20; // Adjust this number as needed


export const KeyboardShortcuts = () => {
  const shortcutRows = chunkArray(shortcuts, ROW_SIZE);

  const onShortcutButtonClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <>
      {shortcutRows.map((rowShortcuts, rowIndex) => (
        // Tailwind classes adjusted to prevent any overflow scrolling on mobile
        <div key={`row-${rowIndex}`} className="my-2 h-[4rem] min-h-[4rem] w-full md:block">
          <div className="mask-shortcutkeys flex justify-center items-center h-full max-w-full gap-2">
            {rowShortcuts.map((shortcut, index) => (
              <Button
                className="shrink-0 snap-center mx-auto"
                key={`${shortcut.text}-${rowIndex}`}
                data-index={index}
                onClick={() => onShortcutButtonClick(shortcut.url)}
                variant="secondary"
              >
                <span>{shortcut.text}</span>
              </Button>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

