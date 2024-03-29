import { useCallback, useState } from "react";

export default (): [number, () => void] => {
  const [count, setCount] = useState(0);
  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);
  return [count, increment];
};
