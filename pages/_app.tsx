import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import redux from "../redux";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={redux}>
      <Component {...pageProps} />
    </Provider>
  );
}
