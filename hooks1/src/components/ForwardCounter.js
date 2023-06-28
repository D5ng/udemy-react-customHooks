import Card from './Card';
import useCounter from '../hooks/useCounter';

const ForwardCounter = () => {
  const updateFn = (prevCounter) => prevCounter + 1
  const counter = useCounter(updateFn)
  return <Card>{counter}</Card>;
};

export default ForwardCounter;
