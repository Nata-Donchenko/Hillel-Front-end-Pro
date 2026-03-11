import {Form, Button} from "react-bootstrap";
import {useState} from "react";
import Input from "../FormComponents/Input";
import TodoList from "../TodoList";
import initialValues from "../initialValues";

const TodoForm = () => {

  const [data, setData] = useState({...initialValues});
  const [tasks, setTasks] = useState([]);

  const handleChange = ({target}) => {
    const dataCopy = {...data};
    dataCopy[target.name] = target.value;
    setData(dataCopy);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newTask = {
      id: Date.now(),
      task: data.task,
      done: false,
    };

    setTasks([...tasks, newTask]);
    setData({...initialValues});
  }

  return (
    <>
      <h1>Todo List</h1>
      <hr/>
      {tasks.length > 0 && (
        <>
          <TodoList tasks={tasks} setTasks={setTasks}/>
          <hr/>
        </>
      )}

      <Form onSubmit={handleSubmit} className="d-flex gap-2">
        <Input
          name='task'
          placeholder='Enter a task'
          className='mb-0'
          value={data.task}
          onChange={handleChange}
        />

        <Button onClick={handleSubmit} type='submit'  >Add</Button>
      </Form>
    </>
  );
};

export default TodoForm;





// import {Form, Button} from "react-bootstrap";
// import Input from "../FormComponents/Input";
// import {useState} from "react";
//
// const initialValues = {
//   task: "",
// }
//
// const TodoForm = ({onSubmit}) => {
//
//   const [data, setData] = useState({...initialValues})
//   const [canSubmit, setCanSubmit] = useState(false);
//
//   const handleChange = ({target}) => {
//     const dataCopy = {...data}
//     dataCopy[target.name] = target.value;
//     setData(dataCopy);
//
//     const shouldSubmit = Object
//       .keys(dataCopy)
//       .reduce((acc, key) => {
//         if(dataCopy[key] === '') {
//           return false;
//         }
//         return acc;
//       }, true)
//
//     setCanSubmit(shouldSubmit)
//   }
//
//   const handleSubmit = (event) => {
//     event.preventDefault()
//     if (!canSubmit) return
//
//     onSubmit(data)
//     setData(({...initialValues}))
//     setCanSubmit(false)
//   }
//
//   return (
//     <>
//       <h1>Todo List</h1>
//       <hr/>
//       <Form onSubmit={handleSubmit}>
//         <Input
//           name='task'
//           placeholder='Enter a task'
//           className='mb-3'
//           label='task'
//           value={data.task}
//           onChange={handleChange}
//         />
//
//         <Button disabled={!canSubmit} type='submit'>Add</Button>
//       </Form>
//     </>
//   );
// };
//
// export default TodoForm;