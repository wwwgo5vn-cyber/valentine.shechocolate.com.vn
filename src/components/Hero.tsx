import { labels } from "../constants/labels";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <p className="kicker">{labels.hero.kicker}</p>
          <h1>
            <span className="hero-script">{labels.hero.title}</span>
            <span className="hero-time">{labels.hero.time}</span>
          </h1>
          <p className="lede">{labels.hero.lede}</p>
          <div className="hero-actions">
            <a className="btn" href="#dat-hang">
              {labels.hero.primary}
            </a>
            <a className="btn btn-ghost" href="#bay-ngay">
              {labels.hero.secondary}
            </a>
          </div>
          <p className="hero-note">{labels.hero.reassurance}</p>
        </div>
        <figure className="hero-figure">
          <img src="/parcel-angle.jpg" alt={labels.hero.photoAlt} fetchPriority="high" />
          <p className="hero-stamp">
            <span>{labels.hero.stamp}</span>
            <small>{labels.hero.stampLine}</small>
          </p>
          <figcaption>{labels.hero.caption}</figcaption>
        </figure>
        <ul className="trust">
          {labels.trust.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
