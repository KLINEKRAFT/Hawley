import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Studio",
  description: "Mark Hawley has designed and built furniture in Tulsa since 1979. Hawley Design Co. — a furniture atelier and art gallery keeping Tulsa modern, with work from Star Trek to Frank Lloyd Wright's Westhope house.",
};

export default function Studio() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="band">
          <img src="/images/studio-mark.jpg" alt="Mark Hawley at work in the studio" />
          <div className="band__scrim" />
          <div className="band__in wrap">
            <p className="eyebrow" style={{ color: "rgba(244,242,237,.85)" }}>Since 1979</p>
            <h1 className="serif-xl" style={{ maxWidth: "16ch" }}>Keeping Tulsa modern for more than forty years.</h1>
          </div>
        </section>

        <section className="prose">
          <div className="wrap prose__grid">
            <div className="reveal">
              <p className="eyebrow">The studio</p>
              <h2 className="serif-lg">Mark Hawley</h2>
            </div>
            <div className="reveal">
              <p>Mark Hawley has been building furniture since he was a kid — gluing, clamping, and sanding alongside his father, an engineer with a passion for woodworking. He studied product design at the University of Oklahoma, apprenticed under a master furniture designer, and in 1979 came home to Tulsa to design, build, and show his own work.</p>
              <p>He has always leaned modern where others went traditional. His signature Ripple Line, introduced in 1983, put wavy legs on tables, desks, and chairs. Pieces have appeared in national magazines, on <em>Star Trek</em>, and on Extreme Home Makeover.</p>
              <p>Today the gallery on South Lewis shows furniture drawn by Mark and built by master craftsmen a few blocks away, from American-sourced hardwoods — alongside his original art and a represented gallery of painters and makers.</p>
            </div>
          </div>
        </section>

        <section className="statement split--linen" id="commercial">
          <div className="wrap">
            <div className="sec-head reveal"><div>
              <p className="eyebrow">Commercial &amp; notable work</p>
              <h2 className="serif-lg" style={{ marginTop: 14 }}>Beyond the living room.</h2>
            </div></div>
            <div className="prose__grid reveal">
              <div><p>We do commercial work as readily as residential.</p></div>
              <div>
                <p>Hawley pieces are installed at the Mayo Hotel and the University of Tulsa, and in restaurants around town. A dining table and chairs designed and built with Ross Felice sit inside Frank Lloyd Wright&apos;s Westhope house, drawn to echo Wright&apos;s own high-backed chairs.</p>
                <p>If you&apos;re specifying for a space — hospitality, office, or institutional — we&apos;re glad to work from your drawings or ours.</p>
              </div>
            </div>
            <div className="reveal" style={{ marginTop: 40 }}>
              <a className="btn btn--solid" href="/contact">Talk to the studio</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
