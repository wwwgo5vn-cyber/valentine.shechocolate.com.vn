import { labels } from "../constants/labels";
import { useShown } from "../lib/useShown";
import { ParcelCard } from "./ParcelCard";

export function Story() {
  const [ref, shown] = useShown<HTMLElement>();

  return (
    <section ref={ref} className={shown ? "story reveal is-shown" : "story reveal"}>
      <div className="wrap story-grid">
        <div className="story-copy">
          <p className="kicker">{labels.story.kicker}</p>
          <h2>{labels.story.title}</h2>
          <p className="lede">{labels.story.intro}</p>
        </div>
        <ParcelCard from="" to="" />
        <ol className="beats">
          {labels.story.beats.map((beat) => (
            <li key={beat.n}>
              <span>{beat.n}</span>
              <h3>{beat.title}</h3>
              <p>{beat.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
