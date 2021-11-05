import { render } from "@testing-library/react"

import UiLayout from "./UiLayout"

describe("UiLayout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<UiLayout />)
    expect(baseElement).toBeTruthy()
  })
})
