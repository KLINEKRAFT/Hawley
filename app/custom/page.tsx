import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Custom & Commissions",
  description: "Commission custom furniture from Hawley Design Co. Bring a sketch, a photo, or a rough idea — our Tulsa woodworkers build it in the wood, size, and finish your room needs.",
};

export default function Custom() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-head page-head--linen">
          <div className="wrap">
            <p className="eyebrow">Custom &amp; commissions</p>
            <h1 className="serif-xl">Bring a picture. Or a blank sheet of paper.</h1>
            <p className="lede">A custom table might run $1,500 to $1,800 where a big-box version runs $400 — and the people who understand the difference are the ones we build for. Here&apos;s how a commission works.</p>
          </div>
        </section>

        <section className="split">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/commission-racetrack.jpg" alt="Walnut racetrack dining table built to order" /></div>
            <div className="split__body reveal">
              <p className="eyebrow">The idea</p>
              <h2 className="serif-lg">Anything you can describe, we can draw.</h2>
              <p className="body">Clients come in with a photo, a Pinterest board, or a rough sketch and say &ldquo;like this, but in walnut&rdquo; or &ldquo;this, but eight feet long.&rdquo; Mark can take a blank sheet of paper and draw exactly what you&apos;re describing — then our shop builds it a few blocks away.</p>
            </div>
          </div>
        </section>

        <section className="statement">
          <div className="wrap">
            <div className="sec-head reveal"><div>
              <p className="eyebrow">How it works</p>
              <h2 className="serif-lg" style={{ marginTop: 14 }}>Four steps, one workshop.</h2>
            </div></div>
            <div className="steps">
              <div className="step reveal"><span className="n">01</span><h3>Talk it through</h3><p>Visit the gallery or send us a note with your idea, your space, and roughly what you&apos;re after.</p></div>
              <div className="step reveal"><span className="n">02</span><h3>Design &amp; drawing</h3><p>We draw the piece and choose the wood, dimensions, and finish together — down to the edge profile.</p></div>
              <div className="step reveal"><span className="n">03</span><h3>Built by hand</h3><p>Our master woodworkers build it in Tulsa from American hardwoods. You&apos;re welcome to see it in progress.</p></div>
              <div className="step reveal"><span className="n">04</span><h3>Delivered</h3><p>We finish, inspect, and deliver — a piece meant to last decades, not seasons.</p></div>
            </div>
          </div>
        </section>

        <section className="split split--flip split--linen">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/slab-oak.jpg" alt="Live-edge oak slab table" /></div>
            <div className="split__body reveal">
              <p className="eyebrow">Residential &amp; commercial</p>
              <h2 className="serif-lg">From a single table to a whole floor.</h2>
              <p className="body">We build for homes and for commercial spaces — restaurants, offices, and hotels among them. If it&apos;s made of wood and you can picture it, it&apos;s in scope.</p>
              <a className="btn btn--solid" href="/contact">Start a commission</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
