import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { selectAllUsers } from '../users/userSlice';
import { addPost } from './postsSlice';

const AddPostForm = () => {
	const dispatch = useDispatch();
	const users = useSelector(selectAllUsers);
	const navigate = useNavigate();
	const [data, setData] = useState({
		id: '',
		userId: '',
		title: '',
		content: '',
	});
	const canSave =
		Boolean(data.userId) && Boolean(data.title) && Boolean(data.content);
	const [error, setError] = useState('');
	const addData = (e) => {
		const { name, value } = e.target;
		setData({
			...data,
			[name]: value,
		});
	};
	const submitHandler = (e) => {
		e.preventDefault();
		if (canSave) {
			dispatch(addPost(data.title, data.content, data.userId));
			navigate('/posts');
		} else {
			setError('All fields must be typed.');
			setTimeout(() => {
				setError('');
			}, 3000);
		}
	};
	return (
		<div className='mt-10 container mx-auto flex flex-col items-center '>
			<h1 className='text-3xl mb-16'>Add Post</h1>
			<form
				className='flex flex-col w-full md:w-[50%] gap-10'
				onSubmit={submitHandler}
			>
				<input
					type='text'
					value={data.title}
					name='title'
					onChange={addData}
					className='border border-gray-400 pl-2 h-10 rounded-md'
					placeholder='Title'
				/>
				<select
					name='userId'
					onChange={addData}
					className='border border-gray-400 pl-2 h-10 rounded-md'
				>
					<option>Author</option>
					{users.map((user) => (
						<option key={user.id} value={user.id}>
							{user.name}
						</option>
					))}
				</select>

				<textarea
					name='content'
					value={data.content}
					placeholder='Content'
					className='border border-gray-400 pl-2 h-24 rounded-md'
					onChange={addData}
				></textarea>
				<button
					type='submit'
					className='px-5 py-2 border border-gray-400 rounded-md bg-slate-500 text-slate-200 hover:bg-gray-600 disabled:bg-gray-400'
					disabled={!canSave}
				>
					Add Post
				</button>
			</form>
			{error ? <p className='mt-10 text-red-600'>{error}</p> : null}
		</div>
	);
};

export default AddPostForm;
