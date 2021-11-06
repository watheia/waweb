import { Story, Meta } from "@storybook/react"
import { ViewsUser, ViewsUserProps } from "./ViewsUser"

export default {
  component: ViewsUser,
  title: "ViewsUser"
} as Meta

const Template: Story<ViewsUserProps> = (args) => <ViewsUser {...args} />

export const Primary = Template.bind({})
Primary.args = {}
