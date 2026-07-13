"use client";
import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: POST to your form handler (Formspree, Resend, a route handler, etc.)
    setSent(true);
  }
  if (sent)
    return (
      <div className="reveal in">
        <h2 className="serif-lg" style={{ marginBottom: 14 }}>Thank you.</h2>
        <p className="body">We&apos;ve got your note and will be in touch shortly. For anything urgent, call the gallery at (918) 587-0510.</p>
      </div>
    );
  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="row row-2">
        <div className="field"><label htmlFor="name">Name</label>
          <input id="name" name="name" required /></div>
        <div className="field"><label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" required /></div>
      </div>
      <div className="row row-2">
        <div className="field"><label htmlFor="phone">Phone (optional)</label>
          <input id="phone" name="phone" type="tel" /></div>
        <div className="field"><label htmlFor="type">I&apos;m interested in</label>
          <select id="type" name="type" defaultValue="Custom furniture">
            <option>Custom furniture</option>
            <option>A piece I saw</option>
            <option>Commercial project</option>
            <option>Art &amp; gallery</option>
            <option>Something else</option>
          </select></div>
      </div>
      <div className="field"><label htmlFor="message">Tell us about it</label>
        <textarea id="message" name="message" placeholder="A sketch, a room, a rough idea — whatever you have." required /></div>
      <button className="btn btn--solid" type="submit">Send inquiry</button>
    </form>
  );
}
