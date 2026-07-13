import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

const artists = ["Otto Duecker","Carol Jessen","Kim Doner","Dennis Johnson","Jill Pinkerton","Kelly Moore","Tom Savage","Albert Coste","Elena Molinari","Iban Navarro"];

export const metadata: Metadata = {
  title: "Art & Gallery",
  description: "Original art by Mark Hawley — super-realist sculpture, pop-art, and the Sitting Image Chairs — alongside a represented gallery of painters and makers, African art, and rugs. Tulsa & Santa Fe.",
};

export default function Art() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-head">
          <div className="wrap">
            <p className="eyebrow">Art &amp; gallery</p>
            <h1 className="serif-xl">An art gallery, not just a furniture store.</h1>
            <p className="lede">The gallery has always been half the story. Alongside Mark Hawley&apos;s own work, we represent painters and makers from Tulsa, Santa Fe, and beyond — plus African art and a curated selection of rugs.</p>
          </div>
        </section>

        <section className="split">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/art-diningroom.jpg" alt="Original framed artwork above a Hawley dining table" /></div>
            <div className="split__body reveal">
              <p className="eyebrow">Mark Hawley, original work</p>
              <h2 className="serif-lg">Super-realism, pop art, and the Sitting Image Chairs.</h2>
              <p className="body">Mark&apos;s art runs from super-realist sculpture — a seven-foot ambrosia-maple comb, a giant working pocketknife — to pop-art pieces like the Matchbox and Paintbrush, and lately montages of African masks formed into modern totems. There&apos;s always something new on the drawing board.</p>
            </div>
          </div>
        </section>

        <section className="statement split--linen">
          <div className="wrap">
            <div className="sec-head reveal"><div>
              <p className="eyebrow">Represented artists</p>
              <h2 className="serif-lg" style={{ marginTop: 14 }}>Painters &amp; makers we show.</h2>
            </div></div>
            <div className="artist-grid reveal">
              {artists.map((a) => (<a href="/contact" key={a}>{a}</a>))}
            </div>
          </div>
        </section>

        <section className="split split--dark">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/room-living2.jpg" alt="Living room styled with art and Hawley furniture" /></div>
            <div className="split__body reveal">
              <p className="eyebrow">Also in the gallery</p>
              <h2 className="serif-lg">African art &amp; rugs.</h2>
              <p className="body">A rotating selection of African art and hand-knotted rugs rounds out the rooms — the pieces that make a space feel finished. Ask us what&apos;s in this week.</p>
              <a className="btn btn--ghost" href="/visit">Plan a visit</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
