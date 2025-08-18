# React UI Components Assignment

## 📝 Description of Approach

The goal of this assignment was to build **reusable React UI components** using **TypeScript, TailwindCSS, and Storybook** for documentation and testing.

### 📦 Component Design
- **DataTable**: Renders tabular data with dynamic rows/columns, sorting, and optional selection.
- **InputField**: Flexible input component with support for labels, placeholders, and validation states.

### 🎨 Styling
- Used **TailwindCSS** for consistent, utility-first styling.

### 📖 Documentation & Testing
- Integrated **Storybook** to visualize and test components in isolation.
- Added unit tests with **Vitest + React Testing Library** to ensure correctness.

### 🔁 Reusability & Scalability
- Components are modular and exported through `src/index.ts` for easy reusability.
- Designed with flexibility so they can be extended into a full design system.

### 🚀 Deployment
- Configured for deployment on **Vercel** (builds with Vite).
- Live demo:- [react-ui-components-assignment-tmug-8s3qo5fqu.vercel.app](https://react-ui-assignment-ashish.vercel.app/)

---

## ⚙️ Installation & Setup

Clone the repository:

```bash
git clone https://github.com/Ash1022004/react-ui-components-assignment.git
cd react-ui-components-assignment

## Install dependencies:
      npm install
##Run the development server:
      npm run dev


##📖 Storybook

To view components in isolation:
      npm run storybook

##📂 Folder Structure

.storybook/ # Storybook configuration
│ ├── main.ts
│ ├── preview.ts
│ └── tsconfig.json
│
src/
├── components/ # All reusable UI components
│ ├── DataTable/
│ │ ├── DataTable.tsx # DataTable component
│ │ ├── DataTable.stories.tsx # Storybook stories for DataTable
│ │ ├── DataTable.test.tsx # Unit tests for DataTable
│ │ └── index.ts # Exports for DataTable
│ │
│ ├── InputField/
│ │ ├── InputField.tsx # InputField component
│ │ ├── InputField.stories.tsx # Storybook stories for InputField
│ │ ├── InputField.test.tsx # Unit tests for InputField
│ │ └── index.ts # Exports for InputField
│
├── index.ts # Central export file for all components
│
README.md # Project documentation
package.json # Project dependencies & scripts
tailwind.config.js # TailwindCSS configuration
tsconfig.json # TypeScript configuration
vercel.json # Vercel deployment configuration
vite.config.ts # Vite bundler configuration
