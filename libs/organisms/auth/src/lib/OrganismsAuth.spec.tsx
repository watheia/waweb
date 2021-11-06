import { render } from "@testing-library/react"

import OrganismsAuth from "./OrganismsAuth"

describe("OrganismsAuth", () => {
  it("should render successfully", () => {
    const { baseElement } = render(<OrganismsAuth />)
    expect(baseElement).toBeTruthy()
  })
})
