# Component Guidelines

This document outlines the standards and best practices for developing components in the React Vite TypeScript Starter Project.

## 📋 Component Standards

### File Structure

Each component should follow this structure:

```
ComponentName/
├── ComponentName.tsx      # Main component
├── ComponentName.types.ts # TypeScript types
├── ComponentName.test.tsx # Unit tests
└── index.ts              # Export file
```

### Component Template

```typescript
// ComponentName.tsx
import React from 'react';
import { ComponentNameProps } from './ComponentName.types';

export const ComponentName: React.FC<ComponentNameProps> = ({
  prop1,
  prop2,
  children,
  ...props
}) => {
  return (
    <div {...props}>
      {/* Component content */}
    </div>
  );
};
```

### Types Template

```typescript
// ComponentName.types.ts
export interface ComponentNameProps {
  prop1?: string;
  prop2: number;
  children?: React.ReactNode;
  className?: string;
}
```

## 🎯 Best Practices

### 1. TypeScript Usage

- Always define prop interfaces
- Use strict typing
- Avoid `any` type
- Use union types for variants

### 2. Component Organization

- Keep components focused and single-purpose
- Extract reusable logic into custom hooks
- Use composition over inheritance

### 3. Performance

- Use React.memo for expensive components
- Implement proper key props for lists
- Avoid inline object/function creation

### 4. Accessibility

- Use semantic HTML elements
- Include proper ARIA attributes
- Ensure keyboard navigation
- Test with screen readers

## 📁 Component Categories

### UI Components (`src/components/ui/`)

Basic, reusable UI elements:

- Buttons (MUI, Ant Design, Custom)
- Inputs (MUI TextField, Ant Input, Custom)
- Cards (MUI Card, Ant Card, Custom)
- Modals (MUI Dialog, Ant Modal, Custom)
- Icons (MUI Icons, Ant Icons, Lucide React)

### Layout Components (`src/components/layout/`)

Structural components:

- Header
- Sidebar
- Footer
- Navigation

### Form Components (`src/components/forms/`)

Form-related components:

- Form fields (MUI TextField, Ant Input)
- Validation components
- Form containers
- Form validation with react-hook-form

### Chart Components (`src/components/charts/`)

Data visualization:

- Line charts
- Bar charts
- Pie charts
- Dashboards

### Table Components (`src/components/tables/`)

Data display:

- Data tables (Ant Design Table, MUI Table)
- Sortable columns
- Pagination

## 🔧 Development Workflow

1. **Create Component Structure**

   ```bash
   mkdir src/components/ui/NewComponent
   touch src/components/ui/NewComponent/NewComponent.tsx
   touch src/components/ui/NewComponent/NewComponent.types.ts
   touch src/components/ui/NewComponent/index.ts
   ```

2. **Define Types First**
   - Start with the interface
   - Include all possible props
   - Add JSDoc comments

3. **Implement Component**
   - Follow the template structure
   - Add proper error handling
   - Include accessibility features

4. **Add Tests**
   - Test all prop combinations
   - Test user interactions
   - Test edge cases

5. **Export Component**
   ```typescript
   // index.ts
   export { ComponentName } from "./ComponentName";
   export type { ComponentNameProps } from "./ComponentName.types";
   ```

## 📝 Documentation Standards

### Component Documentation

````typescript
/**
 * ComponentName - Brief description
 *
 * @example
 * ```tsx
 * <ComponentName prop1="value" prop2={42}>
 *   Content
 * </ComponentName>
 * ```
 */
````

### Props Documentation

```typescript
export interface ComponentNameProps {
  /** Description of prop1 */
  prop1?: string;

  /** Description of prop2 with more detail */
  prop2: number;

  /** Optional children content */
  children?: React.ReactNode;
}
```

## 🎨 Styling Guidelines

### UI Library Usage

#### Material-UI (MUI)

```typescript
// Use MUI for complex forms and data entry
import { TextField, Button, Card } from '@mui/material';

export const MUIForm: React.FC = () => {
  return (
    <Card>
      <TextField fullWidth label="Email" variant="outlined" />
      <Button variant="contained" color="primary">
        Submit
      </Button>
    </Card>
  );
};
```

#### Ant Design

```typescript
// Use Ant Design for data tables and enterprise features
import { Table, Button, Input } from 'antd';

export const AntTable: React.FC = () => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 10 }}
    />
  );
};
```

#### Tailwind CSS

```typescript
// Use Tailwind for custom layouts and styling
export const CustomLayout: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-bold text-gray-900">Custom Layout</h1>
    </div>
  );
};
```

### CSS Classes

- Use BEM methodology for custom CSS
- Keep classes semantic
- Avoid deep nesting

### CSS-in-JS

- Use Emotion (already included)
- Keep styles co-located with components
- Use theme variables

### Responsive Design

- Mobile-first approach
- Use CSS Grid and Flexbox
- Test on multiple screen sizes

## 🧪 Testing Guidelines

### Unit Tests

- Test component rendering
- Test prop variations
- Test user interactions
- Test error states

### Integration Tests

- Test component composition
- Test with real data
- Test accessibility features

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Accessibility Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

---

**Remember**: These guidelines ensure consistency and maintainability across the React Vite TypeScript Starter Project.
