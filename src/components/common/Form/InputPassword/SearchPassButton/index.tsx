import React from 'react';
import style from './SearchPassButton.module.scss';

type SearchPassButtonType = {
  value: boolean;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};

const SearchPassButton = ({ setValue, value }: SearchPassButtonType) => {
  const showPassword = () => {
    setValue((prev) => !prev);
  };
  return (
    <button className={style.search_pass} type="button" onClick={showPassword}>
      {value ? (
        <svg
          className={style.search_pass_svg}
          width="22"
          height="18"
          viewBox="0 0 22 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1.27L2.28 0L19 16.72L17.73 18L14.65 14.92C13.5 15.3 12.28 15.5 11 15.5C6 15.5 1.73 12.39 0 8C0.69 6.24 1.79 4.69 3.19 3.46L1 1.27ZM11 5C11.7956 5 12.5587 5.31607 13.1213 5.87868C13.6839 6.44129 14 7.20435 14 8C14 8.35 13.94 8.69 13.83 9L10 5.17C10.31 5.06 10.65 5 11 5ZM11 0.5C16 0.5 20.27 3.61 22 8C21.18 10.08 19.79 11.88 18 13.19L16.58 11.76C17.94 10.82 19.06 9.54 19.82 8C18.17 4.64 14.76 2.5 11 2.5C9.91 2.5 8.84 2.68 7.84 3L6.3 1.47C7.74 0.85 9.33 0.5 11 0.5ZM2.18 8C3.83 11.36 7.24 13.5 11 13.5C11.69 13.5 12.37 13.43 13 13.29L10.72 11C9.29 10.85 8.15 9.71 8 8.28L4.6 4.87C3.61 5.72 2.78 6.78 2.18 8Z" />
        </svg>
      ) : (
        <svg
          width="22"
          height="15"
          viewBox="0 0 22 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M11 4.5C11.7956 4.5 12.5587 4.81607 13.1213 5.37868C13.6839 5.94129 14 6.70435 14 7.5C14 8.29565 13.6839 9.05871 13.1213 9.62132C12.5587 10.1839 11.7956 10.5 11 10.5C10.2044 10.5 9.44129 10.1839 8.87868 9.62132C8.31607 9.05871 8 8.29565 8 7.5C8 6.70435 8.31607 5.94129 8.87868 5.37868C9.44129 4.81607 10.2044 4.5 11 4.5ZM11 0C16 0 20.27 3.11 22 7.5C20.27 11.89 16 15 11 15C6 15 1.73 11.89 0 7.5C1.73 3.11 6 0 11 0ZM2.18 7.5C3.83 10.86 7.24 13 11 13C14.76 13 18.17 10.86 19.82 7.5C18.17 4.14 14.76 2 11 2C7.24 2 3.83 4.14 2.18 7.5Z"
            fill="#706A66"
          />
        </svg>
      )}
    </button>
  );
};

export default SearchPassButton;
