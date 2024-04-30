import {FC} from 'react';

interface IUniversalTitle {
    title: string
}

/**
 * title for use in app
 * @param title
 * @constructor
 */
export const UniversalTitle:FC<IUniversalTitle> = ({title}) => {
  return (
    <div>
      {title}
    </div>
  );
};

