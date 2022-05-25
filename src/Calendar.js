import React, { useState } from "react";
import styles from "./Calendar.module.css";

const Day = ({ date }) => {
  return <div className={styles.day}>{date.getDate() + 1}</div>;
};

const getBeginDate = () => {
  const date = new Date();

  const nowDate = {
    day: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  };
  const firstDayDate = new Date(nowDate.year, nowDate.month, 1);
  const firstDayNumber = firstDayDate.getDay();
  console.log(firstDayNumber);
  const firstDayDateMs = firstDayDate.getMilliseconds();
  return new Date(firstDayDateMs - firstDayNumber * 8.64e7);
};

const getDatesList = () => {
  const beginDate = getBeginDate();
  console.log(beginDate.getDate());
  const dateList = [];
  dateList.push(beginDate);
  let currentMsValue = beginDate.getMilliseconds();

  for (let i = 1; i < 42; i += 1) {
    currentMsValue += 8.64e7;
    const nextDate = new Date(currentMsValue);

    dateList.push(nextDate);
  }

  return dateList.map((date, index) => <Day date={date} key={index} />);
};

const Calendar = ({ employeer = {} }) => {
  return <div className={styles.calendar}>{getDatesList()}</div>;
};

export default Calendar;
