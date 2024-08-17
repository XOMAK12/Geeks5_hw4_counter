import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy10, decrementBy10, reset } from './counterSlice';
import './Counter.css';

const Counter = () => {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.counter.value);

    return (
        <div className="counter-container">
            <h1 className="counter-value">Счетчик: {count}</h1>
            <div className="counter-buttons">
                <button onClick={() => dispatch(decrementBy10())} disabled={count === 0}>-10</button>
                <button onClick={() => dispatch(decrement())} disabled={count === 0}>-1</button>
                <button onClick={() => dispatch(reset())}>Сброс</button>
                <button onClick={() => dispatch(increment())}>+1</button>
                <button onClick={() => dispatch(incrementBy10())}>+10</button>
            </div>
        </div>
    );
};

export default Counter;