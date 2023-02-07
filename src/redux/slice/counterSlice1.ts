// 참고 : https://kyounghwan01.github.io/blog/React/redux/redux-toolkit/#createslice
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// initalState 타입 정의
type StateType = {
  value: number;
};

// initalState 생성
const initialState: StateType = {
    value: 0
};

// 슬라이스생성
// createSlice라는 기능을 사용하면 createAction을 통해 따로 액션타입을 정의하지 않아도
// 자동으로 액션타입을 만들어준다.
export const counterSlice1 = createSlice({
  name: 'counter1',
  initialState,
  reducers: {
    // action의 타입은 PayloadAction<제네릭> 으로 정의해준다.
    plusCounter1: (state: StateType, action: PayloadAction<{count:number}>) => {
      // immer가 내장되어 있어서, 불변성 신경 쓰지 않고 바로 수정해주면 된다.
      state.value += action.payload.count;
    },
    minusCounter1: (state: StateType, action: PayloadAction<{count:number}>) => {
      state.value -= action.payload.count;
    }
  }
});

// 액션을 export 해준다.
export const { plusCounter1} = counterSlice1.actions;

// 액션을 export 해준다.
export const { minusCounter1 } = counterSlice1.actions;

// 슬라이스를 export 해준다.
export default counterSlice1;