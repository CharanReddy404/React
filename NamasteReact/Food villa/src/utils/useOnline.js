import { useEffect, useState } from 'react';

const useOnline = () => {
  const [isOnline, setIsOnline] = useState(true);

  useEffect(() => {
    const online = () => {
      setIsOnline(true);
    };
    window.addEventListener('online', online);

    const offline = () => {
      setIsOnline(false);
    };
    window.addEventListener('offline', offline);

    return () => {
      removeEventListener('online', online);
      removeEventListener('offline', offline);
    };
  }, []);

  return isOnline;
};

export default useOnline;
