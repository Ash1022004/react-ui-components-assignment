import React, { useState } from "react";
import { DataTable, Column } from "./components/DataTable";
import { InputField } from "./components/InputField";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  status: string;
}

const sampleUsers: User[] = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin", status: "Active" },
  { id: 2, name: "Bob Smith", email: "bob@example.com", role: "Editor", status: "Active" },
  { id: 3, name: "Carol White", email: "carol@example.com", role: "Viewer", status: "Inactive" },
  { id: 4, name: "David Brown", email: "david@example.com", role: "Editor", status: "Active" },
  { id: 5, name: "Eva Martinez", email: "eva@example.com", role: "Admin", status: "Active" },
];

const columns: Column<User>[] = [
  { key: "name", title: "Name", dataIndex: "name", sortable: true },
  { key: "email", title: "Email", dataIndex: "email", sortable: true },
  { key: "role", title: "Role", dataIndex: "role", sortable: true },
  { key: "status", title: "Status", dataIndex: "status", sortable: false },
];

export function App() {
  const [inputValue, setInputValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [selectedRows, setSelectedRows] = useState<User[]>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <h1 className="text-3xl font-bold text-slate-900">React UI Components</h1>
          <p className="text-slate-600 mt-1">A collection of reusable, accessible components</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* InputField Section */}
        <section className="mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
              <h2 className="text-xl font-semibold text-slate-900">InputField Component</h2>
              <p className="text-slate-600 text-sm mt-1">
                Flexible input with multiple variants, sizes, and states
              </p>
            </div>

            <div className="p-6 space-y-8">
              {/* Variants */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Outlined"
                    variant="outlined"
                    placeholder="Default variant"
                    helperText="Standard outlined input"
                  />
                  <InputField
                    label="Filled"
                    variant="filled"
                    placeholder="Filled variant"
                    helperText="With background fill"
                  />
                  <InputField
                    label="Ghost"
                    variant="ghost"
                    placeholder="Ghost variant"
                    helperText="Minimal, borderless style"
                  />
                </div>
              </div>

              {/* Sizes */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">Sizes</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Small"
                    size="sm"
                    placeholder="Small input"
                  />
                  <InputField
                    label="Medium"
                    size="md"
                    placeholder="Medium input"
                  />
                  <InputField
                    label="Large"
                    size="lg"
                    placeholder="Large input"
                  />
                </div>
              </div>

              {/* States */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">States</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <InputField
                    label="Disabled"
                    disabled
                    value="Cannot edit"
                    helperText="Input is disabled"
                  />
                  <InputField
                    label="With Error"
                    invalid
                    errorMessage="This field is required"
                    placeholder="Invalid input"
                  />
                  <InputField
                    label="Loading"
                    loading
                    placeholder="Loading..."
                    helperText="Fetching data..."
                  />
                </div>
              </div>

              {/* Interactive */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">Interactive Examples</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InputField
                    label="Text Input"
                    placeholder="Type something..."
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    helperText={inputValue ? `You typed: "${inputValue}"` : "Start typing to see the value"}
                  />
                  <InputField
                    label="Password"
                    type="password"
                    placeholder="Enter password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                    helperText="Click Show/Hide to toggle visibility"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DataTable Section */}
        <section>
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
              <h2 className="text-xl font-semibold text-slate-900">DataTable Component</h2>
              <p className="text-slate-600 text-sm mt-1">
                Sortable, selectable table with flexible column configuration
              </p>
            </div>

            <div className="p-6 space-y-8">
              {/* Basic Table */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">Basic Table</h3>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <DataTable data={sampleUsers} columns={columns} />
                </div>
              </div>

              {/* Selectable Table */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">
                  Multi-Select Table
                  {selectedRows.length > 0 && (
                    <span className="ml-2 text-blue-600 font-normal">
                      ({selectedRows.length} selected)
                    </span>
                  )}
                </h3>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <DataTable
                    data={sampleUsers}
                    columns={columns}
                    selectable
                    onRowSelect={setSelectedRows}
                  />
                </div>
                {selectedRows.length > 0 && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-lg text-sm text-blue-800">
                    Selected: {selectedRows.map((r) => r.name).join(", ")}
                  </div>
                )}
              </div>

              {/* Single Select Table */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">Single-Select Table</h3>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <DataTable
                    data={sampleUsers.slice(0, 3)}
                    columns={columns}
                    selectable="single"
                  />
                </div>
              </div>

              {/* Loading State */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">Loading State</h3>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <DataTable data={[]} columns={columns} loading />
                </div>
              </div>

              {/* Empty State */}
              <div>
                <h3 className="text-sm font-medium text-slate-700 mb-4">Empty State</h3>
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  <DataTable data={[]} columns={columns} />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 text-center text-slate-600 text-sm">
          Built with React, TypeScript, and Tailwind CSS
        </div>
      </footer>
    </div>
  );
}
