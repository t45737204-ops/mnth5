import React from 'react'
import { useState } from 'react';
import styles from "./WeatherApp.module.scss"
import WeatherInput from '../components/weatherInput/WeatherInput';
import weatherData from "../data/weather.json"
import WeatherCard from '../components/weatherCard/WeatherCard';
const WeatherApp = () => {
  const [city, setCity] = useState("");
  const [error, setError] = useState(null);

  const handleSearch = (value) => {
    setError(null);
    if (!value) {
      setCity("");
      return;
    }
    const foundKey = Object.keys(weatherData).find(
      (k) => k.toLowerCase() === value.toLowerCase()
    );
    if (!foundKey) {
      setCity("");
      setError("Город не найден");
      return;
    }
    setCity(foundKey);
  };

  const weather = city ? weatherData[city] : null;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Простая погода</h1>
      <WeatherInput onSearch={handleSearch} />
      <div className={styles.result}>
        {error && <div className={styles.error}>{error}</div>}
        {weather && <WeatherCard city={city} data={weather} />}
        {!error && !weather && (
          <div className={styles.hint}>
            Введите название города из набора: {Object.keys(weatherData).join(", ")}
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp