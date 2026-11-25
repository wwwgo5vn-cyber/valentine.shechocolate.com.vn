import { labels } from "../constants/labels";

export function Faq() {
  return (
    <section className="faq">
      <div className="wrap faq-layout">
        <div>
          <p className="kicker">{labels.faq.kicker}</p>
          <h2>{labels.faq.title}</h2>
        </div>
        <div className="faq-list">
          {labels.faq.items.map((item) => (
            <details key={item.q} className="faq-item">
              <summary>
                <span>{item.q}</span>
              </summary>
              <p>{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
