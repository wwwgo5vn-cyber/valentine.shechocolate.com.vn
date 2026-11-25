import { labels } from "../constants/labels";

export function Wordmark({ labelled = true }: { labelled?: boolean }) {
  if (!labelled) {
    return <span className="brand-logo" aria-hidden="true" />;
  }
  return <span className="brand-logo" role="img" aria-label={labels.brand.logoAlt} />;
}
