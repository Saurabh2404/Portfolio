import "@/styles/globals.css"
import { ContextProvider } from "../context/context"
import { useEffect } from "react"
import { useRouter } from "next/router"
import Head from "next/head"

function App({ Component, pageProps }) {
  const router = useRouter()

  useEffect(() => {
    const elements = document.querySelectorAll(".reveal, .reveal-left, .reveal-scale")
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible")
        })
      },
      { threshold: 0.12, rootMargin: "0px 0px -36px 0px" }
    )

    elements.forEach((element) => observer.observe(element))
    return () => observer.disconnect()
  }, [router.pathname])

  return (
    <ContextProvider>
      <Head>
        <title>{`${({"/": "Home", "/about": "About", "/projects": "Projects", "/contact": "Contact"})[router.pathname] || "Portfolio"} | Saurabh Kumar Singh`}</title>
      </Head>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default App
