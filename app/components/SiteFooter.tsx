import NewsletterForm from "./NewsletterForm";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-top">
          <div className="foot-brand">
            <img src="/images/logo-black.png" alt="Hawley Design Co." />
            <p className="body">A furniture atelier and art gallery, keeping Tulsa modern since 1979.</p>
            <div className="news">
              <p className="eyebrow" style={{ color: "var(--muted)" }}>New work, first</p>
              <NewsletterForm />
            </div>
          </div>
          <div className="foot-cols">
            <div className="foot-col">
              <h4>Shop</h4>
              <a href="/furniture">Furniture</a>
              <a href="/custom">Custom &amp; commissions</a>
              <a href="/art">Art &amp; gallery</a>
            </div>
            <div className="foot-col">
              <h4>Studio</h4>
              <a href="/studio">About Mark Hawley</a>
              <a href="/studio#commercial">Commercial work</a>
              <a href="/visit">Visit</a>
            </div>
            <div className="foot-col">
              <h4>Connect</h4>
              <a href="https://instagram.com/hawleyco">Instagram</a>
              <a href="tel:+19185870510">(918) 587-0510</a>
              <a href="/contact">Contact</a>
            </div>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 Hawley Design Co.</span>
          <span>Keeping Tulsa modern since 1979.</span>
        </div>
      </div>
    </footer>
  );
}
