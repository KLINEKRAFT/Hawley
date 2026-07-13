import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import { groups } from "../data/pieces";

export const metadata: Metadata = {
  title: "Furniture",
  description: "Custom furniture designed by Mark Hawley and built by hand in Tulsa — dining tables, sideboards, cabinets, beds, and seating. Made to order in the wood you choose.",
};

export default function Furniture() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-head">
          <div className="wrap">
            <p className="eyebrow">Furniture</p>
            <h1 className="serif-xl">Made by hand, made to order.</h1>
            <p className="lede">Everything here was drawn by Mark Hawley and built a few blocks from the gallery in American hardwoods. Nothing ships flat-packed; nothing is final until it fits your room. Use these as starting points — then change the wood, the size, or the finish.</p>
          </div>
        </section>

        <section className="catalog">
          <div className="wrap">
            {groups.map((g) => (
              <div className="cat-group" key={g.category}>
                <div className="cat-group__head reveal">
                  <h2>{g.category}</h2>
                  <span className="count">{g.note}</span>
                </div>
                <div className="cat-grid">
                  {g.pieces.map((p, i) => (
                    <figure className="card reveal" key={g.category + i}>
                      <div className="card__frame">
                        <img src={`/images/${p.image}`} alt={p.alt} loading="lazy" />
                      </div>
                      <figcaption className="label">
                        <em>{p.name}</em>
                        <span className="meta">{p.material}</span>
                      </figcaption>
                    </figure>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="split split--dark">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/detail-walnut.jpg" alt="Close detail of walnut grain on a table top" /></div>
            <div className="split__body reveal">
              <p className="eyebrow">Don&apos;t see it?</p>
              <h2 className="serif-lg">Then we haven&apos;t built it yet.</h2>
              <p className="body">Most of what we make never appears on a page — it starts with a client&apos;s sketch or a photo of a room. If you have an idea, bring it to us.</p>
              <a className="btn btn--ghost" href="/custom">Start a commission</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
