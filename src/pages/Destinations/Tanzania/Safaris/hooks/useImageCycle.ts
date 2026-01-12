import { useEffect, useState } from "react";

export function useImageCycle(
  images: string[],
  interval = 4000
) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images.length) return;

    const timer = setInterval(
      () => setIndex(i => (i + 1) % images.length),
      interval
    );

    return () => clearInterval(timer);
  }, [images, interval]);

  return images[index];
}
