import { render } from "@testing-library/react"

import AtomsView from "./AtomsView"

describe("AtomsView", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<AtomsView />)
    expect(baseElement).toBeTruthy()
  })
})
