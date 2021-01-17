import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';
export default function Home(): JSX.Element {
  const { locale, locales } = useRouter();

  const { formatMessage } = useIntl();

  const greeting = formatMessage({ id: 'hello' });

  return (
    <>
      <h2>
        {greeting} current locale is: {locale}
      </h2>
      <ul>
        {locales.map((locale) => (
          <li key={locale}>
            <Link href="/" locale={locale}>
              <a>{locale}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
