import React, { useState, useEffect } from 'react'

function useCounter(updateFn) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(updateFn);
    }, 1000);

    return () => clearInterval(interval);
  }, [updateFn]);

  return counter
}

export default useCounter