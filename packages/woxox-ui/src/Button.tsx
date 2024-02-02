import React from 'react';

interface Props {
  primary?: boolean;
  size?: 'small' | 'large';
  label?: string;
}

export const Button: React.FC<Props> = ({
  primary = false,
  label = 'Boop',
  size = 'small',
}) => {
  return (
    <button
      style={{
        backgroundColor: primary ? 'red' : 'blue',
        fontSize: size === 'large' ? '24px' : '14px',
      }}
      id={'asdf'}
    >
      {label}
    </button>
  );
};
