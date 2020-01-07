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

import React, { useEffect, useRef } from 'react';

import Nav from '@components/Nav';
import style from './index.module.css';

const SHAPES = ['point', 'square', 'penta', 'circle', 'cross'];

const Hero = () => {
	const shapesRef = useRef(null);

	useEffect(() => {
		const elem = shapesRef.current;
		const ww = elem.clientWidth;
		const wh = elem.clientHeight;
		// TODO: not used
		// const offset = elem.offsetTop;
		const steps = wh / 2;

		const getParticle = () => {
			let y = wh;
			let dir = Math.random() > 0.5 ? -1 : 1;
			let fric = Math.random() * 3 + 1;
			let scale = Math.random() + 0.5;
			let sine = Math.random() * 60;
			let x = ww * Math.random();

			let item = document.createElement('span');
			item.className = style.shape + ' ' + SHAPES[SHAPES.length * Math.random() | 0];
			item.style.transform = `translate3d(${x}px,${y}px,0) scale(${scale})`;
			elem.appendChild(item);

			let height = item.clientHeight;
			let target = -1 * height;

			return () => {
				y -= fric;
				let rot = dir * Math.abs(y + height);
				let left = x + Math.sin(y * Math.PI / steps) * sine;
				item.style.transform = `translate3d(${left}px,${y}px,0) scale(${scale}) rotate(${rot}deg)`;
				return (y > target) || item.remove();
			};
		};

		let last = 0;
		let running = 1;
		let particles = [];

		window.onblur = window.onfocus = () => {
			running = document.hasFocus();
		};

		const update = ms => {
			let len = particles.length;
			if (running && len < 50 && (ms - last) > 200) {
				last = ms;
				particles.push(getParticle());
			}
			while (len--) {
				particles[len]() || particles.splice(len, 1);
			}
			requestAnimationFrame(update);
		};

		update();
	}, []);

	// TODO: not used
	// const setShapes = elem => {
	// 	shapesRef.current = elem;
	// };

	return (
		<header className={style.hero}>
			<Nav />
			<div className={style.titles}>
				<h1>PWA</h1>
				<h3>Universal Builder</h3>
			</div>
			<div ref={shapesRef} className={style.shapes} />
		</header>
	);
};

export default Hero;
