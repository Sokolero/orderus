import React, { useState } from "react";
import styles from "./Calendar.module.css";

// вычислить текущую дату = год, месяц, число
// получить 6 недель включающих дни этого месяца
// получить номер дня недели для первого дня
// получить количество дней приходящих на предыдцщий месяц
// dayNumber === countFromPrevMonth

const getSixWeeks = () => {
  const nowDate = 
}

const Day = ({ day }) => {
  return <div className={styles.day}>{day}</div>;
};

const Calendar = ({ employeer = {} }) => {
  return <div className={styles.calendar}>

  </div>;
};

export default Calendar;
