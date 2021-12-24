import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageText from '.';

export default {
  title: 'Text/PageText',
  component: PageText,
} as ComponentMeta<typeof PageText>;

const Template: ComponentStory<typeof PageText> = (args) => (
  <PageText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '가나다라 마바사',
};
