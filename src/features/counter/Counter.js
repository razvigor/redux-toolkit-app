import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';

const Counter = () => {
	const count = useSelector((state) => state.counter.count);
	const dispatch = useDispatch();
	const [amount, setAmount] = useState(0);
	const amountToNum = Number(amount) || 0;
	return (
		<div className='container mx-auto mt-20'>
			<div className='text-center font-semibold text-2xl'>Counter: {count}</div>
			<div className='container mt-10 flex justify-center'>
				<input
					type='text'
					value={amount}
					onChange={(e) => setAmount(e.target.value)}
					className='h-10 w-72 border border-gray-400 rounded-md pl-4'
				/>
			</div>
			<div className='mt-10 flex justify-center gap-16'>
				<button
					type='button'
					className='px-4 py-2 bg-lime-600 text-slate-50 rounded-md text-xl'
					onClick={() => dispatch(increment(count))}
				>
					Increment
				</button>
				<button
					type='button'
					className='px-4 py-2 bg-lime-600 text-slate-50 rounded-md text-xl'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>

				<button
					type='button'
					className='px-4 py-2 bg-lime-600 text-slate-50 rounded-md text-xl'
					onClick={() => dispatch(incrementByAmount(amountToNum))}
				>
					Add amount
				</button>
				<button
					type='button'
					className='px-4 py-2 bg-lime-600 text-slate-50 rounded-md text-xl'
					onClick={() => dispatch(reset())}
				>
					Reset
				</button>
			</div>
		</div>
	);
};

export default Counter;
