import { useState } from "react";

const useLocalStorage = (localKey) => {
  const checkStorage = JSON.parse(localStorage.getItem(localKey));

  if (!checkStorage) {
    localStorage.setItem(localKey, JSON.stringify([]));
  }

  const [fromLocal, setFromLocal] = useState(checkStorage);

  const setLocalStorage = (value) => {
    setFromLocal(value);
    localStorage.setItem(localKey, JSON.stringify(value));
  };

  return [fromLocal, setLocalStorage];
};

export default useLocalStorage;
