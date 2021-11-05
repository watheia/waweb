/*
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
import { Auth, Card, Typography, Space } from "@supabase/ui"
import { supabase } from "@watheia/context"
import styles from "./auth.module.css"

export default function AuthPage() {
  return (
    <div className={styles.page}>
      <div className="flex-1 flex flex-col justify-center p-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div className="authcontainer">
            <Card>
              <Space direction="vertical" size={8}>
                <div>
                  <Typography.Title level={3}>Watheia Gatekeeper</Typography.Title>
                </div>
                <Auth
                  supabaseClient={supabase}
                  providers={["google", "github"]}
                  view={"sign_in"}
                  socialLayout="horizontal"
                  socialButtonSize="xlarge"
                />
              </Space>
            </Card>
          </div>
        </div>
      </div>
      <div className="hidden lg:block relative w-0 flex-1">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1505904267569-f02eaeb45a4c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1908&q=80"
          alt=""
        />
      </div>
    </div>
  )
}
