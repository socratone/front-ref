import { ComponentStory, ComponentMeta } from '@storybook/react';
import IconButton from '.';
import MenuIcon from '@mui/icons-material/Menu';

export default {
  title: 'Button/IconButton',
  component: IconButton,
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => (
  <IconButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: <MenuIcon />,
};

export const Diameter = Template.bind({});
Diameter.args = {
  ...Default.args,
  diameter: 100,
};
