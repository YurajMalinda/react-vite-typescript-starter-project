# Template Usage Guide

This guide explains how to convert the React Vite TypeScript Starter Project into your own custom project.

## 🚀 Quick Start

### 1. Clone and Setup

```bash
# Clone the starter template
git clone <repository-url>
cd react-vite-typescript-starter-project

# Install dependencies
npm install

# Start development server
npm run dev
```

### 2. Rename Your Project

#### Update Package Configuration

```json
// package.json
{
  "name": "your-project-name",
  "version": "1.0.0",
  "description": "Your project description",
  "author": "Your Name",
  "license": "MIT"
}
```

#### Update HTML Title

```html
<!-- index.html -->
<title>Your Project Name</title>
```

#### Update README

```markdown
# Your Project Name

Your project description here...

## Features

- List your specific features
- Remove generic starter features
- Add project-specific functionality
```

## 📝 Essential Files to Customize

### 1. Project Identity Files

| File           | What to Change                       | Example                  |
| -------------- | ------------------------------------ | ------------------------ |
| `package.json` | Project name, version, description   | `"name": "my-react-app"` |
| `index.html`   | Page title, meta description         | `<title>My App</title>`  |
| `README.md`    | Project title, description, features | `# My React Application` |
| `LICENSE`      | License type if different            | MIT, Apache, etc.        |

### 2. Configuration Files

#### Environment Variables

```env
# .env
VITE_APP_NAME=Your App Name
VITE_API_BASE_URL=https://your-api.com
VITE_APP_VERSION=1.0.0
```

#### Vite Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Change default port
  },
  build: {
    outDir: "dist", // Change build output
  },
});
```

#### TypeScript Configuration

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "@/*": ["*"],
      "@components/*": ["components/*"],
      "@pages/*": ["pages/*"]
    }
  }
}
```

### 3. Source Code Customization

#### App Component

```typescript
// src/App.tsx
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Your App Name</h1>
        <p>Welcome to your new React application!</p>
      </header>
    </div>
  );
}

export default App;
```

#### Global Styles

```css
/* src/index.css */
:root {
  --primary-color: #your-brand-color;
  --secondary-color: #your-secondary-color;
  --font-family: "Your Font", sans-serif;
}

body {
  font-family: var(--font-family);
  background-color: var(--primary-color);
}
```

## 🎨 Branding and Theming

### 1. Colors and Typography

```css
/* src/styles/theme.css */
:root {
  /* Primary Colors */
  --primary-50: #eff6ff;
  --primary-500: #3b82f6;
  --primary-900: #1e3a8a;

  /* Secondary Colors */
  --secondary-50: #f0fdf4;
  --secondary-500: #22c55e;
  --secondary-900: #14532d;

  /* Neutral Colors */
  --gray-50: #f9fafb;
  --gray-500: #6b7280;
  --gray-900: #111827;

  /* Typography */
  --font-sans: "Inter", system-ui, sans-serif;
  --font-mono: "JetBrains Mono", monospace;

  /* Spacing */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  --spacing-xl: 2rem;
}
```

### 2. Logo and Assets

```bash
# Replace default assets
public/
├── favicon.ico          # Your app icon
├── logo.svg             # Your logo
└── images/
    ├── hero-bg.jpg      # Hero background
    └── brand-logo.png   # Brand logo
```

### 3. Component Theming

```typescript
// src/components/ui/Button/Button.tsx
import React from 'react';
import './Button.css';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  onClick
}) => {
  return (
    <button
      className={`btn btn-${variant} btn-${size}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
```

## 📁 Folder Structure Customization

### 1. Add Your Features

```bash
src/
├── features/           # Feature-based organization
│   ├── auth/          # Authentication feature
│   ├── dashboard/     # Dashboard feature
│   └── settings/      # Settings feature
├── shared/            # Shared components and utilities
│   ├── components/    # Shared UI components
│   ├── hooks/         # Shared custom hooks
│   └── utils/         # Shared utilities
└── app/               # App-level components
    ├── layout/        # Layout components
    ├── providers/     # Context providers
    └── routes/        # Routing configuration
```

### 2. Remove Unused Directories

```bash
# Remove if not needed
rm -rf src/components/charts/     # If no charts
rm -rf src/components/tables/     # If no tables
rm -rf src/pages/settings/        # If no settings page
```

## 🔧 Development Setup

### 1. Git Configuration

```bash
# Initialize new git repository
rm -rf .git
git init
git add .
git commit -m "Initial commit from starter template"

# Update .gitignore if needed
echo "node_modules/" >> .gitignore
echo ".env.local" >> .gitignore
```

### 2. Environment Setup

```bash
# Create environment files
cp .env.example .env.local
cp .env.example .env.development
cp .env.example .env.production
```

### 3. Dependencies

#### Add Project-Specific Dependencies

```bash
# Additional UI Libraries
npm install @headlessui/react @heroicons/react
npm install framer-motion
npm install react-hook-form @hookform/resolvers zod

# State Management
npm install zustand
npm install @tanstack/react-query

# Testing
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev vitest jsdom

# Additional Utilities
npm install date-fns lodash-es
npm install clsx class-variance-authority
```

#### Remove Unused Dependencies

```bash
# Remove if not needed
npm uninstall react-toastify
npm uninstall axios
npm uninstall @mui/material @emotion/react @emotion/styled
npm uninstall antd
npm uninstall tailwindcss @tailwindcss/vite
```

## 🚀 Deployment Configuration

### 1. Build Configuration

```typescript
// vite.config.ts
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
          utils: ["lodash", "date-fns"],
        },
      },
    },
  },
});
```

### 2. Environment Variables

```env
# .env.production
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_APP_ENV=production
VITE_APP_VERSION=1.0.0
```

### 3. Deployment Scripts

```json
// package.json
{
  "scripts": {
    "build:prod": "vite build --mode production",
    "preview:prod": "vite preview --port 4173",
    "deploy": "npm run build:prod && npm run preview:prod"
  }
}
```

## 📋 Checklist for Template Conversion

### ✅ Project Identity

- [ ] Update `package.json` name and description
- [ ] Change HTML title in `index.html`
- [ ] Update README with project details
- [ ] Replace default logo and favicon
- [ ] Update license if needed

### ✅ Configuration

- [ ] Set up environment variables
- [ ] Configure Vite settings
- [ ] Update TypeScript paths
- [ ] Set up ESLint rules
- [ ] Configure Prettier

### ✅ Styling and Branding

- [ ] Define brand colors in CSS variables
- [ ] Update typography settings
- [ ] Replace default assets
- [ ] Create component theme
- [ ] Set up responsive design

### ✅ Features and Structure

- [ ] Remove unused components
- [ ] Add project-specific features
- [ ] Organize folder structure
- [ ] Set up routing
- [ ] Configure state management

### ✅ Development Setup

- [ ] Initialize new git repository
- [ ] Set up environment files
- [ ] Install/remove dependencies
- [ ] Configure development tools
- [ ] Set up testing framework

### ✅ Deployment

- [ ] Configure build settings
- [ ] Set up CI/CD pipeline
- [ ] Configure hosting platform
- [ ] Set up monitoring
- [ ] Configure analytics

## 🎯 Best Practices

### 1. Gradual Migration

- Start with basic branding changes
- Add features incrementally
- Test thoroughly at each step
- Keep backups of original template

### 2. Code Organization

- Use consistent naming conventions
- Follow the established folder structure
- Document custom components
- Maintain type safety

### 3. Performance

- Optimize bundle size
- Implement code splitting
- Use lazy loading for routes
- Monitor performance metrics

### 4. Security

- Validate environment variables
- Sanitize user inputs
- Implement proper authentication
- Use HTTPS in production

## 🔍 Troubleshooting

### Common Issues

1. **Build Errors**

   ```bash
   # Clear cache and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **TypeScript Errors**

   ```bash
   # Check TypeScript configuration
   npx tsc --noEmit
   ```

3. **Styling Issues**
   ```bash
   # Clear CSS cache
   npm run dev -- --force
   ```

### Getting Help

- Check the [React Documentation](https://react.dev/)
- Review [Vite Configuration](https://vitejs.dev/config/)
- Consult [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

**Remember**: This starter template is designed to be flexible and customizable. Take your time to understand the structure before making changes, and always test your modifications thoroughly.
