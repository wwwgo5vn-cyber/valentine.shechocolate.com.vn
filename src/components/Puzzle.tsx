import { useState } from "react";
import { dayMeta, type DayId } from "../constants/days";
import { labels } from "../constants/labels";
import { useShown } from "../lib/useShown";

export function Puzzle() {
  const [placed, setPlaced] = useState<Set<DayId>>(new Set());
  const [ref, shown] = useShown<HTMLElement>();
  const complete = placed.size === dayMeta.length;

  function place(id: DayId) {
    setPlaced((current) => {
      if (current.has(id)) return current;
      const next = new Set(current);
      next.add(id);
      return next;
    });
  }

  return (
    <section ref={ref} id="tranh" className={shown ? "puzzle reveal is-shown" : "puzzle reveal"}>
      <div className="wrap puzzle-layout">
        <div>
          <p className="kicker">{labels.puzzle.kicker}</p>
          <h2>{labels.puzzle.title}</h2>
          <p className="lede">{labels.puzzle.lede}</p>
          <p className="puzzle-count" aria-live="polite">
            {placed.size}
            {labels.puzzle.progressOf}
          </p>
          {complete ? <p className="puzzle-done">{labels.puzzle.complete}</p> : null}
          <a className="btn" href="#dat-hang">
            {labels.puzzle.cta}
          </a>
        </div>
        <div className="poem-sheet">
          <blockquote aria-label={labels.puzzle.poemAria}>
            {labels.puzzle.lines.map((line, index) => (
              <p key={index}>
                {line.map((part, partIndex) =>
                  part.d ? (
                    <mark key={partIndex} className={placed.has(part.d) ? "is-lit" : ""}>
                      {part.t}
                    </mark>
                  ) : (
                    <span key={partIndex}>{part.t}</span>
                  ),
                )}
              </p>
            ))}
          </blockquote>
          <p className="poem-sign">{labels.puzzle.sign}</p>
          <p className="puzzle-hint">{labels.puzzle.hint}</p>
          <ul className="pieces">
            {dayMeta.map((day) => {
              const copy = labels.days[day.id];
              const on = placed.has(day.id);
              return (
                <li key={day.id}>
                  <button
                    type="button"
                    className={on ? "piece is-on" : "piece"}
                    aria-pressed={on}
                    style={on ? { background: day.surface, color: day.ink } : undefined}
                    onClick={() => place(day.id)}
                  >
                    <span>{copy.name}</span>
                    <strong>{copy.emotion}</strong>
                  </button>
                </li>
              );
            })}
          </ul>
          {complete ? null : (
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => setPlaced(new Set(dayMeta.map((day) => day.id)))}
            >
              {labels.puzzle.lightAll}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
