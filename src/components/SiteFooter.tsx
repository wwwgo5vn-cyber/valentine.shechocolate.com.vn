import { labels } from "../constants/labels";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <Wordmark />
          <p>{labels.footer.blurb}</p>
        </div>
        <div>
          <a href={labels.contact.phoneHref}>{labels.contact.phone}</a>
          <a href={labels.contact.phoneAltHref}>{labels.contact.phoneAlt}</a>
          <a href={labels.contact.zalo} target="_blank" rel="noreferrer">
            {labels.order.openZalo}
          </a>
          <a href={labels.contact.emailHref}>{labels.contact.email}</a>
        </div>
        <div>
          <p>{labels.contact.company}</p>
          <p>{labels.contact.tax}</p>
          <p>{labels.contact.address}</p>
          <a href={labels.contact.siteHref}>{labels.footer.shop}</a>
        </div>
      </div>
      <p className="footer-rights">{labels.footer.rights}</p>
    </footer>
  );
}
