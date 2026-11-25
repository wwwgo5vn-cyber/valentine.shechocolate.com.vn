import { useState } from "react";
import { dayMeta, type DayId } from "../constants/days";
import { labels } from "../constants/labels";
import { useShown } from "../lib/useShown";

export function Week() {
  const [open, setOpen] = useState<DayId>("mon");
  const [ref, shown] = useShown<HTMLElement>();

  return (
    <section
      ref={ref}
      id="bay-ngay"
      className={shown ? "week reveal is-shown" : "week reveal"}
    >
      <div className="wrap">
        <div className="section-intro">
          <p className="kicker">{labels.week.kicker}</p>
          <h2>{labels.week.title}</h2>
          <p className="lede">{labels.week.lede}</p>
        </div>
        <div className="week-layout">
          <figure className="week-photo">
            <img src="/parcel-open.jpg" alt={labels.week.photoAlt} />
            <figcaption>{labels.week.caption}</figcaption>
          </figure>
          <div>
            <p className="week-hint">{labels.week.hint}</p>
            <div className="days" role="list">
              {dayMeta.map((day) => {
                const copy = labels.days[day.id];
                const on = open === day.id;
                return (
                  <article key={day.id} className={on ? "day is-open" : "day"} role="listitem">
                    <button
                      type="button"
                      className="day-button"
                      aria-expanded={on}
                      onClick={() => setOpen(day.id)}
                    >
                      <span className="day-swatch" style={{ background: day.surface, color: day.ink }}>
                        {copy.name}
                      </span>
                      <span className="day-emotion">{copy.emotion}</span>
                    </button>
                    {on ? (
                      <div className="day-body">
                        <p className="day-line">{copy.line}</p>
                        <p>{copy.body}</p>
                        <p className="day-piece">{labels.week.piece}</p>
                      </div>
                    ) : null}
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
