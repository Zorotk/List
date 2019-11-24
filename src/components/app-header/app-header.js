import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, done,urgently}) => {
  return (
    <div className="app-header d-flex">
      <h1>Список</h1>
      <h2>{toDo} Активно, {done} Завершено, {urgently}  Важно</h2>
    </div>
  );
};

export default AppHeader;
