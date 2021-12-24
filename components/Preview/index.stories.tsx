import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Preview from '.';

export default {
  title: 'Example/Preview',
  component: Preview,
} as ComponentMeta<typeof Preview>;

const Template: ComponentStory<typeof Preview> = (args) => (
  <Preview {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '가나다라 마바사',
};
