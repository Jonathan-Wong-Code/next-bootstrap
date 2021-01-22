import { GetServerSidePropsContext } from 'next';

// This is more for future reference/PoC for locale based redirects.
// Works on the next serverside. if the user goes to www.website.com/examplePage and their preferred language is french it should redirect them to www.website.com/fr-CA/examplePage. Preliminary as there are no solid requirements on this yet.

export const redirectLocaleUrl = (context: GetServerSidePropsContext): void => {
  const preferredLocale = context.req.cookies.modernaLocale;

  const headers = context.req.headers;
  const locales = headers['accept-language'].split(';');

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
