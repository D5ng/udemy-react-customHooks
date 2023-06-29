import React, { useCallback, useEffect, useMemo, useState } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';
import useHttp from './hooks/useHttp';


const FIREBASE_URL = process.env.REACT_APP_FIREBASE_KEY;

function App() {
  const [tasks, setTasks] = useState([]);

  const {
    isLoading,
    error,
    sendRequest: fetchTasks,
  } = useHttp()

  useEffect(() => {
    const transformTasks = (tasksObj) => {
      const loadedTasks = []
      for (const taskKey in tasksObj) {
        loadedTasks.push({ id: taskKey, text: tasksObj[taskKey].text })
      }
      setTasks(loadedTasks)
    }

    fetchTasks({ url: `${FIREBASE_URL}tasks.json` }, transformTasks)
  }, [fetchTasks])

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
