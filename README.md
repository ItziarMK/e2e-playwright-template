# E2E Testing Template with Playwright

This template provides a foundation for end-to-end testing using Playwright. It includes basic setup, configuration, and example tests to help you get started quickly with E2E testing for any web application.

## Prerequisites

- Node.js (version specified in .nvmrc)
- pnpm package manager

## Setup

1. Clone this repository
2. Install dependencies:
   ```bash
   pnpm install
   ```
3. Install browsers:
   ```bash
   pnpm install:browsers
   ```
4. Copy the environment template:
   ```bash
   cp .env.example .env
   ```
5. Update the `.env` file with your configuration

## Project Structure

## Code Quality Tools

### ESLint

The project uses ESLint for static code analysis. Available commands:

- `pnpm lint` - Check for linting issues
- `pnpm lint:fix` - Fix automatic linting issues

### Prettier

Prettier is configured for consistent code formatting. Available commands:

- `pnpm format` - Format all files
- `pnpm format:check` - Check if files are formatted correctly

### Pre-commit Hooks (Optional)

You can set up pre-commit hooks using husky and lint-staged to automatically format and lint your code before commits.
