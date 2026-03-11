import React from "react";

const TodoList = ({tasks, setTasks}) => {

  const chekDone = (id) => {
    const updatedTasks = tasks.map((task) => {
      if(task.id === id) {
        return {...task, done: !task.done};
      }

      return task;
    })

    setTasks(updatedTasks);
  }

  return (
    <>
      <ul className="list-unstyled">
        {tasks.map((task, index) => (
         <React.Fragment key={task.id}>
           <li
             onClick={() => chekDone((task.id))}
             className={task.done ? 'text-secondary text-decoration-line-through' : 'text-primary'}
           >
             {index + 1}. {task.task}
           </li>
           <hr/>
         </React.Fragment>
        ))}
      </ul>
    </>
  );
};

export default TodoList;