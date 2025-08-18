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

const meta: Meta<typeof DataTable<User>> = {
  title: "Components/DataTable",
  component: DataTable<User>,
};
export default meta;

export const Default: StoryObj<typeof DataTable<User>> = {
  args: { data: users, columns, selectable: true },
};

export const Loading: StoryObj<typeof DataTable<User>> = {
  args: { data: [], columns, loading: true },
};

export const Empty: StoryObj<typeof DataTable<User>> = {
  args: { data: [], columns },
};
