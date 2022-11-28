import { createSlice, nanoid } from '@reduxjs/toolkit';
import { sub } from 'date-fns';

const initialState = [
	{
		id: 1,
		userId: '0',
		title: 'Learning Redux Toolkit',
		content: "I've heard good things,",
		date: sub(new Date(), { minutes: 10 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
	{
		id: 2,
		userId: '1',
		title: 'Slices...',
		content: 'The more I sayt slices, the more I want pizza.',
		date: sub(new Date(), { minutes: 5 }).toISOString(),
		reactions: {
			thumbsUp: 0,
			wow: 0,
			heart: 0,
			rocket: 0,
			coffee: 0,
		},
	},
];

export const postsSlice = createSlice({
	name: 'posts',
	initialState,
	reducers: {
		addPost: {
			reducer(state, action) {
				state.push(action.payload);
			},
			prepare(title, content, userId) {
				return {
					payload: {
						id: nanoid(),
						userId,
						title,
						date: new Date().toISOString(),
						content,
						reactions: {
							thumbsUp: 0,
							wow: 0,
							heart: 0,
							rocket: 0,
							coffee: 0,
						},
					},
				};
			},
		},
		singlePost(state, action) {
			const { postId } = action.payload;
			const post = state.find((item) => item.id === postId);

			return post;
		},
		reactionAdded(state, action) {
			const { postId, reaction } = action.payload;
			const existingPost = state.find((post) => post.id === postId);
			if (existingPost) {
				existingPost.reactions[reaction]++;
			}
		},
	},
});

export const allPosts = (state) => state.posts;

export const { addPost, singlePost, reactionAdded } = postsSlice.actions;

export default postsSlice.reducer;
