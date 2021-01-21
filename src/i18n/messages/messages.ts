import english from './en.json';
import french from './fr.json';

import { SupportedLocale } from '../LocalizationProvider';

type AllLocalesMessages = {
  [locale in SupportedLocale]: {
    [key: string]: string;
  };
};

export const allLocalesMessages: AllLocalesMessages = {
  'en-CA': english,
  'en-US': english,
  'fr-CA': french,
};
