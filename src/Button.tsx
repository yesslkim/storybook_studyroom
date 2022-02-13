import React, { HTMLAttributes } from 'react';
import './button.css';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  /** 버튼에 들어가는 텍스트 혹은 엘리먼트를 넣는 부분입니다 */
  children: JSX.Element | string;

  /** 버튼의 타입을 지정할 수 있습니다 */
  variant: 'primary' | 'secondary';
}

/** 기본 형태의 버튼입니다 */
const Button = ({ children, variant = 'primary', ...props }: Props) => {
  return (
    <button
      className={variant === 'primary' ? 'btn_primary' : 'btn_secondary'}
      {...props}
    >
      {children}
    </button>
  );
};

export { Props, Button };
