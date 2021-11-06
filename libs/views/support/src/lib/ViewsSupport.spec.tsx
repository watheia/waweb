import { render } from "@testing-library/react"

import ViewsSupport from "./ViewsSupport"

describe("ViewsSupport", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ViewsSupport />)
    expect(baseElement).toBeTruthy()
  })
})
