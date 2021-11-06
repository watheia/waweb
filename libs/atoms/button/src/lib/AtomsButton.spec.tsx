import { render } from "@testing-library/react"

import AtomsButton from "./AtomsButton"

describe("AtomsButton", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AtomsButton />)
    expect(baseElement).toBeTruthy()
  })
})
