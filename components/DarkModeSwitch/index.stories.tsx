import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DarkModeSwitch from '.';

export default {
  title: 'Switch/DarkModeSwitch',
  component: DarkModeSwitch,
} as ComponentMeta<typeof DarkModeSwitch>;

const Template: ComponentStory<typeof DarkModeSwitch> = (args) => (
  <DarkModeSwitch {...args} />
);

export const Default = Template.bind({});
Default.args = {};
