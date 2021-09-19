import React, { VFC, useReducer } from 'react';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import ColorfulBeads from './ColorfulBeads';
import CounterBoard from './CounterBoard';

type CounterState = { count: number };
const initialState: CounterState = { count: 0 }; // dummy

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    added: (state, action: PayloadAction<number>) => ({
      ...state,
      count: state.count + action.payload,
    }),
    decremented: (state) => ({ ...state, count: state.count - 1 }),
    incremented: (state) => ({ ...state, count: state.count + 1 }),
  },
});

const CounterWidget: VFC<{ initialCount?: number }> = ({ initialCount = 0 }) => {
  const [state, dispatch] = useReducer(
    counterSlice.reducer,
    initialCount,
    (count: number): CounterState => ({ count }),
  );

  const { added, decremented, incremented } = counterSlice.actions;
  const { count } = state;

  return (
    <>
      <CounterBoard
        {...{
          count,
          add: (amount: number) => dispatch(added(amount)),
          decrement: () => dispatch(decremented),
          increment: () => dispatch(incremented),
        }}
      />
      <ColorfulBeads count={count} />
    </>
  );
};

export default CounterWidget;
