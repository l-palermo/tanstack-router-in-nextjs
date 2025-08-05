import { useNavigate } from "@tanstack/react-router"
import { useSharedContext } from "../../context"

export function ScreenOne() {
  const navigate = useNavigate()
  const { count, setCount, basePath } = useSharedContext()

  return (
    <>
      <h2>Step One</h2>
      <div style={{ display: 'flex', gap: 16 }}>
        <h3>Count: {count}</h3>
        <button type="button" onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>
      <button type="button" onClick={async () => await navigate({ to: `${basePath}/screen-two` })}>
        Go to Step Two
      </button>
    </>
  )
}