import { render } from "@testing-library/react"

import ViewsHome from "./ViewsHome"

describe("ViewsHome", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ViewsHome />)
    expect(baseElement).toBeTruthy()
  })
})
