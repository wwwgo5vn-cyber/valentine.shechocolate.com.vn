import { labels } from "../constants/labels";

type ParcelCardProps = {
  from: string;
  to: string;
  note?: string;
};

export function ParcelCard({ from, to, note = "" }: ParcelCardProps) {
  const fromText = from.trim();
  const toText = to.trim();
  const noteText = note.trim();

  return (
    <article className="parcel" aria-label={labels.parcel.product}>
      <div className="parcel-spine" aria-hidden="true" />
      <p className="parcel-class">{labels.parcel.className}</p>
      <div className="parcel-top">
        <p className="parcel-office">{labels.parcel.office}</p>
        <p className="parcel-stamp">
          <span>{labels.hero.stamp}</span>
          <small>{labels.hero.stampLine}</small>
        </p>
      </div>
      <HeartMark />
      <h3 className="parcel-title">{labels.parcel.product}</h3>
      <dl className="parcel-address">
        <div>
          <dt>{labels.parcel.from}</dt>
          <dd className={fromText ? "" : "is-blank"}>{fromText || labels.parcel.blankFrom}</dd>
        </div>
        <div>
          <dt>{labels.parcel.to}</dt>
          <dd className={toText ? "" : "is-blank"}>{toText || labels.parcel.blankTo}</dd>
        </div>
      </dl>
      {noteText ? (
        <p className="parcel-note">
          <span>{labels.parcel.note}</span>
          {noteText}
        </p>
      ) : null}
      <p className="parcel-site">{labels.brand.site}</p>
    </article>
  );
}

function HeartMark() {
  return (
    <svg className="parcel-mark" viewBox="0 0 86 46" aria-hidden="true">
      <path
        d="M24 34c0-8 6-14 12-8 2 2 3 5 4 7 1-2 2-5 4-7 6-6 12 0 12 8 0 7-8 12-16 16-8-4-16-9-16-16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path
        d="M46 34c0-8 6-14 12-8 2 2 3 5 4 7 1-2 2-5 4-7 6-6 12 0 12 8 0 7-8 12-16 16-8-4-16-9-16-16Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
