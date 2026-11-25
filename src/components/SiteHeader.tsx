import { labels } from "../constants/labels";
import { Wordmark } from "./Wordmark";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="brand-link" href="#top" aria-label={labels.brand.logoAlt}>
        <Wordmark labelled={false} />
      </a>
      <nav className="site-nav" aria-label={labels.a11y.openMenu}>
        <a href="#bay-ngay">{labels.nav.week}</a>
        <a href="#tranh">{labels.nav.puzzle}</a>
        <a href="#dat-hang">{labels.nav.order}</a>
      </nav>
      <div className="header-actions">
        <a className="header-phone" href={labels.contact.phoneHref}>
          {labels.contact.phone}
        </a>
        <a className="btn btn-small" href="#dat-hang">
          {labels.nav.cta}
        </a>
      </div>
    </header>
  );
}
