import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { ExamplePage, IExamplePage } from '.';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Pages/LocalizationExample',
  component: ExamplePage,
} as Meta;

const Template: Story<IExamplePage> = (args) => (
  <ExamplePage
    {...args}
    setLocale={action('setting locale')}
    setNewState={action('setting new state')}
  />
);

export const Default = Template.bind({});

Default.args = {
  apiData: 'Some Api Data',
  currentLocale: 'en-US',
};
