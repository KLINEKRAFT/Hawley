"use client";
import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;
    // TODO: wire to your ESP (Mailchimp, Klaviyo, Resend, etc.)
    setDone(true);
  }
  if (done) return <p className="body" style={{ marginTop: 14 }}>Thank you — you&apos;re on the list.</p>;
  return (
    <form className="news-form" onSubmit={onSubmit}>
      <input type="email" required placeholder="Email address" aria-label="Email address"
        value={email} onChange={(e) => setEmail(e.target.value)} />
      <button type="submit">Join</button>
    </form>
  );
}
