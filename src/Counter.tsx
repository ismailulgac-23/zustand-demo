import React from 'react'
import useStore from "./store"
const Counter = () => {
  const store = useStore();
  return (
    <div>
      {store.counter}
    </div>
  )
}

export default Counter