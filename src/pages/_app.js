import "@/styles/globals.css"
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
    <>
      <Head>
        <title>Saurabh Kumar Singh</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App
