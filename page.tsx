"use client"

import { useEffect } from "react"

const Page = () => {
  useEffect(() => {
    // Register Service Worker
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/sw.js")
          .then((registration) => {
            console.log("SW registered: ", registration)
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError)
          })
      })
    }
  }, [])

  // ** rest of code here **

  return (
    <div>
      <h1>Welcome to the Page</h1>
      {/* Additional content can be added here */}
    </div>
  )
}

export default Page
