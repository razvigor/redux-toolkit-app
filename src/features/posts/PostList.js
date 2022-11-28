import React from 'react';
import { useSelector } from 'react-redux';
import { allPosts } from './postsSlice';
import { Link } from 'react-router-dom';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';
import ReactionButtons from './ReactionButtons';

const PostList = () => {
	const posts = useSelector(allPosts);
	const orderedPosts = posts
		.slice()
		.sort((a, b) => b.date.localeCompare(a.date));

	const renderedPosts = orderedPosts?.map((post) => (
		<article
			key={post.id}
			className='w-full md:w-[48%] lg:w-[32%] border border-gray-400 rounded-2xl flex flex-wrap flex-col gap-6 p-4 md:p-10 first-line: overflow-hidden'
		>
			<h3 className='text-2xl font-semibold font-serif'>{post.title}</h3>
			<p>{post.content}</p>
			<div className='flex justify-between items-center'>
				<PostAuthor userId={post.userId} />
				<TimeAgo timestamp={post.date} />
			</div>
			<ReactionButtons post={post} />
		</article>
	));
	return (
		<div className='container mx-auto mt-16 px-8 md:px-0'>
			<h1 className='text-4xl mb-14 font-semibold font-serif'>Posts</h1>
			<div className='flex gap-4 flex-wrap'>{renderedPosts}</div>
			<Link
				to='new'
				className='block text-center p-4 border border-gray-400 mt-4 rounded-md bg-slate-400 text-slate-50 hover:bg-slate-500'
			>
				New Post
			</Link>
		</div>
	);
};

export default PostList;
