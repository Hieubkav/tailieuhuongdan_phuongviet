import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // TypeScript rules - warnings thay vì errors để không block build
      "@typescript-eslint/no-unused-vars": ["warn", {
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_"
      }],
      "@typescript-eslint/no-explicit-any": "warn",

      // React rules
      "react/no-unescaped-entities": "error",
      "react/jsx-key": "error",

      // Next.js rules
      "@next/next/no-img-element": "warn",

      // General code quality
      "prefer-const": "warn",
      "no-console": ["warn", { "allow": ["warn", "error"] }],

      // Import rules
      "import/order": ["warn", {
        "groups": [
          "builtin",
          "external",
          "internal",
          "parent",
          "sibling",
          "index"
        ],
        "newlines-between": "never"
      }]
    }
  }
];

export default eslintConfig;
