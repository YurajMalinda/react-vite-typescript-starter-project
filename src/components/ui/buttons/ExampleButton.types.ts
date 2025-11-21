export interface ExampleButtonProps {
  /** Button variant: 'mui' for Material-UI, 'ant' for Ant Design, 'tailwind' for Tailwind CSS */
  variant?: 'mui' | 'ant' | 'tailwind';
  /** Button text */
  children: React.ReactNode;
  /** Click handler */
  onClick?: () => void;
  /** Button type */
  type?: 'button' | 'submit' | 'reset';
  /** Disabled state */
  disabled?: boolean;
}

