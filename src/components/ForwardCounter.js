import Card from './Card';
import useCounter from '../hooks/useCounter';

const ForwardCounter = () => {
  const addFn = (prev) => prev + 1
  const counter = useCounter(addFn);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
