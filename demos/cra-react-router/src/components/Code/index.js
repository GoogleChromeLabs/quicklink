/*
 * Copyright 2019 Google LLC
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

import React from 'react';

import style from './index.module.css';

const Code = ({ offset, label, text }) => {
	let cls = style.pre;
	if (offset) cls += ` ${style.offset}`;
	return (
		<pre className={cls}>
			{label && <span className={style.comment}># {label}</span>}
			<span className={style.text}>$ {text}</span>
		</pre>
	);
};

export default Code;
