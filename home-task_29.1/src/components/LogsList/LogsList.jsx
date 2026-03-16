import React from "react";

const LogsList = ({logsList, onClick}) => {
  return (
    <>
      <ul className='list-group list-group-flush'>
        {logsList.map((log) => (
            <li
              key={log.id}
              onClick={() => onClick(log.id)}
              className='list-group-item list-group-item-dark'
            >
              {log.value}
            </li>
        ))}
      </ul>
    </>
  );
};

export default LogsList;