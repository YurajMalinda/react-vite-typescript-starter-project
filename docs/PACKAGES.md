# Package Documentation

This document provides detailed information about all packages included in the React Vite TypeScript Starter Project, their configuration, and usage examples.

## 📦 Package Overview

### Core Dependencies

| Package            | Version | Purpose             | Documentation                                               |
| ------------------ | ------- | ------------------- | ----------------------------------------------------------- |
| `react`            | ^19.1.0 | React core library  | [React Docs](https://react.dev/)                            |
| `react-dom`        | ^19.1.0 | React DOM rendering | [React DOM](https://react.dev/reference/react-dom)          |
| `react-router-dom` | ^7.7.1  | Client-side routing | [React Router](https://reactrouter.com/)                    |
| `axios`            | ^1.11.0 | HTTP client         | [Axios](https://axios-http.com/)                            |
| `react-toastify`   | ^11.0.5 | Toast notifications | [React Toastify](https://fkhadra.github.io/react-toastify/) |

### UI Libraries

| Package             | Version  | Purpose                | Documentation                                             |
| ------------------- | -------- | ---------------------- | --------------------------------------------------------- |
| `@mui/material`     | ^7.2.0   | Material-UI components | [MUI Docs](https://mui.com/)                              |
| `@emotion/react`    | ^11.14.0 | CSS-in-JS styling      | [Emotion](https://emotion.sh/)                            |
| `@emotion/styled`   | ^11.14.1 | Styled components      | [Emotion Styled](https://emotion.sh/docs/styled)          |
| `antd`              | ^5.26.7  | Ant Design components  | [Ant Design](https://ant.design/)                         |
| `tailwindcss`       | ^4.1.11  | Utility-first CSS      | [Tailwind CSS](https://tailwindcss.com/)                  |
| `@tailwindcss/vite` | ^4.1.11  | Tailwind Vite plugin   | [Tailwind Vite](https://tailwindcss.com/docs/guides/vite) |

### Development Dependencies

| Package                | Version | Purpose               | Documentation                                        |
| ---------------------- | ------- | --------------------- | ---------------------------------------------------- |
| `typescript`           | ~5.8.3  | TypeScript compiler   | [TypeScript](https://www.typescriptlang.org/)        |
| `vite`                 | ^7.0.4  | Build tool            | [Vite](https://vitejs.dev/)                          |
| `@vitejs/plugin-react` | ^4.6.0  | React plugin for Vite | [Vite React](https://vitejs.dev/plugins/)            |
| `eslint`               | ^9.30.1 | Code linting          | [ESLint](https://eslint.org/)                        |
| `prettier`             | 3.6.2   | Code formatting       | [Prettier](https://prettier.io/)                     |
| `husky`                | ^9.1.7  | Git hooks             | [Husky](https://typicode.github.io/husky/)           |
| `lint-staged`          | ^16.1.2 | Pre-commit linting    | [lint-staged](https://github.com/okonet/lint-staged) |

## 🎨 UI Library Configuration

### Material-UI (MUI) Setup

#### Theme Configuration

```typescript
// src/theme/mui-theme.ts
import { createTheme } from "@mui/material/styles";

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
    },
    secondary: {
      main: "#dc004e",
      light: "#ff5983",
      dark: "#9a0036",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 500,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
  },
});
```

#### Theme Provider Setup

```typescript
// src/App.tsx
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { muiTheme } from './theme/mui-theme';

function App() {
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />
      {/* Your app content */}
    </ThemeProvider>
  );
}
```

#### Component Usage Examples

```typescript
// src/components/ui/MUIComponents.tsx
import React from 'react';
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Box,
  Grid,
} from '@mui/material';

export const MUIExample: React.FC = () => {
  return (
    <Box sx={{ p: 3 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Material-UI Card
              </Typography>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
              />
              <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                Submit
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};
```

### Ant Design Setup

#### Theme Configuration

```typescript
// src/theme/antd-theme.ts
import { theme } from "antd";

export const antdTheme = {
  algorithm: theme.defaultAlgorithm,
  token: {
    colorPrimary: "#1890ff",
    borderRadius: 6,
    fontFamily: '"Inter", -apple-system, BlinkMacSystemFont, sans-serif',
  },
  components: {
    Button: {
      borderRadius: 6,
    },
    Card: {
      borderRadius: 8,
    },
  },
};
```

#### Theme Provider Setup

```typescript
// src/App.tsx
import { ConfigProvider } from 'antd';
import { antdTheme } from './theme/antd-theme';

function App() {
  return (
    <ConfigProvider theme={antdTheme}>
      {/* Your app content */}
    </ConfigProvider>
  );
}
```

#### Component Usage Examples

```typescript
// src/components/ui/AntComponents.tsx
import React from 'react';
import { Button, Input, Card, Typography, Row, Col, Space } from 'antd';

const { Title, Paragraph } = Typography;

export const AntExample: React.FC = () => {
  return (
    <Row gutter={[16, 16]}>
      <Col xs={24} md={12}>
        <Card title="Ant Design Card">
          <Space direction="vertical" style={{ width: '100%' }}>
            <Input placeholder="Enter your email" />
            <Button type="primary" block>
              Submit
            </Button>
          </Space>
        </Card>
      </Col>
    </Row>
  );
};
```

### Tailwind CSS Configuration

#### Configuration File

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#eff6ff",
          500: "#3b82f6",
          900: "#1e3a8a",
        },
        secondary: {
          50: "#f0fdf4",
          500: "#22c55e",
          900: "#14532d",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
```

#### Usage Examples

```typescript
// src/components/ui/TailwindComponents.tsx
import React from 'react';

export const TailwindExample: React.FC = () => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Tailwind CSS
          </div>
          <p className="mt-2 text-slate-500">
            A utility-first CSS framework for rapid UI development.
          </p>
          <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Click me
          </button>
        </div>
      </div>
    </div>
  );
};
```

## 🛣️ Routing Configuration

### React Router Setup

```typescript
// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/dashboard/Dashboard';
import { Users } from './pages/users/Users';
import { Settings } from './pages/settings/Settings';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </Layout>
    </Router>
  );
}
```

### Navigation Component

```typescript
// src/components/layout/Navigation.tsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Dashboard, People, Settings } from '@mui/icons-material';

export const Navigation: React.FC = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/', label: 'Dashboard', icon: <Dashboard /> },
    { path: '/users', label: 'Users', icon: <People /> },
    { path: '/settings', label: 'Settings', icon: <Settings /> },
  ];

  return (
    <List>
      {menuItems.map((item) => (
        <ListItem
          key={item.path}
          component={Link}
          to={item.path}
          selected={location.pathname === item.path}
          sx={{
            '&.Mui-selected': {
              backgroundColor: 'primary.light',
            },
          }}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.label} />
        </ListItem>
      ))}
    </List>
  );
};
```

## 🌐 HTTP Client Configuration

### Axios Setup

```typescript
// src/services/api/client.ts
import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:3000/api";

export const apiClient = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
apiClient.interceptors.request.use(
  config => {
    const token = localStorage.getItem("authToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

// Response interceptor
apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);
```

### API Service Example

```typescript
// src/services/users/userService.ts
import { apiClient } from "../api/client";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "admin" | "user";
}

export class UserService {
  static async getUsers(): Promise<User[]> {
    const response = await apiClient.get("/users");
    return response.data;
  }

  static async createUser(userData: Omit<User, "id">): Promise<User> {
    const response = await apiClient.post("/users", userData);
    return response.data;
  }

  static async updateUser(id: string, userData: Partial<User>): Promise<User> {
    const response = await apiClient.put(`/users/${id}`, userData);
    return response.data;
  }

  static async deleteUser(id: string): Promise<void> {
    await apiClient.delete(`/users/${id}`);
  }
}
```

## 🔔 Toast Notifications

### React Toastify Setup

```typescript
// src/components/ui/ToastContainer.tsx
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AppToastContainer: React.FC = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
  );
};
```

### Toast Usage Examples

```typescript
// src/hooks/useToast.ts
import { toast } from "react-toastify";

export const useToast = () => {
  const showSuccess = (message: string) => {
    toast.success(message);
  };

  const showError = (message: string) => {
    toast.error(message);
  };

  const showInfo = (message: string) => {
    toast.info(message);
  };

  const showWarning = (message: string) => {
    toast.warning(message);
  };

  return { showSuccess, showError, showInfo, showWarning };
};
```

## 🎨 Styling Best Practices

### Combining UI Libraries

```typescript
// src/components/ui/HybridComponent.tsx
import React from 'react';
import { Button as MuiButton } from '@mui/material';
import { Button as AntButton } from 'antd';

// Use MUI for complex forms
export const MUIForm: React.FC = () => {
  return (
    <div className="p-4 bg-gray-50 rounded-lg">
      <MuiButton variant="contained" color="primary">
        MUI Button
      </MuiButton>
    </div>
  );
};

// Use Ant Design for data tables
export const AntTable: React.FC = () => {
  return (
    <div className="shadow-lg rounded-lg">
      <AntButton type="primary">
        Ant Design Button
      </AntButton>
    </div>
  );
};

// Use Tailwind for custom layouts
export const CustomLayout: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900">Custom Layout</h1>
      <div className="space-x-4">
        <MuiButton variant="outlined">MUI</MuiButton>
        <AntButton>Ant Design</AntButton>
      </div>
    </div>
  );
};
```

## 🔧 Development Tools

### ESLint Configuration

```javascript
// eslint.config.js
import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";

export default tseslint.config(
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      "react-hooks/rules-of-hooks": "error",
      "react-hooks/exhaustive-deps": "warn",
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
    },
  }
);
```

### Prettier Configuration

```json
// .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false
}
```

### Husky Configuration

```json
// package.json
{
  "lint-staged": {
    "*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],
    "*.{json,css,md,html}": ["prettier --write"]
  }
}
```

## 📋 Package Management

### Adding New Packages

```bash
# UI Libraries
npm install @headlessui/react @heroicons/react
npm install framer-motion
npm install react-hook-form @hookform/resolvers zod

# State Management
npm install zustand
npm install @tanstack/react-query

# Testing
npm install --save-dev @testing-library/react @testing-library/jest-dom
npm install --save-dev vitest jsdom
```

### Removing Unused Packages

```bash
# Remove packages you don't need
npm uninstall react-toastify
npm uninstall axios
```

### Updating Packages

```bash
# Check for outdated packages
npm outdated

# Update all packages
npm update

# Update specific package
npm install package-name@latest
```

## 🚀 Performance Optimization

### Bundle Analysis

```bash
# Install bundle analyzer
npm install --save-dev rollup-plugin-visualizer

# Add to vite.config.ts
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: 'dist/stats.html',
      open: true,
    }),
  ],
});
```

### Code Splitting

```typescript
// Lazy load components
import { lazy, Suspense } from 'react';

const Dashboard = lazy(() => import('./pages/dashboard/Dashboard'));
const Users = lazy(() => import('./pages/users/Users'));

// Use with Suspense
<Suspense fallback={<div>Loading...</div>}>
  <Dashboard />
</Suspense>
```

---

**Remember**: This starter project includes multiple UI libraries to give you flexibility. Choose the one that best fits your project needs, or use them together for different components.
