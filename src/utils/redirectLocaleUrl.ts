import { GetServerSidePropsContext } from 'next';

function returnValue(obj: unknown, key: string) {
  return obj[key];
}

export const redirectLocaleUrl = (context: GetServerSidePropsContext): void => {
  const preferredLocale = context.req.cookies.modernaLocale;

  const headers = context.req.headers;
  const locales = returnValue(headers, 'accept-language').split(';');

  const parsedLocales = locales.map((locale, index) => {
    if (index === 0) return locale.split(',')[0];
    return locale.split(',')[1];
  });

  parsedLocales.pop();

  const redirectLocale = preferredLocale ? preferredLocale : parsedLocales[0];
  const redirectUrl = `${redirectLocale}${context.resolvedUrl}`;

  if (context.locale !== redirectLocale) {
    context.res.setHeader('location', `/${redirectUrl}`);
    context.res.statusCode = 302;
    context.res.end();
  }
};
