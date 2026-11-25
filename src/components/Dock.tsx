import { useEffect, useState } from "react";
import { labels } from "../constants/labels";

export function Dock() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const node = document.getElementById("dat-hang");
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setHidden(Boolean(entry?.isIntersecting)), {
      threshold: 0.18,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={hidden ? "dock is-hidden" : "dock"}>
      <a className="btn" href="#dat-hang">
        {labels.dock.cta}
      </a>
      <a className="btn btn-ghost" href={labels.contact.phoneHref}>
        {labels.dock.call}
      </a>
    </div>
  );
}
