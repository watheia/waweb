import { styled } from "@mui/system"

const Background = styled("div")({
  color: "darkslategray",
  backgroundColor: "aliceblue",
  padding: 8,
  borderRadius: 4
})

export default function TestComponent({ name = "world" }) {
  return (
    <Background>
      <div>Hello, {name}!</div>
    </Background>
  )
}
