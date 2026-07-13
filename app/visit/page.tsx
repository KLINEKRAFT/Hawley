import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";

export const metadata: Metadata = {
  title: "Visit",
  description: "Visit Hawley Design Co. — the flagship gallery at 710 South Lewis Avenue, Tulsa, OK, and a second gallery in Santa Fe, NM. See custom furniture and original art in person.",
};

export default function Visit() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-head">
          <div className="wrap">
            <p className="eyebrow">Visit</p>
            <h1 className="serif-xl">Two galleries. See the work in person.</h1>
            <p className="lede">Photographs only get you so far with wood and light. Come run your hand along a live edge, open a burl-front cabinet, and see how a piece sits in a real room.</p>
          </div>
        </section>

        <section className="split">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/visit-showroom.jpg" alt="Hawley Design showroom interior" /></div>
            <div className="split__body reveal">
              <p className="city" style={{ fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--walnut)" }}>Flagship</p>
              <h2 className="serif-lg" style={{ margin: "6px 0 18px" }}>Tulsa</h2>
              <p className="body">710 South Lewis Avenue<br />Tulsa, OK 74104<br />(918) 587-0510</p>
              <p className="body" style={{ marginTop: 16 }}>Tue–Fri&nbsp;&nbsp;10:00 – 5:30<br />Sat&nbsp;&nbsp;10:00 – 4:00<br />Sun &amp; Mon&nbsp;&nbsp;Closed</p>
              <a className="btn btn--solid" style={{ marginTop: 26 }} href="https://maps.google.com/?q=710+South+Lewis+Avenue+Tulsa+OK+74104">Get directions</a>
            </div>
          </div>
        </section>

        <section className="split split--flip split--dark">
          <div className="wrap inner">
            <div className="split__media reveal"><img src="/images/room-living2.jpg" alt="Styled interior with Hawley furniture and art" /></div>
            <div className="split__body reveal">
              <p className="eyebrow">Second gallery</p>
              <h2 className="serif-lg" style={{ margin: "6px 0 18px" }}>Santa Fe</h2>
              <p className="body">Santa Fe, New Mexico<br />By appointment</p>
              <p className="body" style={{ marginTop: 16, opacity: 0.65 }}>Address &amp; hours — to be added.</p>
              <a className="btn btn--ghost" style={{ marginTop: 26 }} href="/contact">Request an appointment</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
