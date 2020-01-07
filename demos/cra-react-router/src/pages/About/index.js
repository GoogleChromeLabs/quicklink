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

import Intro from '@components/Intro';
import style from './index.module.css';

const About = () => (
	<div className={style.about}>
		<Intro>
			<h1>About Page</h1>
			<p>This is a <em>very</em> generic about page.</p>
			<p>
				There's really nothing to say here, especially since this is just a demo template!
				<span role="img" aria-label="winking face">&nbsp;😉</span>
			</p>
			<p>So.. you're gunna get a bunch of Lorem Ipsum text instead. Have a nice day!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit error culpa dolore blanditiis expedita beatae, quis saepe eveniet facilis esse. Assumenda, odit voluptates doloremque eligendi libero hic incidunt, alias cum!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit error culpa dolore blanditiis expedita beatae, quis saepe eveniet facilis esse. Assumenda, odit voluptates doloremque eligendi libero hic incidunt, alias cum!</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit error culpa dolore blanditiis expedita beatae, quis saepe eveniet facilis esse. Assumenda, odit voluptates doloremque eligendi libero hic incidunt, alias cum!</p>
		</Intro>
	</div>
);

export default About;
