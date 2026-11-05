import { useEffect, useRef } from "react";

/**
 * Keeps keyboard focus inside a dialog while it is open, closes it on Escape,
 * and returns focus to the element that opened it.
 *
 * Usage:
 *   const dialogRef = useFocusTrap<HTMLDivElement>(isOpen, close);
 *   <div ref={dialogRef} role="dialog" aria-modal="true">…</div>
 */
export function useFocusTrap<T extends HTMLElement>(
  active: boolean,
  onClose: () => void,
) {
  const ref = useRef<T>(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!active) return;

    const trigger = document.activeElement as HTMLElement | null;
    const container = ref.current;

    const focusable = () =>
      Array.from(
        container?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      ).filter((node) => node.offsetParent !== null);

    const first = focusable()[0];
    (first ?? container)?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onCloseRef.current();
        return;
      }

      if (event.key !== "Tab") return;

      const nodes = focusable();
      if (nodes.length === 0) {
        event.preventDefault();
        return;
      }

      const firstNode = nodes[0];
      const lastNode = nodes[nodes.length - 1];
      if (!firstNode || !lastNode) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstNode) {
        event.preventDefault();
        lastNode.focus();
      } else if (
        !event.shiftKey &&
        document.activeElement === lastNode
      ) {
        event.preventDefault();
        firstNode.focus();
      } else if (!container?.contains(document.activeElement)) {
        event.preventDefault();
        firstNode.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      trigger?.focus?.();
    };
  }, [active]);

  return ref;
}
