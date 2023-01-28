import { useEffect, useState } from 'react'

export function Teste() {
  const [count, setCount] = useState(0)

  function handleClickAsync() {
    setTimeout(function delay() {
      setCount((count) => count + 1)
    }, 1000)
  }

  function handleClickSync() {
    setCount(count + 1)
  }

  return (
    <div>
      {count}
      <button onClick={handleClickAsync}>Increase async</button>
      <button onClick={handleClickSync}>Increase sync</button>
    </div>
  )
}
