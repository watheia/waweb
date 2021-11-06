import { render } from "@testing-library/react"

import AtomsText from "./AtomsText"

describe("AtomsText", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AtomsText />)
    expect(baseElement).toBeTruthy()
  })
})
