import React from 'react';
import { GetServerSidePropsContext } from 'next';
import cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { redirectLocaleUrl } from '../src/utils/redirectLocaleUrl';
import { LocalizationExamplePage } from '../src/pages/localizationExample';
interface IServerSideProps {
  // Would replace this with actual props return.
  props: {
    someApiValue: string;
  };
}

// Setting type to UNKNOWN for now.
export async function getServerSideProps(
  context: GetServerSidePropsContext
): Promise<IServerSideProps> {
  redirectLocaleUrl(context);

  return {
    props: {
      someApiValue: 'hello i am data',
    },
  };
}

interface IExample {
  someApiValue: string;
}

export default function Example({ someApiValue }: IExample): JSX.Element {
  const { locale: currentLocale, pathname } = useRouter();

  const setLocale = (locale: string | undefined) => {
    cookie.set('modernaLocale', locale, { expires: 1 / 24 });
    window.location.href = `/${locale}${pathname}`;
  };

  return (
    <LocalizationExamplePage
      setLocale={setLocale}
      currentLocale={currentLocale}
      apiData={someApiValue}
    />
  );
}
