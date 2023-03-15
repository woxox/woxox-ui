import React from 'react';

interface Props {
  primary?: boolean;
  size?: 'small' | 'large';
  label?: string;
}

export const Button: React.FC = ({ primary = false, label = 'Boop', size = 'small' }: Props) => {
  return (
    <button
      style={{
        backgroundColor: primary ? 'red' : 'blue',
        fontSize: size === 'large' ? '24px' : '14px',
      }}
    >
      {label}
    </button>
  );
};
