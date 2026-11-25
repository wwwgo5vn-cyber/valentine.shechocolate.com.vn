import { labels } from "../constants/labels";
import { useShown } from "../lib/useShown";

export function Contents() {
  const [ref, shown] = useShown<HTMLElement>();

  return (
    <section ref={ref} className={shown ? "contents reveal is-shown" : "contents reveal"}>
      <div className="wrap contents-grid">
        <div>
          <p className="kicker">{labels.contents.kicker}</p>
          <h2>{labels.contents.title}</h2>
          <p className="lede">{labels.contents.lede}</p>
          <ul className="checklist">
            {labels.contents.items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="steps-card">
          <h3>{labels.contents.stepsTitle}</h3>
          <ol className="steps">
            {labels.contents.steps.map((step) => (
              <li key={step.n}>
                <span>{step.n}</span>
                <div>
                  <strong>{step.title}</strong>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="who">{labels.contents.who}</p>
          <ul className="occasions">
            {labels.contents.occasions.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
