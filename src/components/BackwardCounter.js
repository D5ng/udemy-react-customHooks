import Card from './Card';
import useCounter from '../hooks/useCounter';

const BackwardCounter = () => {
  const removeFn = (prev) => prev - 1
 const counter = useCounter(removeFn);

  return <Card>{counter}</Card>;
};

export default BackwardCounter;
