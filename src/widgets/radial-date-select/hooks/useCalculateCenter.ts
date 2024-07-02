import { useEffect, useRef, useState } from "react";

export default function useCalculateCenter() {
  const ref = useRef<HTMLDivElement>(null);

  const [center, setCenter] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      setCenter({ x: centerX, y: centerY });
    }
  }, []);

  return {
    ref,
    center,
  }
}
