import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './slice/counterSlice';
import counterSlice1 from './slice/counterSlice1';

// 리덕스 store 생성함수
const makeStore = () => {
  // 미들웨어 추가(생략 가능)

  // 슬라이스 통합 store 생성
  const store = configureStore({
    reducer: {
      counter: counterSlice.reducer,
      counter1: counterSlice1.reducer,
    },
    //middleware, // 미들웨어 불필요시 생략
    // middleware: [...getDefaultMiddleware(), logger]
    devTools: process.env.NODE_ENV === 'development' // 개발자도구 설정
  });

  return store;
};

// store 생성
const store = makeStore();

// store 엑스포트
export default store;

// RootState 엑스포트
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;