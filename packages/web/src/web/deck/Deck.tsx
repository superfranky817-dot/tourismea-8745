import { useCallback, useEffect, useState } from "react";
import { slides, type Slide } from "./slides";
import "./deck.css";

const W = 1600;
const H = 900;

export function Deck() {
  const [index, setIndex] = useState(0);
  const [scale, setScale] = useState(1);
  const total = slides.length;

  const next = useCallback(() => setIndex((v) => Math.min(v + 1, total - 1)), [total]);
  const prev = useCallback(() => setIndex((v) => Math.max(v - 1, 0)), []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (["ArrowRight", "PageDown", " ", "Enter"].includes(e.key)) {
        e.preventDefault();
        next();
      } else if (["ArrowLeft", "PageUp", "Backspace"].includes(e.key)) {
        e.preventDefault();
        prev();
      } else if (e.key === "Home") setIndex(0);
      else if (e.key === "End") setIndex(total - 1);
    };
    const resize = () => setScale(Math.min(window.innerWidth / W, window.innerHeight / H));
    resize();
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", resize);
    };
  }, [next, prev, total]);

  return (
    <div className="deck-root">
      <div className="deck-stage" style={{ transform: `translate(-50%, -50%) scale(${scale})` }}>
        <SlideView key={index} slide={slides[index]} />
      </div>
      <button className="deck-nav deck-prev" onClick={prev} disabled={index === 0} aria-label="Précédent">
        ‹
      </button>
      <button className="deck-nav deck-next" onClick={next} disabled={index === total - 1} aria-label="Suivant">
        ›
      </button>
      <div className="deck-progress">
        <div style={{ width: `${((index + 1) / total) * 100}%` }} />
      </div>
    </div>
  );
}

function Boy({ pose }: { pose: "wave" | "point" }) {
  return <img className={`boy boy-${pose}`} src={`/img/char_${pose}.png`} alt="" />;
}

function Photo({ name, delay = 0, alt = "" }: { name: string; delay?: number; alt?: string }) {
  return (
    <div className="photo" style={{ animationDelay: `${delay}ms` }}>
      <img src={`/img/${name}.jpg`} alt={alt} />
    </div>
  );
}

function SlideView({ slide }: { slide: Slide }) {
  if (slide.kind === "cover") {
    return (
      <section className="slide cover">
        <img className="cover-bg" src={`/img/${slide.photos[0]}.jpg`} alt="" />
        <div className="cover-shade" />
        <div className="zellige-strip" />
        <h1 className="reveal" style={{ "--d": "300ms" } as React.CSSProperties}>
          {slide.title}
        </h1>
        {slide.boy && <Boy pose={slide.boy} />}
      </section>
    );
  }

  if (slide.kind === "plan") {
    return (
      <section className="slide plan">
        <div className="pattern" />
        <div className="plan-left">
          <h2 className="title reveal" style={{ "--d": "0ms" } as React.CSSProperties}>
            {slide.title}
          </h2>
          <ol>
            {slide.items?.map((item, i) => (
              <li key={item} className="reveal" style={{ "--d": `${200 + i * 120}ms` } as React.CSSProperties}>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className="plan-photos">
          {slide.photos.map((p, i) => (
            <Photo key={p} name={p} delay={150 + i * 150} />
          ))}
        </div>
      </section>
    );
  }

  if (slide.kind === "closing") {
    return (
      <section className="slide closing">
        <img className="cover-bg" src={`/img/${slide.photos[0]}.jpg`} alt="" />
        <div className="closing-shade" />
        <div className="sparkles" aria-hidden="true">
          {Array.from({ length: 12 }).map((_, i) => (
            <span key={i} style={{ left: `${(i * 37) % 100}%`, animationDelay: `${(i * 0.37) % 3}s` }} />
          ))}
        </div>
        <h1 className="reveal" style={{ "--d": "250ms" } as React.CSSProperties}>
          {slide.title}
        </h1>
        {slide.boy && <Boy pose={slide.boy} />}
      </section>
    );
  }

  // content
  const count = slide.photos.length;
  return (
    <section className={`slide content ${slide.boy ? "with-boy" : ""}`}>
      <div className="pattern" />
      <div className="content-head">
        <h2 className="title reveal" style={{ "--d": "0ms" } as React.CSSProperties}>
          {slide.title}
        </h2>
        <div className="head-line" />
      </div>
      {slide.boy && <Boy pose={slide.boy} />}
      <div className="content-body">
        <div className={`text-card${(slide.paragraphs?.join(" ").length ?? 0) > 200 ? " long" : ""}`}>
          {slide.paragraphs?.map((p, i) => (
            <p key={i} className="reveal" style={{ "--d": `${250 + i * 180}ms` } as React.CSSProperties}>
              {p}
            </p>
          ))}
        </div>
        <div className={`photos n${count}`}>
          {slide.photos.map((p, i) => (
            <Photo key={p} name={p} delay={200 + i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}
