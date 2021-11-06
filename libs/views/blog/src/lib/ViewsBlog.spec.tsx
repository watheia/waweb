import { render } from "@testing-library/react"

import ViewsBlog from "./ViewsBlog"

describe("ViewsBlog", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ViewsBlog />)
    expect(baseElement).toBeTruthy()
  })
})
