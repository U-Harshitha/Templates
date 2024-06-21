/**
 * v0 by Vercel.
 * @see https://v0.dev/t/NLEvppgVLHj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client"

import { useState } from "react"

export default function Component() {
  const [isLoginActive, setIsLoginActive] = useState(true)
  return (
    <div className="grid h-screen w-full grid-cols-1 md:grid-cols-2">
      <div
        className={`relative flex h-full w-full items-center justify-center bg-primary transition-all duration-500 ease-in-out ${
          isLoginActive ? "col-start-1" : "col-start-2"
        }`}
      >
        <div className="z-10 w-full max-w-md space-y-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-primary-foreground">Sign in to your account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Or{" "}
              <button
                type="button"
                className="font-medium text-primary hover:text-primary-foreground"
                onClick={() => setIsLoginActive(false)}
              >
                create a new account
              </button>
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                Sign in
              </button>
            </div>
            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md border border-transparent bg-primary py-2 px-4 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                <ChromeIcon className="mr-2 h-5 w-5" />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
      <div
        className={`relative flex h-full w-full items-center justify-center bg-secondary transition-all duration-500 ease-in-out ${
          isLoginActive ? "col-start-2" : "col-start-1"
        }`}
      >
        <div className="z-10 w-full max-w-md space-y-6 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-secondary-foreground">Create a new account</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Or{" "}
              <button
                type="button"
                className="font-medium text-secondary hover:text-secondary-foreground"
                onClick={() => setIsLoginActive(true)}
              >
                sign in to your existing account
              </button>
            </p>
          </div>
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-muted-foreground">
                Name
              </label>
              <div className="mt-1">
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-muted-foreground">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-muted-foreground">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  required
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-secondary focus:ring-secondary sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-secondary-foreground shadow-sm hover:bg-secondary-foreground hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                Create account
              </button>
            </div>
            <div>
              <button
                type="button"
                className="flex w-full justify-center rounded-md border border-transparent bg-secondary py-2 px-4 text-sm font-medium text-secondary-foreground shadow-sm hover:bg-secondary-foreground hover:text-secondary focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2"
              >
                <ChromeIcon className="mr-2 h-5 w-5" />
                Sign up with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}