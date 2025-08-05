import { useNavigate } from "@tanstack/react-router"
import { useSharedContext } from "../../context"


export function ScreenTwo() {
  const { count, setCount, basePath } = useSharedContext()
  const navigate = useNavigate()

  return (
    <>
      <h2>Step Two</h2>
      <div style={{ display: 'flex', gap: 16 }}>
        <h3>Count: {count}</h3>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>
      <button type="button" onClick={async () => await navigate({ to: `${basePath}/screen-one` })}>
        Back to Step One
      </button>
    </>
  )
} 