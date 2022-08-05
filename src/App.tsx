import Counter from "./Counter";
import useStore from "./store"

const App = () => {
  return (
    <div>
      <h1>Zustand React Example</h1>
      {useStore.getState().counter}
    </div>
  )
}

export default App