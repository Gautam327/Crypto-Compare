import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import store from '@/ReduxStore/FavouritesSlice'
import { Provider } from 'react-redux'
import ThemeContextProvider from '@/components/theme/ThemeContext';


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
       <ThemeContextProvider>

      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
      </ThemeContextProvider>

    </ChakraProvider>
  )
}
