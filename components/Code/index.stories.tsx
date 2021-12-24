import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Code from '.';

export default {
  title: 'Example/Code',
  component: Code,
} as ComponentMeta<typeof Code>;

const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "const message = 'hello world';",
};
