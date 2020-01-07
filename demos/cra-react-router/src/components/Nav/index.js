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

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import style from './index.module.css';

const Nav = () => {
	const [stuck, setStuck] = useState(false);
	useEffect(() => {
		const handleNavStuck = () => {
			setStuck(window.pageYOffset > 0);
		};

		window.addEventListener(
			'scroll',
			handleNavStuck,
			{passive:true}
		);
		
		return () => {
			window.removeEventListener(
				'scroll',
				handleNavStuck,
				{passive:true}
			);
		}
	}, []);

	let cls = style.nav;
	if (stuck) {
		cls += ` ${style.stuck}`;
	}

	return (
		<nav className={cls}>
			<ul className={style.links}>
				<li><Link to="/">Home</Link></li>
				<li><Link to="/blog">Blog</Link></li>
				<li><Link to="/about">About</Link></li>
			</ul>
			<ul>
				<li><a href="https://github.com/lukeed/pwa" className={style.link_external}>GitHub</a></li>
				<li><a href="https://github.com/lukeed/pwa" className={style.link_external}>Documentation</a></li>
			</ul>
		</nav>
	);
};

export default Nav;
