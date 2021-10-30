import React, { useEffect, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

import useHttp from './hooks/use-http';

function App() {
  const [tasks, setTasks] = useState([]);

  const { isLoading, error, sendRequest: fetchTasks } = useHttp()

  // When checking use effect dependencies, make sure that the dependencies 
  // are not other functions or objects. If they are functions then useCallback
  // if they are objects then memo or refactor to put the object in the useEffect 
  // hook
  useEffect(() => {
    const transformTasks = tasksObj => {
      const loadedTasks = [];
  
        for (const taskKey in tasksObj) {
          loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text });
        }
  
        setTasks(loadedTasks);
    }
    fetchTasks({ url: 'https://react-http-de08e-default-rtdb.firebaseio.com/tasks.json'}, transformTasks);
  }, [fetchTasks]);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
}

export default App;
