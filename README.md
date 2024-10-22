# Vite React TypeScript Starter

This project is set up to use **React 18**, **TypeScript**, and **Vite**, along with additional tools like **ESLint**, **Prettier**, and **Vitest**. This guide provides an overview of the project's setup and available scripts.

## Project Setup

This project includes:

- **React 18.3.1**
- **Vite** for fast development with HMR
- **ESLint** for maintaining consistent and error-free code
- **Prettier** for code formatting
- **Vitest** for testing

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd molesgame
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Scripts

The following scripts are available to assist with development:

- **`npm run dev`**: Starts the Vite development server.
- **`npm run build`**: Compiles the TypeScript code and builds the project.
- **`npm run lint`**: Runs ESLint to check for code issues.
- **`npm run format`**: Formats the code using Prettier.
- **`npm run preview`**: Previews the production build.
- **`npm run test`**: Runs tests with Vitest, including type checking.
- **`npm run test:watch`**: Watches for changes and reruns tests automatically.
- **`npm run test:husky`**: Runs tests before pushing changes.

### Testing

This project uses **Vitest** for testing. You can write tests in the `__tests__` directory. Ensure that your tests are running correctly by using the following commands:

- **Run all tests**:

  ```bash
  npm run test
  ```

- **Run tests in watch mode**:
  ```bash
  npm run test:watch
  ```

### Prettier Configuration

For code formatting with Prettier, ensure you have a `.prettierrc` file in your project root. Here’s a basic example:

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5"
}
```

### Conclusion

This setup provides a solid foundation for building applications using React and TypeScript with Vite. You can further customize the configurations according to your project needs. Happy coding!
