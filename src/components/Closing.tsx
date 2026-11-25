import { labels } from "../constants/labels";

export function Closing() {
  return (
    <section className="closing">
      <div className="wrap closing-card">
        <p className="kicker">{labels.closing.kicker}</p>
        <h2>{labels.closing.title}</h2>
        <p>{labels.closing.text}</p>
        <a className="btn" href="#dat-hang">
          {labels.closing.cta}
        </a>
      </div>
    </section>
  );
}
