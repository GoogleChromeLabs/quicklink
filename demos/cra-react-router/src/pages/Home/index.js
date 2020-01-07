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

import Code from '@components/Code';
import Window from '@components/Window';
import Feats from '@components/Feats';
import style from './index.module.css';

const Home = () => (
	<div>
		<Window />
		<Feats />
		<section className={style.section}>
			<h2>Installation</h2>
			<Code text="npm install --global @pwa/cli" />
			<Code offset label="OR" text="yarn global add @pwa/cli" />
		</section>
		<section className={style.section}>
			<h2>Commands</h2>
			<Code label="Scaffold a new project!" text="pwa init" />
			<Code label="Run development/live-reload server" text="pwa watch" />
			<Code label="Build production bundle(s)" text="pwa build" />
			<Code label="Generate static HTML exports" text="pwa export" />
		</section>
	</div>
);

export default Home;
