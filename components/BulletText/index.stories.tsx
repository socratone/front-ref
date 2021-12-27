import { ComponentStory, ComponentMeta } from '@storybook/react';
import BulletText from '.';

export default {
  title: 'Text/BulletText',
  component: BulletText,
} as ComponentMeta<typeof BulletText>;

const Template: ComponentStory<typeof BulletText> = (args) => (
  <BulletText {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: '가나다라',
};

export const Long = Template.bind({});
Long.args = {
  children:
    '가나다라 마바사 아자차카 타파하 가나다라 마바사 아자차카 타파하 가나다라 마바사 아자차카 타파하 가나다라 마바사 아자차카 타파하 가나다라 마바사 아자차카 타파하 가나다라 마바사 아자차카 타파하 가나다라 마바사 아자차카 타파하 가나다라 마바사 아자차카 타파하 가나다라 마바사 아자차카 타파하 ',
};
