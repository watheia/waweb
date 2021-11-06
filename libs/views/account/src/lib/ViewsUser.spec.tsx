import { render } from "@testing-library/react"

import ViewsUser from "./ViewsUser"

describe("ViewsUser", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<ViewsUser />)
    expect(baseElement).toBeTruthy()
  })
})
