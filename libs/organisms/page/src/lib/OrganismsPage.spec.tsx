import { render } from "@testing-library/react"

import OrganismsPage from "./OrganismsPage"

describe("OrganismsPage", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<OrganismsPage />)
    expect(baseElement).toBeTruthy()
  })
})
