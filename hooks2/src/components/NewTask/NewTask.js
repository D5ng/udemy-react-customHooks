import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from '../../hooks/useHttp';

const FIREBASE_URL = process.env.REACT_APP_FIREBASE_KEY;

const NewTask = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp()

  const createTask = (taskText, tasksData) => {
    const generatedId = tasksData.name
    const createdTask = { id: generatedId, text: taskText }
    props.onAddTask(createdTask)
  }

  const enterTaskHandler = async (taskText) => {
    await sendTaskRequest(
      {
        url: `${FIREBASE_URL}tasks.json`,
        method: "POST",
        body: { text: taskText },
        headers: {
          "Content-Type": "application/json",
        },
      },
      createTask.bind(null, taskText)
    )
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
