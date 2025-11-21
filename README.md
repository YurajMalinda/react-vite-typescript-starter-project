# React Vite TypeScript Starter Project

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19.1.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?logo=typescript)
![Vite](https://img.shields.io/badge/Vite-7.0.4-646CFF?logo=vite)
![Node](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen?logo=node.js)

A modern, well-structured starter template for React applications built with TypeScript and Vite. This project provides a solid foundation for building scalable React applications with best practices and organized folder structure.

## 🚀 Quick Start

Want to use this template? Here's how:

### Option 1: Use as GitHub Template (Recommended)

1. Click the **"Use this template"** button on GitHub
2. Create a new repository from this template
3. Clone your new repository:
   ```bash
   git clone <your-repository-url>
   cd <your-project-name>
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Start developing:
   ```bash
   npm run dev
   ```

### Option 2: Clone Directly

```bash
# Clone the repository
git clone <repository-url>
cd react-vite-typescript-starter-project

# Install dependencies
npm install

# Start development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## 🚀 Features

- **Modern React 19** with TypeScript for type safety
- **Vite** for fast development and building
- **Responsive Design** that works on all devices
- **Component-Based Architecture** for maintainable code
- **TypeScript** for better development experience
- **ESLint** for code quality and consistency
- **Organized Folder Structure** following best practices
- **Ready-to-use component structure** for UI development
- **Multiple UI Libraries** - Material-UI and Ant Design included
- **Routing** with React Router DOM
- **HTTP Client** with Axios for API calls
- **Toast Notifications** with React Toastify
- **Styling** with Tailwind CSS and Emotion

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Language**: TypeScript
- **Build Tool**: Vite
- **Package Manager**: npm
- **Code Quality**: ESLint + Prettier
- **Styling**:
  - Tailwind CSS
  - Material-UI (MUI)
  - Ant Design
  - Emotion (CSS-in-JS)
- **Routing**: React Router DOM
- **HTTP Client**: Axios
- **Notifications**: React Toastify
- **Git Hooks**: Husky + lint-staged

## 📦 Included Packages

### UI Libraries

- **Material-UI (MUI)**: Comprehensive React component library
- **Ant Design**: Enterprise-level UI design language
- **Tailwind CSS**: Utility-first CSS framework
- **Emotion**: CSS-in-JS styling solution

### Core Dependencies

- **React Router DOM**: Client-side routing
- **Axios**: HTTP client for API calls
- **React Toastify**: Toast notification system

### Development Tools

- **TypeScript**: Static type checking
- **ESLint**: Code linting and formatting
- **Prettier**: Code formatting
- **Husky**: Git hooks
- **lint-staged**: Pre-commit linting

## 📁 Project Structure

```
react-vite-typescript-starter-project/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── components/         # Reusable components
│   │   ├── ui/            # UI components (buttons, cards, etc.)
│   │   ├── layout/        # Layout components (sidebar, header, footer)
│   │   ├── forms/         # Form components
│   │   ├── charts/        # Chart components
│   │   └── tables/        # Table components
│   ├── pages/             # Page components
│   │   ├── dashboard/     # Dashboard page
│   │   ├── users/         # Users management
│   │   ├── settings/      # Settings page
│   │   └── auth/          # Authentication pages
│   ├── hooks/             # Custom React hooks
│   ├── utils/             # Utility functions
│   ├── services/          # API services
│   ├── types/             # TypeScript type definitions
│   ├── constants/         # Application constants
│   ├── styles/            # CSS/SCSS files
│   ├── context/           # React Context providers
│   └── assets/            # Images and icons
├── package.json           # Dependencies and scripts
├── tsconfig.json          # TypeScript configuration
├── vite.config.ts         # Vite configuration
└── README.md             # Project documentation
```

For detailed folder structure information, see [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md).

## 📦 Installation & Setup

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** (comes with Node.js) or **yarn** or **pnpm**

### Step-by-Step Setup

1. **Get the template**
   - Use the "Use this template" button on GitHub, OR
   - Clone the repository: `git clone <repository-url>`

2. **Navigate to project directory**
   ```bash
   cd react-vite-typescript-starter-project
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   - Navigate to [http://localhost:5173](http://localhost:5173)
   - You should see the app running with example components

### Next Steps

After installation, you can:

- **Explore the example component**: Check `src/components/ui/buttons/ExampleButton.tsx` to see how to use different UI libraries
- **Read the documentation**: See the [Documentation](#-documentation) section below
- **Start building**: Begin creating your components in the organized folder structure
- **Customize**: Update `package.json` name, remove unused UI libraries if needed, and configure your project

## 🎯 After Installation - What's Next?

### 1. Customize Your Project

- **Update `package.json`**: Change the project name, description, and author
- **Update `README.md`**: Replace template information with your project details
- **Configure environment**: Set up your API endpoints and environment variables

### 2. Choose Your UI Library

This template includes three UI libraries. You can:
- **Use all of them** (as shown in the example component)
- **Remove unused ones** to reduce bundle size:
  ```bash
  # Remove Material-UI
  npm uninstall @mui/material @emotion/react @emotion/styled
  
  # Remove Ant Design
  npm uninstall antd
  
  # Remove Tailwind CSS
  npm uninstall tailwindcss @tailwindcss/vite
  ```

### 3. Start Building

- Create components in `src/components/`
- Add pages in `src/pages/`
- Set up routing with React Router in `src/App.tsx`
- Configure API services in `src/services/`
- Add custom hooks in `src/hooks/`

### 4. Remove Example Code (Optional)

Once you understand the structure, you can remove:
- `src/components/ui/buttons/ExampleButton.tsx` (example component)
- Example button usage from `src/App.tsx`

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run lint:fix` - Fix ESLint issues
- `npm run format` - Format code with Prettier
- `npm run format:check` - Check code formatting

## 🎨 UI Library Usage

### Example Component

This template includes an example button component (`src/components/ui/buttons/ExampleButton.tsx`) that demonstrates how to use all three UI libraries. Check `src/App.tsx` to see it in action!

### Material-UI (MUI)

```typescript
import { Button, TextField, Card } from '@mui/material';

// Use MUI components
<Button variant="contained" color="primary">
  Click me
</Button>
```

### Ant Design

```typescript
import { Button, Input, Card } from 'antd';

// Use Ant Design components
<Button type="primary">
  Click me
</Button>
```

### Tailwind CSS

```typescript
// Use Tailwind utility classes
<div className="flex items-center justify-center bg-blue-500 text-white p-4">
  Hello World
</div>
```

## 📚 Documentation

- [Folder Structure](./FOLDER_STRUCTURE.md) - Detailed folder organization
- [Component Guidelines](./docs/COMPONENT_GUIDELINES.md) - Component development standards
- [API Integration](./docs/API_INTEGRATION.md) - Backend integration guide
- [Template Usage Guide](./docs/TEMPLATE_USAGE_GUIDE.md) - How to convert this template to your project
- [Package Documentation](./docs/PACKAGES.md) - Detailed package usage and configuration

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](.github/CONTRIBUTING.md) for details.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

If you encounter any issues or have questions:

1. Check the [Issues](../../issues) page
2. Create a new issue with detailed information
3. Contact the development team

## 🔄 Version History

- **v1.0.0** - Initial project setup with folder structure
- **v1.0.1** - Added comprehensive documentation
- **v1.1.0** - Added Material-UI, Ant Design, React Router, and other essential packages
- **v1.2.0** - Added GitHub templates, CI workflow, and example component

---

**Built with ❤️ by the React Vite TypeScript Team**
