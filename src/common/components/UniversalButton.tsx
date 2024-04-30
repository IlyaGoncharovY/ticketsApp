import {FC, ReactNode} from 'react';

interface IUniversalButton {
    children: ReactNode
    onClick: (value: number) => void
    valueForOnClick: number
    style?: string
}

/**
 * button for use in app
 * @param children
 * @param onClick
 * @param valueForOnClick
 * @param style
 * @constructor
 */
export const UniversalButton:FC<IUniversalButton> = ({
  children,
  onClick,
  valueForOnClick,
  style,
}) => {
  return (
    <>
      <button
        onClick={() => onClick(valueForOnClick)}
        className={style}
      >
        {children}
      </button>
    </>
  );
};
