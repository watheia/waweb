import { render } from "@testing-library/react"

import { MockPage } from "./context.composition"

describe("ContextProvider", () => {
  it("should render successfully", () => {
    const { getByTestId } = render(<MockPage />)
    expect(getByTestId("@watheia/app.context")).toBeTruthy()
  })
})
