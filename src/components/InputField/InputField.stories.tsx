import type { Meta, StoryObj } from "@storybook/react";
import { InputField } from "./InputField";

const meta: Meta<typeof InputField> = {
  title: "Components/InputField",
  component: InputField,
};
export default meta;
type Story = StoryObj<typeof InputField>;

export const Default: Story = { args: { label: "Username", placeholder: "Enter text" } };
export const Invalid: Story = { args: { label: "Email", invalid: true, errorMessage: "Invalid email" } };
export const Password: Story = { args: { label: "Password", type: "password" } };
export const Loading: Story = { args: { label: "Search", loading: true, placeholder: "Loading..." } };
