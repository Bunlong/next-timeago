import React from 'react';

export function useTimeAgo() {
  React.useEffect(() => {
    console.log('Hi React Hooks');
  }, []);

  return {
    message: 'Hi React Hooks',
  };
}
