import { ComponentStory, ComponentMeta } from '@storybook/react';
import TitleHeader from '.';

export default {
  title: 'Layout/TitleHeader',
  component: TitleHeader,
} as ComponentMeta<typeof TitleHeader>;

const Template: ComponentStory<typeof TitleHeader> = (args) => (
  <TitleHeader {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: 'Moment',
  url: 'https://momentjs.com/',
};
