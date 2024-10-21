import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import typescriptEslintParser from '@typescript-eslint/parser';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import prettierConfig from 'eslint-config-prettier'; // Prettier as config

export default [
  {
    ignores: [
      '*.css',
      '*.scss',
      '*.svg',
      '*.otf',
      '*.json',
      '*.png',
      '*.config.js',
      '*.config.ts',
      'cypress/*',
      'public/*',
      'node_modules/*',
      'src/__test__/config',
      '*sw.js',
      'dist/*'
    ],
  },
  {
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: typescriptEslintParser,
    },
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    linterOptions: {
      reportUnusedDisableDirectives: true, // Para advertir sobre directivas no usadas
    },
    rules: {
      ...typescriptEslintPlugin.configs.recommended.rules, // Reglas de TypeScript
      ...reactHooks.configs.recommended.rules, // Reglas de React Hooks
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      ...prettierConfig.rules, // Reglas de Prettier para mantener formato de código
    },
  },
];
