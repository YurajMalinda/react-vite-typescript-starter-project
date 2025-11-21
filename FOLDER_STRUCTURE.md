# React Vite TypeScript Starter Project - Folder Structure

This document outlines the folder structure for the React Vite TypeScript Starter Project.

## 📁 Root Directory Structure

```
react-vite-typescript-starter-project/
├── public/                 # Static assets
│   └── vite.svg           # Vite logo
├── src/                    # Source code
│   ├── components/         # Reusable components
│   ├── pages/             # Page components
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── services/          # API services
│   ├── types/             # TypeScript type definitions
│   ├── constants/         # Application constants
│   ├── styles/            # CSS/SCSS files
│   ├── context/           # React Context providers
│   ├── assets/            # Images and icons
│   ├── App.tsx            # Main App component
│   ├── App.css            # App styles
│   ├── main.tsx           # Application entry point
│   ├── index.css          # Global styles
│   └── vite-env.d.ts      # Vite environment types
├── docs/                   # Documentation
│   ├── API_INTEGRATION.md # API integration guide
│   └── COMPONENT_GUIDELINES.md # Component development guidelines
├── package.json            # Dependencies and scripts
├── package-lock.json       # Locked dependencies
├── tsconfig.json           # TypeScript configuration
├── tsconfig.app.json       # App-specific TypeScript config
├── tsconfig.node.json      # Node-specific TypeScript config
├── vite.config.ts          # Vite configuration
├── eslint.config.js        # ESLint configuration
├── README.md              # Project documentation
├── FOLDER_STRUCTURE.md    # This file
└── LICENSE                # Project license
```

## 📂 Detailed Component Structure

### Components Directory (`src/components/`)

```
components/
├── ui/                    # Basic UI components
│   ├── buttons/          # Button components
│   ├── cards/            # Card components
│   ├── inputs/           # Input components
│   └── modals/           # Modal components
├── layout/               # Layout components
│   ├── header/           # Header components
│   ├── sidebar/          # Sidebar components
│   └── footer/           # Footer components
├── forms/                # Form components
├── charts/               # Chart components
└── tables/               # Table components
```

### Pages Directory (`src/pages/`)

```
pages/
├── auth/                 # Authentication pages
│   ├── login/           # Login page
│   └── register/        # Registration page
├── dashboard/            # Dashboard pages
├── users/               # User management pages
└── settings/            # Settings pages
```

### Assets Directory (`src/assets/`)

```
assets/
├── images/              # Image files
└── icons/               # Icon files
```

## 🎯 Purpose of Each Directory

### Core Directories

- **`src/`**: Main source code directory
- **`public/`**: Static assets served directly
- **`docs/`**: Project documentation

### Source Code Organization

- **`components/`**: Reusable UI components organized by type
- **`pages/`**: Page-level components for routing
- **`hooks/`**: Custom React hooks for shared logic
- **`utils/`**: Utility functions and helpers
- **`services/`**: API calls and external service integrations
- **`types/`**: TypeScript type definitions
- **`constants/`**: Application constants and configuration
- **`styles/`**: Global styles and theme definitions
- **`context/`**: React Context providers for state management
- **`assets/`**: Images, icons, and other static assets

### Configuration Files

- **`package.json`**: Project dependencies and scripts
- **`tsconfig.json`**: TypeScript configuration
- **`vite.config.ts`**: Vite build tool configuration
- **`eslint.config.js`**: Code linting rules

## 📝 File Naming Conventions

- **Components**: PascalCase (e.g., `UserCard.tsx`)
- **Hooks**: camelCase with `use` prefix (e.g., `useAuth.ts`)
- **Utils**: camelCase (e.g., `formatDate.ts`)
- **Types**: camelCase (e.g., `userTypes.ts`)
- **Constants**: UPPER_SNAKE_CASE (e.g., `API_ENDPOINTS.ts`)
- **Directories**: kebab-case (e.g., `user-profile/`)

## 🔧 Best Practices

1. **Component Organization**: Group related components in subdirectories
2. **Type Safety**: Use TypeScript interfaces for all component props
3. **Code Splitting**: Organize code for easy lazy loading
4. **Consistent Structure**: Follow the established patterns for new features
5. **Documentation**: Keep documentation up to date with code changes

This structure provides a scalable foundation for building React applications with TypeScript and Vite.
