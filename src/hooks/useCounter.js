import { useState, useEffect } from 'react'

function useCounter(counterUpdateFn) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter(counterUpdateFn);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [counterUpdateFn]);

  return counter
}

export default useCounter