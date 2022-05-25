import React, { useState } from "react";
import styles from "./Calendar.module.css";

const Day = ({ date }) => {
  return <div className={styles.day}>{date.getDate() + 1}</div>;
};

const getPastDate = (date, countDays) => {
  return new Date(
    date.getFullYear(),
    date.getMonth(),
    date.getDate(),
    date.getHours() - 24 * countDays
  );
};

const getBeginDate = () => {
  const date = new Date();

  const nowDate = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
  const firstDayDate = new Date(nowDate.year, nowDate.month, 1);
  const countToMonday =
    firstDayDate.getDay() !== 0 ? firstDayDate.getDate() - 1 : 6;
  //
  // console.log(firstDayNumber);
  const pd = getPastDate(firstDayDate, countToMonday);
  // console.log(pd);
  return pd;
};

const getDatesList = () => {
  const beginDate = getBeginDate();
  console.log(beginDate.getDate());
  const dateList = [];
  dateList.push(beginDate);

  for (let i = 1; i < 42; i += 1) {
    const nextDate = new Date(beginDate.getFullYear(), beginDate.getMonth());
    dateList.push(nextDate);
  }

  return dateList.map((date, index) => <Day date={date} key={index} />);
};

const Calendar = ({ employeer = {} }) => {
  return <div className={styles.calendar}>{getDatesList()}</div>;
};

export default Calendar;
