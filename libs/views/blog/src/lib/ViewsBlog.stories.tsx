import { Story, Meta } from "@storybook/react"
import { ViewsBlog, ViewsBlogProps } from "./ViewsBlog"

export default {
  component: ViewsBlog,
  title: "ViewsBlog"
} as Meta

const Template: Story<ViewsBlogProps> = (args) => <ViewsBlog {...args} />

export const Primary = Template.bind({})
Primary.args = {}
