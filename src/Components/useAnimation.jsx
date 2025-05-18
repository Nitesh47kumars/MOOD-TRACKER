import { useState, useEffect } from "react";

export function useAnimation(componentKey = "default") {
  const storageKey = `hasAnimated-${componentKey}`;
  const [animateOnLoad, setAnimateOnLoad] = useState(false);

  useEffect(() => {
    const navEntry = performance.getEntriesByType("navigation")[0];
    const navType = navEntry?.type || performance.navigation.type;

    const hasAnimated = sessionStorage.getItem(storageKey);

    const isFirstLoad =
      navType === "reload" ||
      navType === "navigate" || // includes direct links/bookmarks
      navType === 1; // fallback for older browsers

    if (!hasAnimated && isFirstLoad) {
      setAnimateOnLoad(true);
      sessionStorage.setItem(storageKey, "true");
    }
  }, [storageKey]);

  return animateOnLoad;
}
