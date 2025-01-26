"use clients";

import { ReactNode } from "react";

import { Provider } from "react-redux";
import { store } from "../store/store";

import ReactQueryProvider from "./react-query-provider";
import ThemeProvider from "./them-providers";

interface ClientProvidersProps {
  children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
  return (
    <Provider store={store}>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <ReactQueryProvider>{children}</ReactQueryProvider>
      </ThemeProvider>
    </Provider>
  );
}
