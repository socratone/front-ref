import { ComponentStory, ComponentMeta } from '@storybook/react';
import Title from '.';

export default {
  title: 'Text/Title',
  component: Title,
} as ComponentMeta<typeof Title>;

const Template: ComponentStory<typeof Title> = (args) => <Title {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: '가나다라 마바사',
};
