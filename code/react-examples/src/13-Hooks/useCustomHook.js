import React, {useState, useEffect} from 'react';

export function useCustomHook(status) {
  const [isOnline, setIsOnline] = useState(status);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status);
    }

    setTimeout(()=>{
      handleStatusChange(!isOnline)
    }, 3000);
  });

  return isOnline;
}