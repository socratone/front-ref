import { ComponentStory, ComponentMeta } from '@storybook/react';
import SubTitle from '.';

export default {
  title: 'Text/Title',
  component: SubTitle,
} as ComponentMeta<typeof SubTitle>;

const Template: ComponentStory<typeof SubTitle> = (args) => (
  <SubTitle {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '가나다라 마바사',
};
