import SiteHeader from "./components/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader variant="overlay" />
      <main>
        {/* HERO */}
        <section className="hero">
          <div className="hero__img">
            <img src="/images/hero-root-table.jpg" alt="A dining table with a sculptural solid-walnut root base and a glass top in a Hawley showroom" />
          </div>
          <div className="hero__scrim" />
          <div className="hero__inner wrap">
            <p className="eyebrow" style={{ color: "rgba(244,242,237,.85)" }}>Tulsa &amp; Santa Fe · Since 1979</p>
            <h1 className="serif-xl">Furniture designed and built by hand.</h1>
            <p className="lede">Hawley Design Co. is a furniture atelier and art gallery. Mark Hawley and a shop of master woodworkers turn a drawing — or a blank sheet of paper — into a piece you keep for good.</p>
            <div className="hero__cta">
              <a className="btn btn--solid" href="/custom">Commission a piece</a>
              <a className="btn btn--ghost" href="/visit">Visit the gallery</a>
            </div>
          </div>
          <div className="hero__label">
            <em>Root Dining Table</em>
            <span>Solid walnut base · Built in Tulsa</span>
          </div>
        </section>

        {/* STATEMENT */}
        <section className="statement">
          <div className="wrap grid">
            <div className="reveal">
              <p className="eyebrow">The studio</p>
              <h2 className="serif-lg" style={{ marginTop: 16 }}>Two things at once — a workshop, and a gallery.</h2>
            </div>
            <div className="reveal">
              <p className="body">What we make is drawn and built by hand from American hardwoods, meant to last decades and look like nothing else in the room. Alongside the furniture, we show original art — Mark Hawley&apos;s own work and a represented gallery of painters and makers.</p>
              <div className="creds">
                <span><b>Since 1979</b> in Tulsa</span>
                <span><b>Two galleries</b> · Tulsa &amp; Santa Fe</span>
                <span><b>Residential</b> &amp; commercial</span>
              </div>
            </div>
          </div>
        </section>

        {/* FEATURED */}
        <section className="featured">
          <div className="wrap">
            <div className="sec-head reveal">
              <div>
                <p className="eyebrow">Selected work</p>
                <h2 className="serif-lg" style={{ marginTop: 14 }}>Made to order, in the wood you choose.</h2>
              </div>
              <a className="link-underline" href="/furniture">All furniture <span className="arrow">→</span></a>
            </div>
            <div className="pieces">
              <div className="piece piece--a reveal">
                <figure><img src="/images/sideboard-walnut.jpg" alt="Long low sideboard in solid black walnut with a bronze top" /></figure>
                <figcaption className="label"><em>Walnut Sideboard</em><span className="meta">Solid black walnut · Made to order</span></figcaption>
              </div>
              <div className="piece piece--b reveal">
                <figure><img src="/images/cabinet-burl.jpg" alt="Cabinet with a book-matched burl wood front and dark case" /></figure>
                <figcaption className="label"><em>Burl-Front Cabinet</em><span className="meta">Book-matched burl · Made to order</span></figcaption>
              </div>
              <div className="piece piece--c reveal">
                <figure><img src="/images/console-macassar.jpg" alt="Console table in figured Macassar ebony" /></figure>
                <figcaption className="label"><em>Macassar Console</em><span className="meta">Figured Macassar ebony · Made to order</span></figcaption>
              </div>
              <div className="piece piece--wide reveal">
                <figure><img src="/images/slab-oak.jpg" alt="Dining table with a live-edge chinquapin oak slab top" /></figure>
                <figcaption className="label"><em>Chinquapin Oak Table</em><span className="meta">Single live-edge slab · Made to order</span></figcaption>
              </div>
            </div>
          </div>
        </section>

        {/* COMMISSION */}
        <section className="split split--flip">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/commission-racetrack.jpg" alt="Walnut racetrack dining table with blue leather chairs in a dining room" /></div>
            <div className="split__body reveal">
              <p className="eyebrow">Custom &amp; commissions</p>
              <h2 className="serif-lg">Bring a picture. Or a blank sheet of paper.</h2>
              <p className="body">Most of what we make begins as a conversation. Sketch it on a napkin, or point to something you&apos;ve seen — our woodworkers build it here in Tulsa in the wood, size, and finish your room actually needs. It&apos;s the reason people drive past the big-box stores.</p>
              <a className="btn btn--solid" href="/custom">Start a commission</a>
            </div>
          </div>
        </section>

        {/* GALLERY / ART */}
        <section className="gallery split--linen">
          <div className="wrap inner">
            <div className="gallery__media reveal"><img src="/images/art-diningroom.jpg" alt="Dining room with a Hawley table beneath original framed artwork" /></div>
            <div className="reveal">
              <p className="eyebrow">Original art &amp; represented artists</p>
              <h2 className="serif-lg" style={{ margin: "14px 0 18px" }}>An art gallery, not just a furniture store.</h2>
              <p className="body">Alongside Mark Hawley&apos;s own work — super-realist sculpture, pop-art pieces, and the Sitting Image Chairs — the gallery represents painters and makers from Tulsa, Santa Fe, and beyond.</p>
              <div className="artists">
                <p>Otto Duecker<span className="dot">·</span>Carol Jessen<span className="dot">·</span>Kim Doner<span className="dot">·</span>Dennis Johnson<span className="dot">·</span>Jill Pinkerton<span className="dot">·</span>Kelly Moore<span className="dot">·</span>Tom Savage</p>
              </div>
              <a className="btn btn--ghost" style={{ marginTop: 28 }} href="/art">See the gallery</a>
            </div>
          </div>
        </section>

        {/* STUDIO / 1979 */}
        <section className="split split--dark">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/studio-mark.jpg" alt="Mark Hawley at work in the studio" /></div>
            <div className="split__body reveal">
              <p className="eyebrow">Since 1979</p>
              <h2 className="serif-lg">Keeping Tulsa modern for more than forty years.</h2>
              <p className="body">Mark Hawley has been designing and building furniture in Tulsa since 1979. His pieces have appeared in national magazines, on <em>Star Trek</em>, and inside Frank Lloyd Wright&apos;s Westhope house — and in living rooms and boardrooms across Oklahoma.</p>
              <a className="btn btn--ghost" href="/studio">About the studio</a>
            </div>
          </div>
        </section>

        {/* VISIT */}
        <section className="visit">
          <div className="wrap">
            <div className="sec-head reveal" style={{ marginBottom: 0 }}>
              <div>
                <p className="eyebrow">Visit</p>
                <h2 className="serif-lg" style={{ marginTop: 14, color: "var(--paper)" }}>Two galleries. Come see the work in person.</h2>
              </div>
            </div>
            <div className="locations">
              <div className="loc reveal">
                <p className="city">Flagship</p>
                <h3>Tulsa</h3>
                <p>710 South Lewis Avenue<br />Tulsa, OK 74104<br />(918) 587-0510<br /><br />Tue–Fri 10–5:30 · Sat 10–4</p>
                <a className="btn btn--ghost" href="https://maps.google.com/?q=710+South+Lewis+Avenue+Tulsa+OK">Get directions</a>
              </div>
              <div className="loc reveal">
                <p className="city">Second gallery</p>
                <h3>Santa Fe</h3>
                <p>Santa Fe, New Mexico<br />By appointment<br /><br /><span style={{ opacity: 0.6 }}>Address &amp; hours — to add</span></p>
                <a className="btn btn--ghost" href="/visit">Plan a visit</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
