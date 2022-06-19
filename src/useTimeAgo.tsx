import React from 'react';

function useTimeAgoComponent() {
  const TimeAgoComponent = () => {
    return <span>{'Time Ago'}</span>;
  };

  const TimeAgo = React.useMemo(() => TimeAgoComponent, []);

  return TimeAgo;
}

export function useTimeAgo() {
  const TimeAgo = useTimeAgoComponent();

  return {
    TimeAgo,
  };
}
