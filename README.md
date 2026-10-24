# Express + TypeScript Template

![Node.js](https://img.shields.io/badge/Node.js-20+-339933?style=flat&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express-5.x-000000?style=flat&logo=express&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=flat&logo=typescript&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat)

A minimal and modern starter template for building production-ready Express APIs using TypeScript and native ECMAScript Modules (ESM).

## Features

- **Express 5**: Native async error handling with decoupled application setup for easy testing.
- **TypeScript & ESM**: Strict type checking with `NodeNext` resolution and fast development reloads via `tsx`.
- **Native Environment Variables**: Zero extra dependencies, powered by Node.js built-in `--env-file` flag.
- **Runtime Validation**: Request payload parsing and validation with Zod.
- **Security Essentials**: Secure HTTP headers via Helmet, configurable CORS, and rate limiting with `express-rate-limit`.
- **Response Compression**: Gzip/Brotli payload compression with `compression`.
- **Structured Logging**: High-performance JSON logging with Pino and `pino-http`.
- **Testing Setup**: Fast in-memory integration testing using Vitest and Supertest.
- **Git Hooks**: Pre-commit linting and testing with Husky, plus commit message validation via Commitlint.

## Requirements

- Node.js >= 20.6.0 (required for native `--env-file` support).

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Set up your local environment file:
```bash
cp .env.example .env
```

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `PORT` | Port number the server listens on | `8080` |
| `CORS_ORIGIN` | Allowed CORS origins (comma-separated for multiples) | `http://localhost:3000` |
| `LOG_LEVEL` | Pino log level (`info`, `debug`, `error`, etc.) | `info` |

## Available Scripts

- `npm run dev`: Starts the local development server with watch mode (`tsx`).
- `npm run build`: Compiles TypeScript files into the `dist/` directory.
- `npm start`: Runs the compiled production server.
- `npm test`: Runs automated test suites using Vitest.
- `npm run lint`: Checks code quality with ESLint.
- `npm run format`: Formats code files using Prettier.
- `npm run prepare`: Initializes Husky Git hooks.

## Project Structure

```text
src/
├── app/                  # Route definitions and handlers
│   ├── app.route.ts
│   └── health.route.ts
├── configs/              # Server, CORS, logger, and response configurations
│   ├── configs.ts
│   ├── logger.ts
│   └── response.format.ts
├── handlers/             # Global error and 404 middlewares
│   ├── error.handler.ts
│   └── not-found.handler.ts
├── app.ts                # Express application configuration and middlewares
└── main.ts               # HTTP server entry point and port listener
tests/                    # Automated integration tests
├── app.test.ts
└── health.test.ts
```

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

