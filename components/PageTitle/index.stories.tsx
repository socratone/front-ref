import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import PageTitle from '.';

export default {
  title: 'Text/PageTitle',
  component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
  <PageTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '가나다라 마바사',
};
