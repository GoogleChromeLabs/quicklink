/*
 * Copyright 2019-2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, {useEffect, useRef, useState} from 'react';
import rmanifest from 'route-manifest';
import {listen} from './quicklink.js';

const useIntersect = ({root = null, rootMargin, threshold = 0} = {}) => {
  const [entry, updateEntry] = useState({});
  const [node, setNode] = useState(null);
  const observer = useRef(null);

  useEffect(() => {
    if (observer.current) observer.current.disconnect();
    observer.current = new window.IntersectionObserver(
        ([entry]) => updateEntry(entry),
        {
          root,
          rootMargin,
          threshold,
        },
    );

    const {current: currentObserver} = observer;
    if (node) currentObserver.observe(node);

    return () => currentObserver.disconnect();
  }, [node, root, rootMargin, threshold]);

  return [setNode, entry];
};

const __defaultAccessor = mix => {
  return (mix && mix.href) || mix || '';
};

const prefetchChunks = (entry, prefetchHandler, accessor = __defaultAccessor) => {
  const {files} = rmanifest(window.__rmanifest, entry.pathname);
  const chunkURLs = files.map(accessor).filter(Boolean);
  if (chunkURLs.length) {
    prefetchHandler(chunkURLs);
  } else {
    // also prefetch regular links in-viewport
    prefetchHandler(entry.href);
  }
};

const withQuicklink = (Component, options = {}) => {
  // eslint-disable-next-line react/display-name
  return props => {
    const [ref, entry] = useIntersect({root: document.body.parentElement});
    const {intersectionRatio} = entry;

    useEffect(() => {
      options.prefetchChunks = prefetchChunks;

      if (intersectionRatio > 0) {
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
  withQuicklink,
};
