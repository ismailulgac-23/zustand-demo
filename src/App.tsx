import Counter from "./Counter";
import useStore from "./store"

const App = () => {
  const store = useStore();
  return (
    <div>
      <h1>Zustand React Example</h1>
      {store.counter}
      <button style={{ marginLeft: 12 }} onClick={() => store.changeCounter(250)}>Change Counter</button>
      <hr/>
      <Counter />
    </div>
  )
}

export default App