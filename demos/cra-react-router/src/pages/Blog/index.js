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
import { Link } from 'react-router-dom';

import Intro from '@components/Intro';
import Card from '@components/Card';
import style from './index.module.css';

const Blog = () => (
	<div className={style.blog}>
		<Intro>
			<h1>Welcome to my Blog!</h1>
			<p>
				<span className={style.callout}>NEW</span>
				&nbsp;articles posted every week. Please be sure to subscribe if you like what you see.
				<span role="img" aria-label="eyes">&nbsp;👀&nbsp;</span>
				Yadda yadda...
			</p>
			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea nam, ratione natus. Aliquid veritatis illo veniam. Quam tempora quia provident facilis, molestiae iure reiciendis officia, fugit vitae ullam voluptatem quis.</p>
			<p className={style.indent}>Please select an Article to read:</p>
		</Intro>
		<div className={style.blog_grid}>
			{ Array.from({length: 10}).map((_, idx) => (
				<Link key={idx} className={style.blog_item} to={`/blog/article${idx}`}>
					<Card>
						<strong>Article #{idx}</strong>
						<em>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore enim, natus. Beatae ducimus quasi doloremque ad quam qui dolor, architecto repellendus provident rem nostrum accusamus, magnam voluptate vel voluptas iste.</em>
					</Card>
				</Link>
			)) }
		</div>
	</div>
);

export default Blog;
