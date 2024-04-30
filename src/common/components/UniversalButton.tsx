import {FC, ReactNode} from 'react';

interface IUniversalButton {
    children: ReactNode
    onClick: (value: number) => void
    valueForOnClick: number
    disabled?: boolean
    style?: string
}

/**
 * button for use in app
 * @param children
 * @param onClick
 * @param valueForOnClick
 * @param disabled
 * @param style
 * @constructor
 */
export const UniversalButton:FC<IUniversalButton> = ({
  children,
  onClick,
  valueForOnClick,
  disabled,
  style,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        onClick={() => onClick(valueForOnClick)}
        className={style}
      >
        {children}
      </button>
    </>
  );
};
