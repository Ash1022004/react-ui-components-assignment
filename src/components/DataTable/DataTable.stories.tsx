import type { Meta, StoryObj } from "@storybook/react";
import { DataTable } from "./DataTable";

interface User {
  id: number;
  name: string;
  age: number;
}

const users: User[] = [
  { id: 1, name: "Ashish", age: 21 },
  { id: 2, name: "Hriday", age: 22 },
  { id: 3, name: "Raj", age: 23 },
];

const columns = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "age", title: "Age", dataIndex: "age", sortable: true },
];

// ✅ Create a typed alias
type DataTableUser = typeof DataTable<User>;

const meta: Meta<DataTableUser> = {
  title: "Components/DataTable",
  component: DataTable as DataTableUser,  // ✅ force generic binding
};
export default meta;

type Story = StoryObj<DataTableUser>;

export const Default: Story = {
  args: { data: users, columns, selectable: true },
};

export const Loading: Story = {
  args: { data: [], columns, loading: true },
};

export const Empty: Story = {
  args: { data: [], columns },
};


export const Loading: StoryObj<typeof DataTable<User>> = {
  args: { data: [], columns, loading: true },
};

export const Empty: StoryObj<typeof DataTable<User>> = {
  args: { data: [], columns },
};
