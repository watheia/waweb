import { Story, Meta } from "@storybook/react"
import { ViewsHome, ViewsHomeProps } from "./ViewsHome"

export default {
  component: ViewsHome,
  title: "ViewsHome"
} as Meta

const Template: Story<ViewsHomeProps> = (args) => <ViewsHome {...args} />

export const Primary = Template.bind({})
Primary.args = {}
