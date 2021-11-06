import { render } from "@testing-library/react"

import MoleculesLayout from "./MoleculesLayout"

describe("MoleculesLayout", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<MoleculesLayout />)
    expect(baseElement).toBeTruthy()
  })
})
