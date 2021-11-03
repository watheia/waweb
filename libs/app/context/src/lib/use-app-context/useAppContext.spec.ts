import { act, renderHook } from "@testing-library/react-hooks"
import useAppContext from "./useAppContext"

describe("useAppContext", () => {
  it("should render successfully", () => {
    const { result } = renderHook(() => useAppContext())

    expect(result.current.count).toBe(0)

    act(() => {
      result.current.increment()
    })

    expect(result.current.count).toBe(1)
  })
})
