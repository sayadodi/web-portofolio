import { useEffect, useRef } from "react";

const INTERACTIVE =
  "a, button, [role='button'], input, textarea, select, label, [data-cursor='hover']";

/**
 * A ring + dot cursor accent. Purely decorative: the native cursor is never
 * hidden, so the page stays usable if this effect fails to run.
 */
export function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;
    const dot = dotRef.current;
    if (!ring || !dot) return;

    const coarse = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (coarse) return;

    let frame = 0;
    let x = 0;
    let y = 0;

    const paint = () => {
      frame = 0;
      const transform = `translate3d(${x}px, ${y}px, 0)`;
      ring.style.transform = transform;
      dot.style.transform = transform;
      ring.dataset.visible = "true";
      dot.dataset.visible = "true";
    };

    const onMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    const onOver = (event: PointerEvent) => {
      const target = event.target;
      const interactive =
        target instanceof Element ? target.closest(INTERACTIVE) : null;
      ring.dataset.active = interactive ? "true" : "false";
    };

    const onDown = () => {
      ring.dataset.pressed = "true";
    };

    const onUp = () => {
      ring.dataset.pressed = "false";
    };

    const onLeave = () => {
      ring.dataset.visible = "false";
      dot.dataset.visible = "false";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    window.addEventListener("pointerup", onUp, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
      document.removeEventListener("pointerleave", onLeave);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
    </>
  );
}
