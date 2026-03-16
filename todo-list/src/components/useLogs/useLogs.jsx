import React, {useState} from 'react';
import initialValues from "../initialValues/index.js";

const logsState = () => {
  const [log,setLog] = useState(initialValues.log)
  const [logsList, setLogsList] = useState(initialValues.logsList)

  const increment = () => {
    setLog(log + 1)
    setLogsList([{value: log + 1, id: Date.now()}, ...logsList])
  }

  const decrement = () => {
    setLog(log - 1)
    setLogsList([{value: log - 1, id: Date.now()}, ...logsList])
  }

  const deleteLog = (id) => {
    const updatedLogsList = logsList.filter(log => log.id !== id)
    setLogsList(updatedLogsList)
  }


  return {log, logsList, increment, decrement, deleteLog}
};

export default logsState;