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
   git clone https://github.com/atiqmdaud/anime-atoz-ver2
   cd anime-atoz-ver2
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:4000](http://localhost:4000) in your browser.

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests

## Project Structure

```
src/
├── App.css
├── App.tsx
├── hooks.ts
├── index.css
├── main.tsx
├── store.ts            # Redux store configuration
├── assets/
├── components/          # Reusable UI components
│   ├── feedback/       # Error and not found components
│   ├── layout/         # Layout components (Navbar, Footer)
│   └── ui/             # Basic UI components (Card, Input)
├── features/
│   └── anime/          # Anime-related features
│       ├── animeApi.ts
│       ├── animeSlice.ts
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

## License

This project is private and not licensed for public use.
