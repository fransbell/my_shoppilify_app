import { MantineProvider } from "@mantine/styles"
import "./font.css"

function MyApp({ Component, pageProps }) {
  return (
    <MantineProvider
      withGlobalStyles
      withNormalizeCSS
      theme={{ fontFamily: "'Quicksand', sans-serif" }}
    >
      <Component {...pageProps} />
    </MantineProvider>
  )
}

export default MyApp
