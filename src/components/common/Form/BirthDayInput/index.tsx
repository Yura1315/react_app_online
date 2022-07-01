/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import ru from 'date-fns/locale/ru';
import DatePicker, { registerLocale } from 'react-datepicker';
import style from './BirthDayInput.module.scss';

registerLocale('ru', ru);

type BirthDayPropsType = {
  id: string;
  name: string;
  value: any;
  selected: Date | null | undefined;
  setValue?: any;
  dateFormat: string;
};

const BirthDay = ({ id, value, setValue, selected, name, dateFormat }: BirthDayPropsType) => {
  const lastDate = () => {
    const currentDate: Date = new Date();
    const year = currentDate.getFullYear() - 4;
    const maxDate: Date = new Date(year, 0, 1, 2);
    return maxDate;
  };
  return (
    <div className={style.datepicker_wrap}>
      <DatePicker
        className={style.datepicker}
        placeholderText="__.__.____"
        id={id}
        value={value}
        name={name}
        selected={selected}
        onChange={(date) => setValue('birthDay', date)}
        dateFormat={dateFormat}
        locale="ru"
        maxDate={lastDate()}
      />
      <label className={style.datepicker_label} htmlFor={id}>
        день рождения
      </label>
    </div>
  );
};

export default BirthDay;
