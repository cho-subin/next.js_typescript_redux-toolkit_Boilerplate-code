import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import { plusCounter, minusCounter } from '@/redux/slice/counterSlice';
import { plusCounter1, minusCounter1 } from '@/redux/slice/counterSlice1';
import { RootState } from '@/redux/store';
import { useAppDispatch, useAppSelector } from '@/redux/hook';

export default function Home() {
  const dispatch = useAppDispatch();

  const counterValue = useAppSelector((state: RootState) => state.counter?.value)
  const counterValue1 = useAppSelector((state: RootState) => state.counter1?.value)
  console.log(counterValue)
  console.log(counterValue1)

  const handelplusCounter = () => {
    dispatch(plusCounter1({ count: 5 }))
  }

  const handelminusCounter = () => {
    dispatch(minusCounter1({ count: 2 }))
  }

  return (
    <div className={styles.main}>
      <div>
        <p>action 없는 +,-</p>
        <p>count : {counterValue}</p>
        <button onClick={() => { dispatch(plusCounter()) }}>+</button>
        <button onClick={() => { dispatch(minusCounter()) }}>-</button>
      </div>
      <div>
        <p>action 있는 +,-</p>
        <p>count : {counterValue1}</p>
        <button onClick={handelplusCounter}>+</button>
        <button onClick={handelminusCounter}>-</button>
      </div>
    </div>
  )
}
