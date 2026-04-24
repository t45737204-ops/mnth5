import React from 'react'
import styles from "./WeatherInput.module.scss"
import { useState } from 'react';
import { useRef } from 'react';
import {debounser} from "../../utils/debounce"
import { useEffect } from 'react';

const WeatherInput = ({onSearch}) => {
  const [value, setValue] = useState("");

  const debouncedSearchRef = useRef(debounser((v) => onSearch(v.trim()), 350));

  useEffect(() => {
    debouncedSearchRef.current(value);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Введите город"
        aria-label="city-input"
      />
      <button
        className={styles.clear}
        onClick={() => {
          setValue("");
          onSearch("");
        }}
        aria-label="clear-input"
        type="button"
      >
        Очистить
      </button>
    </div>
  );
}

export default WeatherInput