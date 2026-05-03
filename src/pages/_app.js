import "@/styles/globals.css"
import { ContextProvider } from "../context/context"

function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default App
