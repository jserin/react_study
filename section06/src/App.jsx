import Viewer from "./components/Viewer"
import Controller from "./components/Controller"
import "./App.css"
import { useEffect, useState } from "react"

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("gg")
  }, [count])

  const onClickButton = (value) => {
    setCount(count + value);
  }

  return (
    <div className="App">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller onClickButton={onClickButton} />
      </section>
    </div>
  )
}

export default App
