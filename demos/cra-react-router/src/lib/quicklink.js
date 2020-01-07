
// ray test touch <
import React, { useEffect, useRef, useState } from 'react';
import { listen } from 'quicklink';

const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(
    () => {
      if (observer.current) observer.current.disconnect();
      observer.current = new window.IntersectionObserver(
        ([entry]) => updateEntry(entry),
        {
          root,
          rootMargin,
          threshold
        }
      );

      const { current: currentObserver } = observer;
      if (node) currentObserver.observe(node);

      return () => currentObserver.disconnect();
    },
    [node, root, rootMargin, threshold]
  );

  return [setNode, entry];
};

const withQuicklink = (Component, options) => {
  return props => {
		const [ref, entry] = useIntersect({root: document.body.parentElement});
    const intersectionRatio = entry.intersectionRatio;
    
		useEffect(() => {
			console.log('ray : ***** [App withQuicklink callback] intersectionRatio => ', intersectionRatio);
			if (intersectionRatio > 0) {
        console.log('ray : ***** [App withQuicklink callback] we call quicklink as intersectionRatio is ', intersectionRatio, ', which is greater than zero');
        listen(options);
			}
		}, [intersectionRatio]);
		
		return (
			<div ref={ref}>
        <Component {...props} />
			</div>
		);
	};
};

export {
  withQuicklink
};
// ray test touch >
