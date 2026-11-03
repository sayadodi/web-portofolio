import { useEffect, useRef } from "react";

/**
 * Static dot grid plus a spotlight that lights up the dots around the pointer.
 * Pointer tracking is skipped on coarse pointers and reduced-motion devices.
 */
export function DotGrid() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const spot = spotRef.current;
    if (!spot) return;

    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (coarse || reduced) return;

    let frame = 0;
    let x = -1000;
    let y = -1000;

    const paint = () => {
      frame = 0;
      spot.style.setProperty("--mx", `${x}px`);
      spot.style.setProperty("--my", `${y}px`);
      spot.dataset.active = "true";
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div className="dot-grid" aria-hidden="true" />
      <div ref={spotRef} className="dot-spot" aria-hidden="true" />
    </>
  );
}
