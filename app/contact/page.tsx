import type { Metadata } from "next";
import SiteHeader from "../components/SiteHeader";
import ContactForm from "../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Hawley Design Co. in Tulsa — start a commission, ask about a piece, or plan a gallery visit. 710 South Lewis Avenue, Tulsa, OK · (918) 587-0510.",
};

export default function Contact() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="page-head page-head--linen">
          <div className="wrap">
            <p className="eyebrow">Contact</p>
            <h1 className="serif-xl">Tell us what you have in mind.</h1>
            <p className="lede">A commission, a piece you saw, a commercial project, or just a question — send a note and we&apos;ll get back to you. Or call the gallery; we like talking through ideas.</p>
          </div>
        </section>

        <section className="statement">
          <div className="wrap contact-grid">
            <div className="reveal"><ContactForm /></div>
            <div className="reveal">
              <div className="contact-info">
                <p className="city">Flagship</p>
                <h3>Tulsa</h3>
                <p>710 South Lewis Avenue<br />Tulsa, OK 74104<br /><a className="link-underline" href="tel:+19185870510">(918) 587-0510</a><br /><br />Tue–Fri 10–5:30 · Sat 10–4</p>
              </div>
              <div className="contact-info">
                <p className="city">Second gallery</p>
                <h3>Santa Fe</h3>
                <p>Santa Fe, New Mexico<br />By appointment</p>
              </div>
              <div className="contact-info">
                <p className="city">Follow</p>
                <h3>Elsewhere</h3>
                <p><a className="link-underline" href="https://instagram.com/hawleyco">Instagram — @hawleyco</a></p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
