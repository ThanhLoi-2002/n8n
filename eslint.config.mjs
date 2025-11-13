// .eslintrc.js
import { defineConfig } from "eslint-define-config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig({
  extends: [
    // Kế thừa cấu hình từ next.js
    ...nextVitals,
    ...nextTs,
  ],
  ignorePatterns: [
    // Override default ignores của eslint-config-next
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ],
  rules: {
    // Thêm các quy tắc tùy chỉnh tại đây
    '@typescript-eslint/no-explicit-any': 'off', // Ví dụ: tắt cảnh báo về any
  },
});

export default eslintConfig;