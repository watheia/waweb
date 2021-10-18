import client from "../supabaseClient"
import clsx from "clsx"
import { HtmlHTMLAttributes, useState } from "react"

import styles from "./login-form.module.css"

export type LoginFormProps = HtmlHTMLAttributes<HTMLFormElement>

export const LoginForm = ({ className, ...props }: LoginFormProps) => {
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState("")

  const handleLogin = async (email: string) => {
    try {
      setLoading(true)
      if (!client) throw new Error("client is uninitialized")
      const { error, user } = await client.auth.signIn({ email })
      if (error) throw error
      console.log("user", user)
      alert("Check your email for the login link!")
    } catch (error) {
      const e: any = error
      console.log("Error thrown:", e.message)
      alert(e.error_description || e.message)
    } finally {
      setLoading(false)
    }
  }
  return (
    <form className={clsx(styles.root, className)} {...props}>
      <div className="sm:flex">
        <div className="min-w-0 flex-1">
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-3 rounded-md border-0 text-base text-shark-900 placeholder-shark-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regal-400 focus:ring-offset-shark-900"
          />
        </div>
        <div className="mt-3 sm:mt-0 sm:ml-3">
          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault()
              handleLogin(email)
            }}
            disabled={loading}
            className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-aqua-500 to-aqua-400 text-shark-50 font-medium hover:from-aqua-600 hover:to-aqua-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-regal-400 focus:ring-offset-shark-900"
          >
            Send token
          </button>
        </div>
      </div>
      <p className="mt-3 text-sm text-shark-300 sm:mt-4">
        Your privacy is important to us. Please read our{" "}
        <a
          href="/term-and-conditions"
          className="font-medium text-shark-50 hover:underline"
        >
          terms and conditions
        </a>{" "}
        for more information.
      </p>
    </form>
  )
}

export default LoginForm
