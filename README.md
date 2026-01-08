# Anime A to Z

A modern React application for browsing and discovering anime series. Built with TypeScript, Vite, and Redux Toolkit.

## Features

- Browse anime series from A to Z
- View detailed information about each anime
- Search and filter anime
- Responsive design with Tailwind CSS
- Fast development with Vite and Hot Module Replacement

## Tech Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **State Management**: Redux Toolkit
- **Routing**: React Router DOM
- **Styling**: Tailwind CSS
- **Testing**: Vitest with React Testing Library
- **Mocking**: MSW (Mock Service Worker)

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd anime-atoz-onrender
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run test` - Run tests
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── feedback/       # Error and not found components
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── ui/             # Basic UI components (Card, Input)
├── features/
│   └── anime/          # Anime-related features
│       ├── components/ # Anime-specific components
│       ├── dtos/       # Data transfer objects
│       ├── mappers/    # Data mapping utilities
│       ├── models/     # TypeScript models
│       └── pages/      # Anime pages
├── hooks/              # Custom React hooks
├── pages/              # Main application pages
├── routes/             # Routing configuration
├── styles/             # Global styles
├── test/               # Test utilities and mocks
└── types/              # Global type definitions
```

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests: `npm run test`
5. Run linting: `npm run lint`
6. Commit your changes
7. Push to the branch
8. Open a Pull Request

## License

This project is private and not licensed for public use.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
globalIgnores(['dist']),
{
files: ['**/*.{ts,tsx}'],
extends: [
// Other configs...
// Enable lint rules for React
reactX.configs['recommended-typescript'],
// Enable lint rules for React DOM
reactDom.configs.recommended,
],
languageOptions: {
parserOptions: {
project: ['./tsconfig.node.json', './tsconfig.app.json'],
tsconfigRootDir: import.meta.dirname,
},
// other options...
},
},
])

```

```
