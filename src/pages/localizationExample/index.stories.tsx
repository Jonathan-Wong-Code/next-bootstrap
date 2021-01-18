import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { LocalizationExamplePage, ILocalizationPage } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pages/LocalizationExample',
  component: LocalizationExamplePage,
} as Meta;

const Template: Story<ILocalizationPage> = (args) => (
  <LocalizationExamplePage {...args} setLocale={action('setting locale')} />
);

export const Default = Template.bind({});

Default.args = {
  apiData: 'Some Api Data',
  currentLocale: 'en-US',
};
