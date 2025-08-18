import React, { useState } from "react";

export interface Column<T> {
  key: string;
  title: string;
  dataIndex: keyof T;
  sortable?: boolean;
}

export interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  loading?: boolean;
  selectable?: boolean | "single";
  onRowSelect?: (selectedRows: T[]) => void;
}

export function DataTable<T extends { id: string | number }>({
  data,
  columns,
  loading,
  selectable,
  onRowSelect,
}: DataTableProps<T>) {
  const [selectedRows, setSelectedRows] = useState<T[]>([]);
  const [sortKey, setSortKey] = useState<string | null>(null);
  const [asc, setAsc] = useState(true);

  const handleSort = (key: string) => {
    setAsc(sortKey === key ? !asc : true);
    setSortKey(key);
  };

  const handleSelect = (row: T) => {
    let updated;
    if (selectedRows.includes(row)) {
      updated = selectedRows.filter(r => r !== row);
    } else {
      updated = selectable === "single" ? [row] : [...selectedRows, row];
    }
    setSelectedRows(updated);
    onRowSelect?.(updated);
  };

  const sortedData = sortKey
    ? [...data].sort((a, b) => {
        if (a[sortKey as keyof T] < b[sortKey as keyof T]) return asc ? -1 : 1;
        if (a[sortKey as keyof T] > b[sortKey as keyof T]) return asc ? 1 : -1;
        return 0;
      })
    : data;

  if (loading) return <div className="p-4">Loading...</div>;
  if (!data.length) return <div className="p-4 text-gray-500">No data available</div>;

  return (
    <table className="w-full border-collapse border border-gray-300">
      <thead>
        <tr>
          {selectable && <th className="p-2 border">Select</th>}
          {columns.map(col => (
            <th
              key={col.key}
              onClick={() => col.sortable && handleSort(col.key)}
              className={`p-2 border cursor-${col.sortable ? "pointer" : "default"}`}
            >
              {col.title} {col.sortable && (sortKey === col.key ? (asc ? "▲" : "▼") : "↕")}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(row => (
          <tr key={row.id} className="hover:bg-gray-50">
            {selectable && (
              <td className="p-2 border">
                <input
                  type={selectable === "single" ? "radio" : "checkbox"}
                  checked={selectedRows.includes(row)}
                  onChange={() => handleSelect(row)}
                />
              </td>
            )}
            {columns.map(col => (
              <td key={col.key} className="p-2 border">
                {String(row[col.dataIndex])}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
