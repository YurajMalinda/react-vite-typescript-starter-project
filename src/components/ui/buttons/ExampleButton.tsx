import { Button as MuiButton } from '@mui/material';
import { Button as AntButton } from 'antd';
import type { ExampleButtonProps } from './ExampleButton.types';
import './ExampleButton.css';

/**
 * ExampleButton - Demonstrates button components from different UI libraries
 * 
 * This component shows how to use buttons from Material-UI, Ant Design, and Tailwind CSS
 * 
 * @example
 * ```tsx
 * <ExampleButton variant="mui" onClick={() => console.log('Clicked!')}>
 *   Click me
 * </ExampleButton>
 * ```
 */

export const ExampleButton: React.FC<ExampleButtonProps> = ({
  variant = 'mui',
  children,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  switch (variant) {
    case 'mui':
      return (
        <MuiButton
          variant="contained"
          color="primary"
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {children}
        </MuiButton>
      );

    case 'ant':
      return (
        <AntButton
          type="primary"
          onClick={onClick}
          htmlType={type}
          disabled={disabled}
        >
          {children}
        </AntButton>
      );

    case 'tailwind':
      return (
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          onClick={onClick}
          type={type}
          disabled={disabled}
        >
          {children}
        </button>
      );

    default:
      return null;
  }
};

