import React from 'react';
import { useSpring, animated } from '@react-spring/web';

export const AnimatedJsonComponent = ({ jsonData }) => {
  const { opacity, transform } = useSpring({
    opacity: 1,
    transform: 'translate(0px, 0px)',
    from: { opacity: 0, transform: 'translate(0px, -50px)' },
  });

  return (
    <animated.div style={{ opacity, transform }}>
      {/* Render your JSON data here */}
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </animated.div>
  );
};
