import { useRouter } from 'next/router';

import cookie from 'js-cookie';

// This is more for future reference/PoC for a routing.
interface IUseSetLocale {
  setLocale: (locale: string) => void;
}

export function useSetLocale(): IUseSetLocale {
  const { pathname } = useRouter();

  const setLocale = (locale: string | undefined) => {
    cookie.set('modernaLocale', locale, { expires: 1 / 24 });
    window.location.href = `/${locale}${pathname}`;
  };

  return { setLocale };
}
