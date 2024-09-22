import { Dropdown } from ".";
import { Meta, StoryFn, StoryObj } from "@storybook/react";
import { TriggerProps } from "./Trigger";
import "./Trigger/variables.scss";
export default {
  title: "Components/Dropdown",
  tags: ["autodocs"],
  component: Dropdown.Container,
} as Meta<TriggerProps>;

const Template: StoryFn = () => (
  <Dropdown.Container>
    <Dropdown.Trigger>Open Dropdown</Dropdown.Trigger>
    <Dropdown.Menu>
      <Dropdown.Item>Item 1</Dropdown.Item>
      <Dropdown.Item>Item 2</Dropdown.Item>
      <Dropdown.Item>Item 3</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown.Container>
);

export const Default = Template.bind({});
Default.args = {};
