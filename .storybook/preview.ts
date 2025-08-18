import { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on.*" },
    controls: { expanded: true },
  },
};
export default preview;
