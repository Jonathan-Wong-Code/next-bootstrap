import React from 'react';
import { useRouter } from 'next/router';

export function getInitialLocale() {
  const defaultLocale = 'en-US';
  // preference from the previous session
  const localSetting = localStorage.getItem('moderna-locale');
  if (localSetting) {
    return localSetting;
  }

  // the language setting of the browser
  const browserSetting = navigator.language;
  if (browserSetting) {
    return browserSetting;
  }

  return defaultLocale;
}

export const RouteListener = ({ children }) => {
  const router = useRouter();

  React.useEffect(() => {
    const preferredLocale = getInitialLocale();

    if (preferredLocale !== router.locale && router.pathname !== '/') {
      router.push(`${preferredLocale}${router.pathname}`);
    }
  }, [router.pathname, router]);
  return children;
};
