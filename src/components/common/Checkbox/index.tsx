import React from 'react';
import style from './Checkbox.module.scss';

type CheckboxTypeProps = {
  id: string;
  value: boolean;
  setValue: React.ChangeEventHandler<HTMLInputElement> | undefined;
  err?: string | false | undefined;
};

const Checkbox = ({ value, setValue, id, err }: CheckboxTypeProps) => (
  <label className={style.checkbox} htmlFor="checkbox">
    <input
      id={id}
      className={style.checkbox_input}
      type="checkbox"
      onChange={setValue}
      checked={value}
    />
    <span className={style.checkbox_text}> Согласен (а) на обработку персональных данных</span>
    {err ? <p className={style.err}>{err}</p> : ''}
  </label>
);

export default Checkbox;
