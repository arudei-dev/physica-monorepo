import { Story, Meta } from '@storybook/react';
import { Gadgets, GadgetsProps } from './gadgets';

export default {
  component: Gadgets,
  title: 'Gadgets',
} as Meta;

const Template: Story<GadgetsProps> = (args) => <Gadgets {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
