import PageContext from "."

export const MockComponent = () => {
  return <p>Hello, World!</p>
}

export function MockPage() {
  return (
    <div data-testid="@watheia/context">
      <PageContext>
        <MockComponent />
      </PageContext>
    </div>
  )
}
