import "@/styles/globals.css"
import { ContextProvider } from "../context/context"
import { appWithTranslation } from "next-i18next"

function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

//export default appWithTranslation(App)
export default App
