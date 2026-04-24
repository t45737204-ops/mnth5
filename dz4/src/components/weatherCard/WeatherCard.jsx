import React from 'react'
import styles from "./WeatherCard.module.scss"

const WeatherCard = ({city,data}) => {
 if (!data) return null;
  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles.city}>{city}</div>
        <div className={styles.icon}>{data.icon}</div>
      </div>

      <div className={styles.main}>
        <div className={styles.temp}><strong>{data.temp}°C</strong></div>
        <div className={styles.desc}>{data.description}</div>
      </div>

      {typeof data.wind !== "undefined" && (
        <div className={styles.wind}>Ветер: <strong>{data.wind} м/с</strong></div>
      )}

      {Array.isArray(data.forecast) && (
        <div className={styles.forecast}>
          <div className={styles.forecastTitle}>Прогноз на 5 дней</div>
          <div className={styles.forecastList}>
            {data.forecast.map((t, i) => (
              <div key={i} className={styles.forecastItem}>{t}°</div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default WeatherCard