import { render, screen, fireEvent } from "@testing-library/react";
import { DataTable } from "./DataTable";

test("renders empty state", () => {
  render(<DataTable data={[]} columns={[{ key: "name", title: "Name", dataIndex: "name" }]} />);
  expect(screen.getByText("No data available")).toBeInTheDocument();
});

test("renders data rows", () => {
  const data = [{ id: 1, name: "Ashish" }];
  render(<DataTable data={data} columns={[{ key: "name", title: "Name", dataIndex: "name" }]} />);
  expect(screen.getByText("Ashish")).toBeInTheDocument();
});

test("handles row selection", () => {
  const data = [{ id: 1, name: "Ashish" }];
  render(
    <DataTable
      data={data}
      columns={[{ key: "name", title: "Name", dataIndex: "name" }]}
      selectable
    />
  );
  fireEvent.click(screen.getByRole("checkbox"));
  expect(screen.getByRole("checkbox")).toBeChecked();
});
